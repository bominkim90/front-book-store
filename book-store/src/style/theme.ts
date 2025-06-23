export type ThemeName = "light" | "dark";
type ColorKey = "text" | "primary" | "background"| "secondary" | "third";

export interface Theme {
  name: ThemeName;
  // <키 집합, 밸류 타입> 한가지의 밸류타입을 갖는다.
  color: Record<ColorKey, string>; 
  // color: {
  //   [key: string] : string; // 느슨한 타입
  // }
}

export const light: Theme = {
  name: 'light',
  color: {
    text: "#222",
    primary: "bronw",
    background: "lightgray",
    secondary: "blue",
    third: "green"
  }
}

export const dark: Theme = {
  name: 'dark',
  color: {
    text: "#efefef",
    primary: "coral",
    background: "midnightblue",
    secondary: "blue",
    third: "green"
  }
}

export const getThemeType = (themeName : ThemeName) => {
  switch (themeName) {
    case "light":
      return light;
    case "dark":
      return dark;
  }
}