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
  ItemModal,
  Action,
} from "../../styles/StyledDetails";
import {
  Button,
  ButtonWrapper,
  ButtonMen,
  ButtonFooter,
  FooterWrapper,
  CancelIcon,
  ButtonCancel,
} from "@s/ButtonStyles";
import {
  ModalWrapper,
  ModalInner,
  ModalHeader,
  ModalTitleWrapper,
  ModalSubTitle,
  ModalTitle,
  ModalBody,
  BodyTitle,
  BodySubTitle,
  SubHeader,
  SubItem,
  SubItemWrapper,
} from "@s/ModalStyles";

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
    id: "1",
    label: "increase strength",
    text: "Tăng thể lực",
    img: pic1,
  },
  {
    id: "2",
    label: "Maintaining",
    text: "Giữ cân, giữ cơ",
    img: pic2,
  },
  {
    id: "3",
    label: "Diet",
    text: "Giữ cân, giữ cơ",
    img: pic3,
  },
  {
    id: "4",
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
const ModalDetails = [
  {
    id: 1,
    title: "Tăng thể lực",
    subTitle: "Increase strength",
    bodyTitle:
      "Giai đoạn tăng sức bền cho cơ thể mạnh mẽ hơn, đáp ứng được yêu cầu tập luyện cường độ cao mà còn giúp hình thành trí nhớ cơ bắp.",
    header: "Phù hợp:",
    bodySubTitle: ["Mới bắt đầu tập.", " Muốn tăng cân và thể lực."],
  },
  {
    id: 2,
    title: "Giữ cân, giữ cơ",
    subTitle: "Maintaining",
    bodyTitle:
      "Giai đoạn tập luyện điều độ với cường độ vừa hoặc thấp để giữ cho cơ thể luôn được cân đối và khỏe mạnh. ",
    header: "Phù hợp:",
    bodySubTitle: ["Muốn giữ dáng cân đối.", " Duy trì thể lực."],
  },
  {
    id: 3,
    title: "Tăng cân, tăng cơ",
    subTitle: "Bulking",
    bodyTitle:
      "Giai đoạn tăng cơ cho cả quá trình tập luyện. Điều này có nghĩa là người luyện tập cần thực hiện các bài tập có cường độ nặng hơn. Đồng thời kết hợp ăn uống khoa học để tạo điều kiện tối ưu cho sự phát triển và tăng kích thước của cơ bắp.",
    header: "Phù hợp:",
    bodySubTitle: [
      "Tăng kích thước cơ bắp, san chắc",
      " Đã tập luyện 1 thời gian, đã có thể lực và sức bền nhất định.",
    ],
  },
  {
    id: 4,
    title: "Giảm cân, giữ cơ",
    subTitle: "Cutting",
    bodyTitle:
      "Giai đoạn tập luyện cường độ cao kết hợp cùng chế độ ăn kiêng. Bạn sẽ cắt giảm lượng calo nạp vào cơ thể để giảm mỡ nhưng vẫn duy trì được khối lượng cơ, giúp các đường rãnh cơ bắp trở nên rõ ràng hơn.",
    header: "Phù hợp:",
    bodySubTitle: ["Muốn giảm cân, giảm mỡ.", "Sắp thi đấu cần siết cân."],
  },
];

const ManDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  //event
  const handleShowModal = (id) => {
    setShowModal(!showModal);
    setSelectedItemId(id);
  };
  return (
    <>
      <ItemWrapper>
        {itemsForMan.map((item, index) => {
          return (
            <Item
              bgImage={item.img}
              key={index}
              onClick={() => handleShowModal(item.id)}
            >
              <ItemModal
                className={showModal && item.id == selectedItemId ? "show" : ""}
              ></ItemModal>
              <ItemLeft>
                <Label>{item.label}</Label>
                <Title>{item.text}</Title>
              </ItemLeft>
              <Action>
                <ClickAction>
                  {showModal && item.id == selectedItemId ? (
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
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <circle
                        cx="8"
                        cy="8"
                        r="7.5"
                        fill="white"
                        stroke="#939393"
                      />
                    </svg>
                  )}
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

      <Modal show={showModal}>
        {selectedItemId !== null && (
          <>
            {ModalDetails.map((item, index) => {
              if (item.id == selectedItemId) {
                return (
                  <>
                    <ModalInner>
                      <ModalHeader>
                        <ModalTitleWrapper>
                          <ModalTitle>{item.title}</ModalTitle>
                          <ModalSubTitle>{item.subTitle}</ModalSubTitle>
                        </ModalTitleWrapper>

                        <CancelIcon onClick={handleShowModal}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="24"
                            height="24"
                            viewBox="0 0 50 50"
                          >
                            <path
                              fill="#FFFFFF"
                              d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"
                            ></path>
                          </svg>
                        </CancelIcon>
                      </ModalHeader>

                      <ModalBody>
                        <BodyTitle>{item.bodyTitle}</BodyTitle>
                        <BodySubTitle>
                          <SubHeader>{item.header}</SubHeader>
                          <SubItemWrapper>
                            {item.bodySubTitle.map((subItem, index) => (
                              <SubItem key={index}>{subItem}</SubItem>
                            ))}
                          </SubItemWrapper>
                        </BodySubTitle>
                      </ModalBody>
                      <ButtonCancel onClick={handleShowModal}>
                        Đóng
                      </ButtonCancel>
                    </ModalInner>
                  </>
                );
              }
            })}
          </>
        )}
      </Modal>
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

const Modal = ({ show, children }) => {
  console.log(show);
  return <ModalWrapper className={show ? "show" : ""}>{children}</ModalWrapper>;
};

const Details = () => {
  const { gender } = useParams();
  const [timedone, setTimedone] = useState(0);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    // Calculate the difference between start and end dates when either of them changes
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      console.log(end.getTime())
      const differenceInTime = end.getTime() - start.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);
      setTimedone(differenceInDays);
    }
  }, [startDate, endDate]);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
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
            type="date"
            placeholder="dd/mm/yyyy"
            value={startDate}
            onChange={handleStartDateChange}
            min="1997-01-01" max="2030-12-31"
          />
        </TimeDoneItemLeft>
        <TimeDoneItemRight>
          <ItemLabel>Ngày kết thúc</ItemLabel>
          <InputTime
            type="date"
            placeholder="dd/mm/yyyy"
            value={endDate}
            min="1997-01-01" max="2030-12-31"
            onChange={handleEndDateChange}
          />
        </TimeDoneItemRight>
      </TimeDoneItem>
      </DetailsWrapper>
      <FooterWrapper>
        <Link to={`/details`}>
          <ButtonFooter>Tiếp tục</ButtonFooter>
        </Link>
      </FooterWrapper>
    </>
  );
};

export default Details;
