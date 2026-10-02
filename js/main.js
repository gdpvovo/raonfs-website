(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Mobile navigation ---- */
  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  var navBackdrop = document.getElementById('navBackdrop');

  if (navToggle && nav) {
    function setDrawer(open) {
      nav.classList.toggle('is-open', open);
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
      if (navBackdrop) navBackdrop.hidden = !open;
      // Same lock the lightbox uses, so the page can't scroll under the drawer.
      document.body.classList.toggle('is-locked', open);
    }

    navToggle.addEventListener('click', function () {
      setDrawer(!nav.classList.contains('is-open'));
    });

    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') setDrawer(false);
    });

    // Tapping the page behind the drawer closes it — Escape is not reachable on a phone.
    if (navBackdrop) navBackdrop.addEventListener('click', function () { setDrawer(false); });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setDrawer(false);
        navToggle.focus();
      }
    });
  }

  /* ---- Sticky call bar ---- */
  var callbar = document.getElementById('callbar');
  if (callbar) {
    var hero = document.getElementById('top');
    var contact = document.getElementById('contact');
    if ('IntersectionObserver' in window && hero && contact) {
      // Hidden over the hero (its own CTAs are right there) and over the
      // contact section (which already offers every route).
      var near = { hero: true, contact: false };
      var barObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.target === hero) near.hero = entry.isIntersecting;
          if (entry.target === contact) near.contact = entry.isIntersecting;
        });
        callbar.classList.toggle('is-shown', !near.hero && !near.contact);
      }, { threshold: 0 });
      barObserver.observe(hero);
      barObserver.observe(contact);
    } else {
      callbar.classList.add('is-shown');
    }
  }

  /* ---- Header shadow on scroll ---- */
  var header = document.getElementById('siteHeader');
  var ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
      ticking = false;
    });
  }
  if (header) {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- Scroll reveal ---- */
  var revealables = document.querySelectorAll('.reveal');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });

    // Two-beat entrance: the section head leads, its content follows once.
    revealables.forEach(function (el) {
      el.style.transitionDelay = el.classList.contains('section-head') ? '0ms' : '90ms';
      revealObserver.observe(el);
    });
  }

  /* ---- Active nav link ---- */
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = nav ? nav.querySelectorAll('a[href^="#"]') : [];

  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        navLinks.forEach(function (link) {
          link.classList.toggle('is-current', link.getAttribute('href') === '#' + id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (s) { sectionObserver.observe(s); });
  }

  /* ---- Business performance filter ---- */
  var chips = document.querySelectorAll('.chip[data-filter]');
  var rows = document.querySelectorAll('#worksBody tr');
  var countEl = document.getElementById('worksCount');
  var moreBtn = document.getElementById('worksMore');

  var COLLAPSED_ROWS = 12;
  var currentFilter = 'all';
  var expanded = false;

  function render() {
    var matched = 0;
    var visible = 0;

    rows.forEach(function (row) {
      var match = currentFilter === 'all' || row.dataset.cat === currentFilter;
      delete row.dataset.fold;
      if (!match) { row.hidden = true; return; }
      matched++;
      var withinLimit = expanded || matched <= COLLAPSED_ROWS;
      row.hidden = !withinLimit;
      // Marks rows hidden only by the collapse, so print can restore them
      // without also resurrecting rows the active filter excluded.
      if (!withinLimit) row.dataset.fold = '';
      if (withinLimit) visible++;
    });

    if (countEl) {
      countEl.textContent = matched === visible
        ? '총 ' + matched + '건'
        : matched + '건 중 ' + visible + '건 표시';
    }

    if (moreBtn) {
      var needsToggle = matched > COLLAPSED_ROWS;
      moreBtn.hidden = !needsToggle;
      moreBtn.textContent = expanded ? '접기' : '전체 ' + matched + '건 보기';
      moreBtn.setAttribute('aria-expanded', String(expanded));
    }
  }

  chips.forEach(function (chip) {
    chip.setAttribute('role', 'radio');
    chip.setAttribute('aria-checked', chip.classList.contains('is-active') ? 'true' : 'false');
    chip.addEventListener('click', function () {
      chips.forEach(function (c) {
        c.classList.remove('is-active');
        c.setAttribute('aria-checked', 'false');
      });
      chip.classList.add('is-active');
      chip.setAttribute('aria-checked', 'true');
      currentFilter = chip.dataset.filter;
      // Deliberately keeps `expanded`: silently re-folding a list the user
      // had opened moved the page under them.
      render();
    });
  });

  if (moreBtn) {
    moreBtn.addEventListener('click', function () {
      expanded = !expanded;
      render();
      if (!expanded) {
        document.getElementById('works').scrollIntoView({
          behavior: reduceMotion ? 'auto' : 'smooth',
          block: 'start'
        });
      }
    });
  }

  if (rows.length) render();

  /* ---- Certificate lightbox ---- */
  var certTriggers = Array.prototype.slice.call(document.querySelectorAll('a.cert-open'));
  var lightbox = document.getElementById('certLightbox');

  if (certTriggers.length && lightbox) {
    var panel = lightbox.querySelector('.lightbox-panel');
    var body = lightbox.querySelector('.lightbox-body');

    // Created on first open, so a srcless <img> never sits in the document.
    var certImage = null;
    var certTitle = document.getElementById('certTitle');
    var certDownload = document.getElementById('certDownload');
    var certIndex = document.getElementById('certIndex');
    var certPrev = document.getElementById('certPrev');
    var certNext = document.getElementById('certNext');
    var certClose = document.getElementById('certClose');

    var activeIndex = 0;
    var lastFocused = null;
    var outside = [document.getElementById('siteHeader'), document.getElementById('main'), document.querySelector('.site-footer')];

    function setOutsideInert(on) {
      outside.forEach(function (el) {
        if (!el) return;
        if (on) el.setAttribute('inert', '');
        else el.removeAttribute('inert');
      });
    }

    function show(index) {
      activeIndex = (index + certTriggers.length) % certTriggers.length;
      var t = certTriggers[activeIndex];
      var src = t.getAttribute('href');

      if (!certImage) {
        certImage = document.createElement('img');
        certImage.id = 'certImage';
        body.appendChild(certImage);
      }
      body.scrollTop = 0;
      certImage.src = src;
      certImage.alt = t.dataset.title + ' 이미지';
      certTitle.textContent = t.dataset.title;
      // View the raster, download the source PDF where one exists.
      certDownload.href = t.dataset.pdf || src;
      certDownload.setAttribute('download', t.dataset.file);
      certIndex.textContent = (activeIndex + 1) + ' / ' + certTriggers.length;
    }

    function openLightbox(index) {
      lastFocused = document.activeElement;
      show(index);
      lightbox.hidden = false;
      setOutsideInert(true);
      document.body.classList.add('is-locked');
      certClose.focus();
    }

    function closeLightbox() {
      lightbox.hidden = true;
      if (certImage) { certImage.remove(); certImage = null; }
      setOutsideInert(false);
      document.body.classList.remove('is-locked');
      if (lastFocused && lastFocused.focus) lastFocused.focus();
    }

    certTriggers.forEach(function (trigger, i) {
      trigger.addEventListener('click', function (e) {
        // Let the browser own new-tab, save-as, and download intents.
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        openLightbox(i);
      });
    });

    certPrev.addEventListener('click', function () { show(activeIndex - 1); });
    certNext.addEventListener('click', function () { show(activeIndex + 1); });
    certClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', function (e) {
      if (e.target.hasAttribute('data-close')) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (lightbox.hidden) return;

      if (e.key === 'Escape') { closeLightbox(); return; }
      if (e.key === 'ArrowLeft') { show(activeIndex - 1); return; }
      if (e.key === 'ArrowRight') { show(activeIndex + 1); return; }

      if (e.key === 'Tab') {
        var focusable = panel.querySelectorAll('a[href], button:not([disabled])');
        if (!focusable.length) return;
        var first = focusable[0];
        var last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }

  /* ---- System spec lightbox ---- */
  var specTriggers = Array.prototype.slice.call(document.querySelectorAll('.spec-open'));
  var specLightbox = document.getElementById('specLightbox');

  if (specTriggers.length && specLightbox) {
    var specPanel = specLightbox.querySelector('.lightbox-panel');
    var specBody = document.getElementById('specBody');
    var specTitle = document.getElementById('specTitle');
    var specClose = document.getElementById('specClose');

    var specLastFocused = null;
    var specOutside = [document.getElementById('siteHeader'), document.getElementById('main'), document.querySelector('.site-footer'), document.getElementById('certLightbox')];

    function setSpecOutsideInert(on) {
      specOutside.forEach(function (el) {
        if (!el) return;
        if (on) el.setAttribute('inert', '');
        else el.removeAttribute('inert');
      });
    }

    function openSpecLightbox(trigger) {
      var template = document.getElementById(trigger.dataset.spec);
      if (!template) return;

      specLastFocused = document.activeElement;
      specBody.innerHTML = '';
      specBody.appendChild(template.content.cloneNode(true));
      specTitle.textContent = trigger.dataset.title || '제품 사양';

      specLightbox.hidden = false;
      setSpecOutsideInert(true);
      document.body.classList.add('is-locked');
      specClose.focus();
    }

    function closeSpecLightbox() {
      specLightbox.hidden = true;
      specBody.innerHTML = '';
      setSpecOutsideInert(false);
      document.body.classList.remove('is-locked');
      if (specLastFocused && specLastFocused.focus) specLastFocused.focus();
    }

    specTriggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () { openSpecLightbox(trigger); });
    });

    specClose.addEventListener('click', closeSpecLightbox);

    specLightbox.addEventListener('click', function (e) {
      if (e.target.hasAttribute('data-close')) closeSpecLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (specLightbox.hidden) return;

      if (e.key === 'Escape') { closeSpecLightbox(); return; }

      if (e.key === 'Tab') {
        var focusable = specPanel.querySelectorAll('a[href], button:not([disabled])');
        if (!focusable.length) return;
        var first = focusable[0];
        var last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }

  /* ---- Footer year ---- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
