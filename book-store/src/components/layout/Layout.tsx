import Footer from "../common/Footer";
import Header from "../common/Header";

interface LayoutProps {
  children: React.ReactNode; // React Node > React Element > JSX Element
}
/*
React.ReactNode는 이런 걸 모두 허용합니다
  JSX.Element
  string
  number
  boolean (렌더링되지 않음)
  null, undefined (렌더링되지 않음)
  ReactNode[] (배열)
*/

function Layout({children}: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;