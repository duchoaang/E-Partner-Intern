
import styled from "styled-components";
function DefaultLayout({ children }) {
  return (
    <>
      <HomeContainer>
          
            {children}
      </HomeContainer>
    </>
  );
}

const HomeContainer = styled.div`
  
`;
const ChildrenContainer = styled.div`

`
export default DefaultLayout;