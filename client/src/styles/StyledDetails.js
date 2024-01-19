import styled from "styled-components";

export const DetailsWrapper = styled.div`
    max-height: 896px;  
`;

export const DetailsTitle = styled.h3``;

export const DetailsContentWrapper = styled.div``;

export const ImageItem = styled.img``;
export const Label = styled.h3`
  color: rgba(255, 255, 255, 0.5);
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.35);
  font-family: "Be Vietnam Pro";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const Title = styled.h3`
  color: #fff;
  text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.35);
  font-family: "Be Vietnam Pro";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const Action = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  justify-content: space-between;
  align-items: start;
`;
export const HelpAction = styled.div`
  padding: 8px;
`;
export const ClickAction = styled.div`
  padding: 8px;
`;

export const ItemWrapper = styled.div`
  width: 382px;
  height: 240px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 16px;
`;
export const Item = styled.div`
  background-image: 
  url(
    ${(props) =>
    props.bgImage
      ? props.bgImage
      : "https://www.w3schools.com/howto/img_avatar.png"});
  width: 46%;
  height: 112px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  background-size: 250px;
  background-position-x: 50%;
  background-position-y: 40%;
  background-repeat: no-repeat;
  border-radius: 16px;
  margin-right: 6px;
`;
export const ItemLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  align-self: end;
`;

export const TimeDoneWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 34px;
  margin-bottom: 16px;
`;
export const TimeDoneTitle = styled.h3`
  color: #fff;
  font-family: "Be Vietnam Pro";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const TimeDoneSubTitle = styled.h3`
  color: #9a9a9a;
  text-align: right;
  font-family: "Be Vietnam Pro";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const TimeDoneItem = styled.div`
    display:flex;
    justify-content:space-between;
`;
export const ItemLabel = styled.span`
  color: #9a9a9a;
  font-family: "Be Vietnam Pro";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  position:absolute;
  line-height: normal;
`;
export const InputTime = styled.input`
    color: #FFF;
font-family: "Be Vietnam Pro";
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
width:100%;

background: #3a3a3a;
outline:none;
border:none;
margin-top:4px;
`;
export const TimeDoneItemWrapper = styled.div`
  width: 185px;
  height: 65px;
  border-radius: 12px;
  background: #3a3a3a;
  flex-shrink: 0;
  position: relative;
  padding-top:12px;
  padding-left:12px;
  display:flex;
`;
export const TimeDoneItemLeft = styled(TimeDoneItemWrapper)``;
export const TimeDoneItemRight = styled(TimeDoneItemWrapper)``;
