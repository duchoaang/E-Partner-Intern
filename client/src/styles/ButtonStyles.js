import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => (props.bg ? props.bg : "#484848")};
  width: 76px;
  height: 46px;
  padding: 14px 22px 14px 22px;

  gap: 10px;

  border: ${(props) =>
    props.genderMen ? "1px solid #B8E5FF" : "1px solid #484848"};

  border-radius: 15px;
  outline: none;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 151px;
  height: 46px;
  top: 194px;
  left: 16px;
`;
export const ButtonMen = styled(Button)`
  margin-right: 12px;
`;

export const ButtonFooter = styled.button`
  width: 230px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 50px;
  border: 1px solid #ff7a2f;
  background: linear-gradient(268deg, #ff5c00 0.45%, #ff7a2f 97.59%);
  box-shadow: 0px 0px 15px 0px rgba(255, 110, 29, 0.4);
`;
