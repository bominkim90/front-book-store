import { ThemeName } from "../../style/theme"

interface Props {
  themeName: ThemeName;
  setThemeName: React.Dispatch<React.SetStateAction<ThemeName>>;
}

function ThemeSwitcher({themeName, setThemeName} : Props) {
  
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