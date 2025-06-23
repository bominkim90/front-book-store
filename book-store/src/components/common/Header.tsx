import styled from "styled-components";

function Header() {

  return(
    <HeaderStyled>
      <h1>헤더</h1>
    </HeaderStyled>
  )
}

// styled component 선언
const HeaderStyled = styled.header`
  background-color: ${({theme}) => theme.color.background};

  h1 {
    color: ${ ({theme}) => theme.color.text};
  }
`;

export default Header;