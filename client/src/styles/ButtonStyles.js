import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => (props.bg ? props.bg : "#484848")};
  width: 76px;
  height: 46px;
  padding: 14px 22px 14px 22px;

  gap: 10px;

  border: ${(props) => (props.genderMen ? "1px solid #B8E5FF" : "1px solid #484848")};
  margin-right: ${(props) => (props.mr ? props.mr : '0px')};
  border-radius:15px;
  outline: none;
  @media (max-width: 414px) {
  }
`;
export const ButtonWrapper = styled.div`
display:flex;
justify-content:space-around;
  width: 151px;
  height: 46px;
  top: 194px;
  left: 16px;
`;
