import styled from "styled-components";

export const HeaderContainer = styled.div`
  @media (max-width: 414px) {
    display: flex;
    justify-content: space-between;
    
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items:center;
`;

export const HeaderRight = styled.div`
  padding: 10px 10px;
`;

export const Logo = styled.img`
  @media (max-width: 414px) {
    width: 36px;
    height: 36px;
    top: 21px;
    left: 21px;
    border-radius: 999px;
  }
`;

export const NameUser = styled.div`
  @media (max-width: 414px) {
    font-size: 14px;
  }
`;

export const ContentBody = styled.h2`
  font-size: 14px;
  @media (max-width: 414px) {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    display:flex;
    flex-wrap: wrap;
   
  }
`;

export const BodyWrapper = styled.div`
  @media (max-width: 414px) {
    width: 382px;
    height: 54px;
    top: 70px;
    left: 16px;
  }
`;

export const Gender = styled.div`
`