# NASA Mars Explorer Dashboard

[English](#english) | [한국어](#korean)

---

<a id="korean"></a>
## 한국어

### 프로젝트 소개
NASA Mars Explorer Dashboard는 NASA에서 제공하는 API와 Google News API를 활용하여 화성 탐사 관련 데이터를 실시간으로 제공하는 대시보드입니다. 화성 기상 정보, 탐사 로버 이미지, 우주 관련 뉴스, 천문 사진 등을 한눈에 볼 수 있는 통합 플랫폼을 제공합니다.

### 주요 기능
- 🌡️ **실시간 화성 기상 정보**
  - 온도, 풍속, 기압, 풍향 데이터 실시간 제공
  - 데이터 시각화 및 시계열 분석
- 📸 **화성 탐사 이미지 갤러리**
  - NASA 탐사 로버의 최신 화성 사진
  - 날짜/솔 기반 이미지 검색 및 필터링
- 📰 **우주 뉴스 및 이벤트**
  - 화성 관련 최신 뉴스 제공
  - 우주 날씨 이벤트 정보
- 🌠 **오늘의 천문 사진**
  - NASA APOD API 기반 일일 천문 사진
  - 과학적 해설 제공

### 기술 스택
- **Frontend**
  - React 18.x
  - TypeScript
  - Redux Toolkit
  - Tailwind CSS
  - D3.js / Chart.js / Three.js
- **Backend**
  - Node.js 20.x LTS
  - NestJS
  - MongoDB
  - Redis
- **DevOps**
  - Docker
  - AWS
  - NewRelic

### 시작하기

1. 저장소 클론
```bash
git clone https://github.com/yourusername/mars-explorer-dashboard.git
cd mars-explorer-dashboard
```

2. 의존성 설치
```bash
pnpm install
```

3. 환경 변수 설정
```bash
cp .env.example .env
# .env 파일에 필요한 API 키와 설정 추가
```

4. 개발 서버 실행
```bash
pnpm dev
```

### 기여하기
프로젝트 기여는 다음 절차를 따라주세요:
1. 이슈 생성 또는 기존 이슈 확인
2. feature/ 브랜치 생성
3. 코드 작성 및 테스트
4. PR 생성 및 코드 리뷰 진행

### 라이선스
이 프로젝트는 MIT 라이선스를 따릅니다.

---

<a id="english"></a>
## English

### Project Overview
The NASA Mars Explorer Dashboard is a comprehensive platform that provides real-time Mars exploration data using NASA APIs and Google News API. It offers an integrated view of Mars weather information, rover images, space-related news, and astronomical photographs.

### Key Features
- 🌡️ **Real-time Mars Weather**
  - Live temperature, wind speed, pressure, and direction data
  - Data visualization and time series analysis
- 📸 **Mars Exploration Image Gallery**
  - Latest Mars photos from NASA exploration rovers
  - Image search and filtering by date/sol
- 📰 **Space News and Events**
  - Latest Mars-related news
  - Space weather event information
- 🌠 **Astronomy Picture of the Day**
  - Daily astronomical photos from NASA APOD API
  - Scientific explanations provided

### Tech Stack
- **Frontend**
  - React 18.x
  - TypeScript
  - Redux Toolkit
  - Tailwind CSS
  - D3.js / Chart.js / Three.js
- **Backend**
  - Node.js 20.x LTS
  - NestJS
  - MongoDB
  - Redis
- **DevOps**
  - Docker
  - AWS
  - NewRelic

### Getting Started

1. Clone Repository
```bash
git clone https://github.com/yourusername/mars-explorer-dashboard.git
cd mars-explorer-dashboard
```

2. Install Dependencies
```bash
pnpm install
```

3. Configure Environment Variables
```bash
cp .env.example .env
# Add required API keys and configurations to .env file
```

4. Run Development Server
```bash
pnpm dev
```

### Contributing
To contribute to the project, please follow these steps:
1. Create or check existing issues
2. Create a feature/ branch
3. Write code and tests
4. Create PR and proceed with code review

### License
This project is licensed under the MIT License.
