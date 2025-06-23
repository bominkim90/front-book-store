import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

function ThemeSwitcher() {
  // const { themeName, setThemeName } = useContext(ThemeContext);
  /* 
    'ThemeContextProps | null' 형식에 'setThemeName' 속성이 없습니다. <- 라는 오류가 뜸
    알아보니, null 일수도 있으니까 바로 { themeName, setThemeName } 이런식으로 못 뽑는거라 함
    그래서 일단 null 이면 return 하는 조건문을 적어주면,
    타입스크립트 오류가 안 남.
  */
  const context = useContext(ThemeContext);
  if(!context) {
    throw new Error("'ThemeContextProps | null' 형식에 'setThemeName' 속성이 없습니다.");
  }
  const { themeName, setThemeName } = context;

  function toggleTheme() {
    setThemeName(themeName === "light" ? "dark" : "light")
  }

  return (
    <button
      onClick={()=>{toggleTheme()}}
    >{themeName}</button>
  )
}

export default ThemeSwitcher;