## 설치 방법
```
  CRA 설치 명령어
  npx create-react-app@latest . --template typescript
```

## 개발 서버 start
```
  npm start
```

## 폴더(디렉토리) 구조
```
1. pages - 라우트에 대응하는 페이지 컴포넌트(컨테이너)
2. components - 공통 컴포넌트, 각 페이지에서 사용되는 컴포넌트
3. utils - 유틸리티
4. hooks - 리액트 훅
5. model - 모델(타입)
6. api - api 연동을 위한 fetcher 등
```

## 글로벌 스타일
```
reset.css // 모든 밸류를 리셋(=0)
normalize.css // 모든 밸류를 리셋X => 기기간의 차이를 최소

sanitize.css // (현재 플젝에 사용) normalize의 진보된 버전
npm i sanitize
index.tsx에 적용 => import "sanitize.css"
```

## styled component
```
npm i styled-components
css in js

스타일의 캡슐화 (전역 스타일X => 지역 스타일)
```

## 테마 (theme)
```
styled component 안의 <ThemeProvider> 기능 이용하여 구현
<ThemeProvider theme={객체로전달}></ThemeProvider>

src/global.ts에 글로벌 스타일은 theme(테마)에 따라 구현되어야 한다.

```