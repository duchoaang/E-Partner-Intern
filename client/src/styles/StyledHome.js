import styled from "styled-components";

export const HeaderContainer = styled.div`
  @media (max-width: 414px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: baseline;
  padding-top: 10px;
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

export const NameUser = styled.h3`
  color: ${(props) => props.color};

  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;

  @media (max-width: 414px) {
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
    display: flex;
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
  margin-top: 24px;
`;

export const GenderTitle = styled.h3`
  margin-bottom: 16px;

  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
`;
export const DetailsBody = styled.div`
  margin-top: 36px;
  margin-bottom: 22px;
`;
export const DetailsTittle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 22px;
`;
export const WrapperInput = styled.div`
  width: 382px;
  position: relative;
  height: 72px;
  margin-bottom: 16px;
`;
export const DobWrapper = styled(WrapperInput)``;
export const TallWrapper = styled(WrapperInput)``;
export const WeightWrapper = styled(WrapperInput)``;
export const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  padding: 10px;
  color: var(--color-text);
  font-size: 32px;
  font-weight: 800;
  text-align: right;
  background-color: var(--color-input);
  outline: none;
  border: none;
  padding-right: ${(props) => (props.pr ? props.pr : "")};
  ::placeholder {
    color: red;
  }
`;

export const Label = styled.div`
  position: absolute;

  display: flex;

  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;

  height: 18px;
  top: 27px;
  left: 16px;

  z-index: 1;
  span {
    color: red;
    margin-left: 5px;
  }
`;
export const Label2 = styled(Label)`
  width: 17px;
  height: 18px;
  opacity: 0.7;
  top: 33px;

  position: absolute;
  left: 347px;
  font-weight: 600;
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const FooterWrapper = styled.div`
  background: rgba(39, 39, 39, 0.8);

  box-shadow: 0px -1px 0px 0px #3f3f3f;
  backdrop-filter: blur(4px);
  width: 414px;
  height: 72px;
  flex-shrink: 0;

  align-items: center;
  display: flex;
  justify-content: center;

  position: fixed;
  bottom: 0;
`;
