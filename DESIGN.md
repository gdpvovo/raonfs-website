---
name: Raon FS
description: 소방시설 설계·시공 전문기업 라온에프에스의 기업 사이트 — 조용한 계기판처럼, 신호가 필요할 때만 말한다
colors:
  midnight-navy: "#0F172A"
  signal-blue: "#0369A1"
  signal-blue-deep: "#075985"
  signal-blue-on-dark: "#7CC6F5"
  paper: "#FFFFFF"
  cool-paper: "#F8FAFC"
  ink: "#0B1220"
  slate-ink: "#334155"
  quiet-ink: "#5A6B80"
  quiet-fill: "#EFF3F8"
  hairline: "#E2E8F0"
  hairline-strong: "#CBD5E1"
  cat-industrial: "#02736E"
  cat-military: "#3C740D"
  cat-public: "#B88A06"
  cat-hotel: "#BF5546"
  cat-medical: "#CD6CA6"
  cat-office: "#736BC9"
typography:
  display:
    fontFamily: "Lexend, Noto Sans KR, -apple-system, sans-serif"
    fontSize: "clamp(2.75rem, 8vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Lexend, Noto Sans KR, -apple-system, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Lexend, Noto Sans KR, -apple-system, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Noto Sans KR, Lexend, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Lexend, Noto Sans KR, -apple-system, sans-serif"
    fontSize: "12.5px"
    fontWeight: 500
    lineHeight: 1.7
    letterSpacing: "normal"
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  pill: "999px"
spacing:
  2: "16px"
  3: "24px"
  4: "32px"
  5: "48px"
  6: "64px"
  7: "96px"
components:
  button-primary:
    backgroundColor: "{colors.signal-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "12px 26px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.signal-blue-deep}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.midnight-navy}"
    rounded: "{rounded.sm}"
    padding: "12px 26px"
    height: "48px"
  chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.slate-ink}"
    rounded: "{rounded.pill}"
    padding: "8px 18px"
    height: "44px"
  chip-selected:
    backgroundColor: "{colors.midnight-navy}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "8px 18px"
    height: "44px"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "32px"
  tag:
    rounded: "{rounded.pill}"
    padding: "3px 10px"
    typography: "{typography.label}"
  contact-action:
    backgroundColor: "{colors.signal-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "16px 20px"
    height: "88px"
---

# Design System: Raon FS

## Overview

**Creative North Star: "조용한 계기판 (The Quiet Instrument)"**

이 회사가 파는 물건이 곧 이 시스템의 은유입니다. 화재수신기는 평소에 침묵합니다. 패널은 어둡고, 표시등은 꺼져 있고, 아무 일도 일어나지 않는 것처럼 보입니다. 그러다 신호해야 할 순간이 오면 단 하나의 불빛이 불벼락처럼 말합니다. 이 사이트도 그렇게 동작합니다 — 화면의 거의 전부가 종이 흰색, 차가운 회색, 야간 네이비의 무채색 대역이고, 그 위에 신호 블루가 단 하나 켜져 있습니다. 그 파랑이 있는 곳이 곧 눌러야 할 곳입니다.

성격은 절제·정밀·신뢰입니다. 이 사이트를 보는 사람은 감동하러 오지 않습니다. 발주처 담당자가 "이 회사를 입찰 명단에 올릴 것인가"를 판단하러 오고, 그 판단의 재료는 45건의 실적과 인증번호와 유효기간입니다. 그래서 이 시스템은 스스로를 드러내지 않습니다. 여백을 넓게 두고, 장식을 걷어내고, 모든 수치를 검증 가능한 상태로 둡니다. 화려함이 아니라 **어긋난 곳이 없다는 사실**로 신뢰를 얻습니다.

깊이는 그림자가 아니라 톤으로 만듭니다. 섹션은 흰색과 차가운 회색을 번갈아 밟으며 리듬을 만들고, 마지막 문의 구간에서만 야간 네이비로 내려앉습니다. 그림자는 실제로 표면에서 들어올려진 것 — 지도, 라이트박스, hover된 카드 — 에만 허용됩니다.

**Key Characteristics:**
- 무채색 위의 단일 신호색: 액션은 언제나 신호 블루 하나
- 색은 장식이 아니라 부호: 6개 카테고리 색은 데이터를 부호화할 때만 등장
- 톤 레이어링으로 만드는 깊이, 들어올려진 것에만 허용되는 그림자
- 한글·라틴 이중 조판: 한 줄 안에서 두 서체가 각자의 문자를 맡음
- 검증 가능성이 미학보다 우선: 모든 대비·타깃·수치는 측정된 값

