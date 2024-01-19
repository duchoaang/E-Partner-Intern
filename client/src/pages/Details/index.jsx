import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  DetailsWrapper,
  DetailsContentWrapper,
  DetailsTitle,
  ImageItem,
  Label,
  Title,
  HelpAction,
  ClickAction,
  ItemWrapper,
  Item,
  ItemLeft,
  TimeDoneWrapper,
  TimeDoneTitle,
  TimeDoneSubTitle,
  TimeDoneItem,
  ItemLabel,
  InputTime,
  TimeDoneItemLeft,
  TimeDoneItemRight,
  Action,
} from "../../styles/StyledDetails";
import {
    Button,
    ButtonWrapper,
    ButtonMen,
    ButtonFooter, FooterWrapper,
  } from "@s/ButtonStyles";
import pic1 from "@a/ImageMen/pic1.png";
import pic2 from "@a/ImageMen/pic2.png";
import pic3 from "@a/ImageMen/pic3.png";
import pic4 from "@a/ImageMen/pic4.png";
import pic5 from "@a/ImageWomen/pic1.png";
import pic6 from "@a/ImageWomen/pic2.png";
import pic7 from "@a/ImageWomen/pic3.png";
import pic8 from "@a/ImageWomen/pic4.png";
const itemsForMan = [
  {
    label: "increase strength",
    text: "Tăng thể lực",
    img: pic1,
  },
  {
    label: "Maintaining",
    text: "Giữ cân, giữ cơ",
    img: pic2,
  },
  {
    label: "Diet",
    text: "Giữ cân, giữ cơ",
    img: pic3,
  },
  {
    label: "Cutting",
    text: "Tăng cân, tăng cơ",
    img: pic4,
  },
];
const itemsForWomen = [
  {
    label: "Strength",
    text: "Tăng thể lực",
    img: pic5,
  },
  {
    label: "Maintaining",
    text: "Giữ cân, giữ cơ",
    img: pic6,
  },
  {
    label: "Diet",
    text: "Giữ cân, giữ cơ",
    img: pic7,
  },
  {
    label: "Cutting",
    text: "Tăng cân, tăng cơ",
    img: pic8,
  },
];
const ManDetails = () => {
  return (
    <>
      <ItemWrapper>
        {itemsForMan.map((item, index) => {
          return (
            <Item bgImage={item.img} key={index}>
              <ItemLeft>
                <Label>{item.label}</Label>
                <Title>{item.text}</Title>
              </ItemLeft>
              <Action>
                <ClickAction>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <circle cx="8" cy="8" r="8" fill="#FF5C00" />
                    <path
                      d="M4.5 8L7.5 10.5L11.5 6"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </ClickAction>
                <HelpAction>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_14_66)">
                      <path
                        d="M8.00001 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 7.99999C14.6667 4.3181 11.6819 1.33333 8.00001 1.33333C4.31811 1.33333 1.33334 4.3181 1.33334 7.99999C1.33334 11.6819 4.31811 14.6667 8.00001 14.6667Z"
                        stroke="white"
                        stroke-opacity="0.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.06 6C6.21673 5.55444 6.5261 5.17874 6.9333 4.93942C7.3405 4.7001 7.81926 4.61262 8.28478 4.69247C8.7503 4.77232 9.17254 5.01435 9.47672 5.37568C9.78089 5.73702 9.94737 6.19435 9.94666 6.66667C9.94666 8 7.94666 8.66667 7.94666 8.66667V9.5"
                        stroke="white"
                        stroke-opacity="0.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 11.3333H8.0075"
                        stroke="white"
                        stroke-opacity="0.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_14_66">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </HelpAction>
              </Action>
            </Item>
          );
        })}
      </ItemWrapper>
    </>
  );
};
const WomanDetails = () => {
  return (
    <>
      <ItemWrapper>
        {itemsForWomen.map((item, index) => {
          return (
            <Item bgImage={item.img} key={index}>
              <ItemLeft>
                <Label>{item.label}</Label>
                <Title>{item.text}</Title>
              </ItemLeft>
              <Action>
                <ClickAction>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <circle cx="8" cy="8" r="8" fill="#FF5C00" />
                    <path
                      d="M4.5 8L7.5 10.5L11.5 6"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </ClickAction>
                <HelpAction>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_14_66)">
                      <path
                        d="M8.00001 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 7.99999C14.6667 4.3181 11.6819 1.33333 8.00001 1.33333C4.31811 1.33333 1.33334 4.3181 1.33334 7.99999C1.33334 11.6819 4.31811 14.6667 8.00001 14.6667Z"
                        stroke="white"
                        stroke-opacity="0.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.06 6C6.21673 5.55444 6.5261 5.17874 6.9333 4.93942C7.3405 4.7001 7.81926 4.61262 8.28478 4.69247C8.7503 4.77232 9.17254 5.01435 9.47672 5.37568C9.78089 5.73702 9.94737 6.19435 9.94666 6.66667C9.94666 8 7.94666 8.66667 7.94666 8.66667V9.5"
                        stroke="white"
                        stroke-opacity="0.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 11.3333H8.0075"
                        stroke="white"
                        stroke-opacity="0.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_14_66">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </HelpAction>
              </Action>
            </Item>
          );
        })}
      </ItemWrapper>
    </>
  );
};
console.log(pic1);

const Details = () => {
  const { gender } = useParams();
  const timedone = 30;

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  

  const handleChangeTime = (value, inputType) => {
     
        if (value.length <= 10) {
            if (value.length === 2) {
   
                value += ".";
              } else if (value.length === 5) {
             
                value += ".";
              }
              if (inputType === "start") {
                setStartDate(value);
              } else if (inputType === "end") {
                setEndDate(value);
              }
        }
    
  };
  const handleKeyDown = (e, inputType) => {
    if (e.key === "Delete" || e.key === "Backspace") {
      if (inputType === "start") {
        setStartDate((prevValue) => prevValue.slice(0, -1));
      } else if (inputType === "end") {
        setEndDate((prevValue) => prevValue.slice(0, -1));
      }
    } else {
    
    }
  };
  

  return (
    <>
      <DetailsWrapper>
        <DetailsTitle>Mục tiêu</DetailsTitle>
        <DetailsContentWrapper>
          {gender == "man" ? <ManDetails /> : <WomanDetails />}
        </DetailsContentWrapper>

        <TimeDoneWrapper>
          <TimeDoneTitle>Thời gian hoàn thành</TimeDoneTitle>
          <TimeDoneSubTitle>
            Tổng số ngày <span>{timedone}</span>
          </TimeDoneSubTitle>
        </TimeDoneWrapper>
        <TimeDoneItem>
          <TimeDoneItemLeft>
            <ItemLabel>Ngày bắt đầu</ItemLabel>
            <InputTime
              type="text"
              value={startDate}
              onChange={(e) => handleChangeTime(e.target.value, 'start')}
              onKeyDown={(e) => handleKeyDown(e, "start")}
            />
          </TimeDoneItemLeft>
          <TimeDoneItemRight>
            <ItemLabel>Ngày kết thúc</ItemLabel>
            <InputTime
              type="date"
              placeholder="dd/mm/yyyy"
            />
          </TimeDoneItemRight>
        </TimeDoneItem>
      </DetailsWrapper>
      <FooterWrapper>
          <Link
            to={`/details`}
          >
            <ButtonFooter >Tiếp tục</ButtonFooter>
          </Link>
        </FooterWrapper>
    </>
  );
};

export default Details;
