import Layout from "./components/layout/Layout";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import { GlobalStyle } from "./style/global";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./style/theme";
import { useState } from "react";

function App() {
  const [themeName, setThemeName] = useState<"light"|"dark">("light");
  const [themeType, setThemeType] = useState<typeof light | typeof dark>(light);

  return (
    <ThemeProvider theme={themeType}>
      <GlobalStyle themeName={themeName} />

      {/* <Layout children={<Home/>} /> */}
      {/* 위와 같은 props 전달의 의미임. 단지 표현의 차이임 
      다만, 아래와 같은 태그안쪽의 형태로 props를 전달하려면
      전달받는쪽에서 반드시 children 이라고 props이름을 지정해야줘야함
      */}
      <Layout>
        <Home />
        <Detail />
        <p>하이</p>
        ㅎㅎ
        <p>1234</p>
      </Layout>
    </ThemeProvider>
  );
}

export default App;