## Colors

무채색이 압도적으로 지배하고, 채도는 오직 두 가지 일 — 행동을 지시하거나 데이터를 분류할 때 — 에만 쓰입니다.

### Primary
- **신호 블루 / Signal Blue** (#0369A1): 이 시스템에서 "누를 수 있음"을 뜻하는 유일한 색. 주 버튼, 인라인 링크, 포커스 링, 아이콘 강조에 씁니다. 흰 배경에서 5.93:1로 텍스트 대비를 통과하며, 채도를 가진 요소 중 가장 자주 등장하되 화면 면적으로는 가장 적게 차지합니다.
- **신호 블루 심층 / Signal Blue Deep** (#075985): 주 버튼의 hover·active 상태. 색상은 유지하고 명도만 떨어뜨려, 누른다는 사실이 색이 바뀌는 게 아니라 눌린 것처럼 보이게 합니다.
- **밝은 신호 블루 / Signal Blue on Dark** (#7CC6F5): 야간 네이비 위에서만 쓰는 대체 신호색. #0369A1은 네이비 위에서 3.01:1로 겨우 걸치기 때문에, 어두운 표면은 자기 몫의 링과 링크색을 따로 갖습니다.

### Neutral
- **야간 네이비 / Midnight Navy** (#0F172A): 제목 색이자 어두운 대역의 바탕. 문의 섹션과 조직도 최상단 노드, 선택된 칩이 이 색으로 내려앉습니다.
- **잉크 / Ink** (#0B1220): 본문 기본색. 네이비보다 한 단계 더 어두워 장문에서 눈이 덜 피로합니다.
- **슬레이트 잉크 / Slate Ink** (#334155): 2차 텍스트. 카드 본문, 표 셀, 목록 항목.
- **조용한 잉크 / Quiet Ink** (#5A6B80): 3차 텍스트. 라벨, 캡션, 보조 설명. 흰 배경에서 5.4:1로 여전히 본문 기준을 통과합니다.
- **종이 / Paper** (#FFFFFF) · **차가운 종이 / Cool Paper** (#F8FAFC): 번갈아 밟는 두 개의 바탕. 이 둘의 교대가 섹션 리듬을 만듭니다.
- **조용한 채움 / Quiet Fill** (#EFF3F8): 표 머리글, 시스템 이미지 상자 등 "한 단계 안쪽" 표면.
- **헤어라인 / Hairline** (#E2E8F0) · **강한 헤어라인 / Hairline Strong** (#CBD5E1): 구분선과 테두리. 후자는 조작 가능한 컨트롤(칩, 고스트 버튼, 햄버거)의 경계에만 씁니다 — 만질 수 있는 것은 더 또렷한 선을 갖습니다.

### Tertiary — 카테고리 부호
실적 표의 건물 유형을 부호화하는 6색. OKLCH에서 도출했고, 액션 블루와 겨루지 않도록 **색상환 220–265° 구간을 비워두었습니다.**

- **공장·산업** (#02736E) · **군부대** (#3C740D) · **공공·교육** (#B88A06) · **호텔·리조트** (#BF5546) · **의료** (#CD6CA6) · **업무·상업** (#736BC9)

각 색은 알약 배경(명도 .950)·알약 텍스트(명도 .400)·도트(명도 .500/.580/.660) 세 역할을 갖습니다. 도트의 명도를 일부러 어긋나게 계단 배치한 이유는 6색을 색상만으로는 적록색약에서 분리할 수 없기 때문입니다 — 균일 명도에서 공공/호텔이 ΔE 5로 붕괴했고, 명도를 축으로 추가해 최악값을 ΔE 16까지 끌어올렸습니다.

### Named Rules

**The One Signal Rule.** 신호 블루는 "누를 수 있음"만을 뜻합니다. 제목, 구분선, 아이콘 장식, 배경 무늬에 이 색을 쓰지 마십시오. 이 색이 흔해지는 순간 계기판의 표시등이 꺼집니다.

**The Colour-Never-Alone Rule.** 색이 정보를 나르는 곳에서 색은 절대 유일한 부호가 아닙니다. 모든 카테고리 알약과 필터 칩은 자기 텍스트 라벨을 함께 갖습니다. `업무시설`이라는 같은 라벨이 세 카테고리에 걸쳐 나타나기 때문에 색은 판별을 **돕고**, 텍스트가 판별을 **확정**합니다.

**The Dark-Surface Exception Rule.** 어두운 표면 위에서는 밝은 신호 블루(#7CC6F5)로 갈아탑니다. 링크·포커스 링 모두 해당됩니다. 밝은 배경의 값을 어두운 배경에 그대로 쓰지 마십시오.

## Typography

**Display Font:** Lexend (fallback: Noto Sans KR, Apple SD Gothic Neo)
**Body Font:** Noto Sans KR (fallback: Lexend, Apple SD Gothic Neo)

**Character:** 두 서체가 경쟁하지 않고 **문자 체계를 나눠 맡습니다.** 스택 순서만으로 라틴 문자는 Lexend가, 한글은 Noto Sans KR이 렌더링합니다. Lexend의 넓은 카운터와 기하학적 골격이 숫자와 영문 라벨에 계기판 같은 명료함을 주고, Noto Sans KR이 장문 한글의 가독을 맡습니다. 한 줄 안에서 두 서체가 만나지만 같은 글자를 두고 다투지 않습니다.

### Hierarchy
- **Display** (700, `clamp(2.75rem, 8vw, 5.5rem)`, 1.08, -0.04em): 히어로 한 곳에만. 회사의 3대 가치가 유일한 사용처입니다. 자간은 -0.04em이 바닥이며 더 조이지 않습니다.
- **Headline** (600, `clamp(1.75rem, 4vw, 2.75rem)`, 1.25, -0.035em): 섹션 제목. 한글 제목 옆에 영문이 같은 줄에서 따라붙습니다(0.42em, 400, 조용한 잉크).
- **Title** (600, 1.1875rem, 1.25): 카드 제목, 연혁 항목, 조직 노드.
- **Body** (400, 1rem, 1.7): 본문. 히어로 리드는 1.125rem / 1.85까지 올라갑니다.
- **Label** (500, 12.5–14px): 태그, 칩, 캡션, 표 머리글.

### Named Rules

**The em-Not-ch Rule.** 한글은 전각이라 `ch`(숫자 0의 폭)가 실제 줄 길이를 심하게 과소 계산합니다. 본문 폭 제한은 반드시 `em`으로 적으십시오 — 히어로 리드 `38em`, 섹션 설명 `46em`. `65–75ch` 같은 라틴 기준을 한글 조판에 그대로 옮기지 마십시오.

**The No-Tracking-on-Hangul Rule.** 한글에 자간을 벌리지 마십시오. `letter-spacing`과 `text-transform: uppercase`는 라틴 문자 라벨에만 씁니다. 12px 한글에 .1em을 준 표 머리글이 읽기 불편했고, 제거했습니다.

**The Tabular Numerals Rule.** 비교되는 숫자에는 `font-variant-numeric: tabular-nums`를 씁니다 — 연혁 연도, 실적 건수, 전화번호, 푸터. 자릿수가 흔들리면 기록으로 읽히지 않습니다.

## Layout

중앙 정렬 단일 칼럼, 컨테이너 최대 1160px에 좌우 24px 여백. 그리드 시스템은 없고, 필요한 곳에서만 `grid-template-columns`로 지역적 격자를 만듭니다.

간격 척도는 16 / 24 / 32 / 48 / 64 / 96px의 6단계입니다(8px 기준의 짝수 배수). 섹션 상하 여백은 `clamp(64px, 9vw, 112px)`로 뷰포트에 따라 호흡합니다.

브레이크포인트는 세 개이며 각각 분명한 일을 합니다. **1024px** 이하에서 메뉴 글자와 로고가 줄어듭니다. **900px** 이하에서 메뉴가 드로어로 접히고 하단 고정 전화 바가 등장합니다. **768px** 이하에서 실적 표가 카드로 재구성되고, **640px** 이하에서 연혁·조직도·프로필이 단일 칼럼으로 무너집니다.

`word-break: keep-all`을 전역에 걸어 한글 단어가 음절 단위로 쪼개지지 않게 합니다.

### Named Rules

**The No-Horizontal-Scroll Rule.** 페이지 본문은 어떤 뷰포트에서도 가로로 스크롤되지 않습니다. 660px 표를 375px에 밀어 넣던 가로 스크롤은 카드 재구성으로 제거했습니다. 넓은 내용은 폭을 강요하지 말고 구조를 바꾸십시오.

## Elevation & Depth

**이 시스템은 톤으로 층을 만듭니다.** 깊이의 주된 수단은 그림자가 아니라 배경 단계입니다 — 종이 흰색, 차가운 종이(#F8FAFC), 조용한 채움(#EFF3F8), 그리고 야간 네이비. 섹션이 이 대역을 번갈아 밟으며 페이지에 리듬과 구획을 만듭니다.

그림자는 세 개뿐이고, **실제로 표면에서 들어올려진 것에만** 허용됩니다. 셋 모두 오프셋과 부드러운 번짐을 가지며 네이비 색조의 투명도로 만들어 회색 얼룩이 지지 않습니다.

### Shadow Vocabulary
- **sm** (`0 1px 2px rgba(15,23,42,.06)`): 스크롤된 헤더, 조직 노드. 표면에서 종이 한 장 뜬 정도.
- **md** (`0 4px 16px rgba(15,23,42,.07)`): 카드 hover, 라이트박스 화살표. 상태 반응으로만 나타납니다.
- **lg** (`0 16px 48px rgba(15,23,42,.1)`): 지도, 라이트박스 패널. 페이지 위로 완전히 떠 있는 것.

### Named Rules

**The Lift-Only Rule.** 표면은 기본 상태에서 평평합니다. 그림자는 hover, 모달, 고정 오버레이처럼 **실제로 들어올려진 순간에만** 나타납니다. 정지 상태의 카드에 그림자를 깔지 마십시오 — 구분은 헤어라인과 배경 단계가 합니다.

## Shapes

모서리는 세 단계입니다. **6px**은 컨트롤(버튼, 입력, 작은 표면), **10px**은 컨테이너(카드, 표, 이미지 상자, 문의 액션), **16px**은 가장 큰 표면(시스템 카드, 라이트박스 패널). **999px**의 완전 알약형은 분류 요소 — 필터 칩과 카테고리 태그 — 에만 씁니다.

형태 언어의 핵심은 **1px 헤어라인**입니다. 이 시스템은 면을 채워 구분하기보다 선으로 구획합니다. 카드 테두리, 표 행 구분, 프로필 목록, 히어로 사실 줄, 조직도 연결선이 모두 1px입니다. 두꺼운 선은 두 곳에만 있습니다 — 사업분야 칼럼 상단의 2px 네이비 룰, 그리고 모바일 실적 카드 좌측의 5px 카테고리 레일.

### Named Rules

**The Hairline-First Rule.** 새 구획이 필요하면 먼저 1px 선을 시도하십시오. 배경 채움과 그림자는 선으로 해결되지 않을 때만 씁니다.

**The Pill-Means-Category Rule.** 완전 알약형(999px)은 분류를 뜻합니다. 버튼에 알약형을 쓰지 마십시오 — 버튼은 6px입니다.

## Components

### Buttons
- **Shape:** 살짝 둥근 모서리(6px), 최소 높이 48px(작은 변형 44px)
- **Primary:** 신호 블루 바탕에 흰 글자, 패딩 12px 26px. 화면에서 가장 중요한 단 하나의 행동에만.
- **Hover / Focus:** 배경이 심층 블루로 내려앉고 200ms 안에 끝납니다. `:active`에서 1px 내려가 눌린 느낌을 줍니다.
- **Ghost:** 투명 바탕에 네이비 글자, 강한 헤어라인 테두리. 2차 행동.
- **Outline:** 어두운 표면 전용. 흰색 35% 테두리에 흰 글자.

### Chips
- **Style:** 흰 바탕, 슬레이트 잉크 글자, 강한 헤어라인 테두리, 완전 알약형, 최소 높이 44px
- **State:** 선택 시 야간 네이비로 채워집니다. 각 칩은 자기가 여는 행의 카테고리 색 도트(9px)를 앞에 답니다 — 필터와 데이터가 같은 부호를 씁니다.
- **Semantics:** 상호배타 집합이므로 `role="radiogroup"` / `role="radio"`입니다. 토글 버튼이 아닙니다.

### Cards / Containers
- **Corner Style:** 10px(시스템 카드는 16px)
- **Background:** 흰색. 어두운 대역 위에서는 흰색 5% 투명 채움.
- **Shadow Strategy:** 기본 상태 없음. hover에서만 md.
- **Border:** 1px 헤어라인. hover 시 강한 헤어라인 또는 신호 블루로.
- **Internal Padding:** 32px(모바일 24px)

### Navigation
헤더는 sticky, 높이 68px, 흰색 96% 투명에 blur. 스크롤되면 하단 헤어라인과 sm 그림자가 나타납니다. 메뉴는 우측 정렬 평면 배치이며, 현재 섹션은 신호 블루 글자와 2px 밑줄로 표시됩니다. 900px 이하에서 드로어로 접히고 배경 오버레이·바깥 탭 닫기·스크롤 락이 함께 동작합니다.

### 카테고리 태그 (signature)
실적 표의 건물 유형 알약. 배경·글자 모두 카테고리 색에서 나오며 대비는 7.7–8.3:1을 유지합니다. 데스크톱에서는 표의 세 번째 열, 768px 이하에서는 카드 하단에 놓이고 카드 좌측 5px 레일이 같은 색을 반복합니다. **이 컴포넌트가 이 시스템에서 색이 정보를 나르는 유일한 자리입니다.**

### 인증서 라이트박스 (signature)
면허·인증 카드를 누르면 열리는 문서 뷰어. 패널은 `min(92vh, 1000px)`의 **확정 높이**를 가지며, 이미지는 절대 위치와 `object-fit: contain`으로 letterbox됩니다. 이 구조가 아니면 세로로 긴 인증서의 하단(직인·서명)이 어떤 스크롤 위치에서도 보이지 않게 됩니다. 화살표는 스크롤 컨테이너 밖 패널에 고정합니다. 트리거는 진짜 `<a href>`이고 수식키 클릭은 브라우저에 넘깁니다.

## Do's and Don'ts

### Do:
- **Do** 액션에 신호 블루(#0369A1)를 쓰고, 그 외 어디에도 쓰지 마십시오. One Signal Rule.
- **Do** 카테고리 색을 쓸 때 반드시 텍스트 라벨을 함께 두십시오. Colour-Never-Alone Rule.
- **Do** 어두운 표면에서 포커스 링과 링크를 #7CC6F5로 바꾸십시오.
- **Do** 한글 본문 폭을 `em`으로 제한하십시오(리드 38em, 설명 46em).
- **Do** 비교되는 숫자에 `tabular-nums`를 적용하십시오.
- **Do** 새 구획을 1px 헤어라인으로 먼저 시도하십시오.
- **Do** 터치 타깃을 44px 이상으로 두십시오. 인라인 링크는 `padding-block: 11px; margin-block: -11px`로 줄 높이를 건드리지 않고 히트 영역만 키우십시오.
- **Do** 스크롤 등장 효과를 `html.js` 뒤에 게이트하십시오. 스크립트가 죽어도 페이지가 백지가 되지 않아야 합니다.
- **Do** 모든 `<img>`에 실측 `width`/`height`를 적되, CSS가 `width:auto`로 무효화하지 않는지 확인하십시오.

### Don't:
- **Don't** 제목 위에 작은 라벨(eyebrow/kicker)을 얹지 마십시오. 영문 병기는 제목과 같은 줄에 둡니다.
- **Don't** 큰 숫자 + 작은 라벨의 지표 그리드를 만들지 마십시오. 사실은 한 줄의 기록으로 적습니다.
- **Don't** 한글에 자간을 벌리거나 `uppercase`를 적용하지 마십시오.
- **Don't** 정지 상태의 표면에 그림자를 깔지 마십시오. Lift-Only Rule.
- **Don't** 버튼에 완전 알약형(999px)을 쓰지 마십시오. 알약은 분류를 뜻합니다.
- **Don't** 카테고리 색상을 220–265° 구간에 두지 마십시오. 액션 블루와 겨룹니다.
- **Don't** 모든 섹션에 동일한 등장 애니메이션을 걸지 마십시오. 제목 → 내용의 2박자로 충분합니다.
- **Don't** 화면 위 첫 화면 콘텐츠를 등장 효과 뒤에 숨기지 마십시오. 히어로는 즉시 보입니다.
- **Don't** `max-height: 100%`로 모달 이미지를 맞추려 하지 마십시오. 부모 높이가 불확정이면 조용히 `auto`로 풀립니다.
