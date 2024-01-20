import styled from "styled-components";

// export const fadeIn = `
//   opacity: 0;
//   transition: opacity 1s ease-in-out;
// `;

// export const fadeInActive = `
//   opacity: 1;
// `;
export const ModalWrapper = styled.div`
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  animation: fade-in 0.5s;
  &.show {
   
    display: block;
  }
  
  &.show {
    display: flex;
  }
`;

export const ModalInner = styled.div`
  /* width: 500px;
    height: 500px;
    margin: auto;

    border-radius: 16px;
    background: #272727;
    backdrop-filter: blur(5px);
    text-align: center;
    padding: 20px 40px;
    position: relative; */

  display: flex;
  width: 303px;
  margin: auto;
  height: auto;
  padding: 16px;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 16px 148px;
  flex-wrap: wrap;
  border-radius: 16px;
  background: #272727;
  position: relative;

  .cancel {
    
  }
`;

export const ModalHeader = styled.div`
    width:100%;
  display:flex;
  justify-content:space-between;
`
export const ModalTitleWrapper = styled.div`
  
`;
export const  ModalTitle= styled.h3`
margin-bottom:4px;
  color: #FFF;
font-family: "Be Vietnam Pro";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;
export const  ModalSubTitle= styled.h3`
  color: #878787;
text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.35);
font-family: "Be Vietnam Pro";
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const ModalBody = styled.div`
  color: #878787;
font-family: "Be Vietnam Pro";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
width: 271px;
margin-top:16px;
margin-bottom:16px;
flex-shrink: 0;
`;
export const BodyTitle = styled.h3`
    margin-bottom:16px;
`;
export const BodySubTitle = styled.div`
  
`;
export const SubHeader = styled.h3`
  color: #FF5C00;
font-family: "Be Vietnam Pro";
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
`;
export const SubItem = styled.li`
  color: #878787;
font-family: "Be Vietnam Pro";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
export const SubItemWrapper = styled.ul`
  padding-left:20px;
`;

