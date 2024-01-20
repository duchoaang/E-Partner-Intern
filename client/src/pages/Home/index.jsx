import APIs, { endpoints } from "@cf/APIs";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  Logo,
  NameUser,
  ContentBody,
  BodyWrapper,
  Gender,
  GenderTitle,
  DetailsBody,
  DobWrapper,
  TallWrapper,
  DetailsTittle,
  WeightWrapper,
  Input,
  Label,
  Label2,
  
  HomeWrapper,
} from "@s/StyledHome";
import {
  Button,
  ButtonWrapper,
  ButtonMen,
  ButtonFooter,
  FooterWrapper,
} from "@s/ButtonStyles";
import avt from "../../assets/ImageMen/avt.png";
import { UserContext } from '@c/UserContext';

const Home = () => {
  const id = 1;
  const dataUser = useContext(UserContext);
  console.log(dataUser);
  const [user, setUser] = useState({
    id:"",
    name:"",
    avt:""
  });
 
  useEffect(() => {
    setUser(dataUser);
  }, []);

  const [selectedButton, setSelectedButton] = useState("man");

  // get info user
  // const getUser = async () => {
  //   console.log(12302);
  //   try {
  //     const url = endpoints.user_by_id(id);
  //     const res = await APIs.get(url);
  //     if (res.status === 200) {
  //       setUser(res.data);
  //     }
  //   } catch (ex) {
  //     console.error(ex);
  //   }
  // };
  // do work
  // useEffect(() => {
  //   getUser();
  // }, []);

  //test console


  // event
  const handleContinue = () => {
    console.log("continue");
  };

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <>
      <HomeWrapper>
        <header>
          <HeaderContainer>
            <HeaderLeft>
              Xin chào,
              <NameUser
                color="#FF5C00"
              >
                {user.name}
              </NameUser>
            </HeaderLeft>
            <HeaderRight>
              <Logo bgImage={user.avatar}></Logo>
            </HeaderRight>
          </HeaderContainer>
        </header>

        <BodyWrapper>
          <ContentBody>
            Chào mừng đến với Gym Train . Hãy cho chúng tôi biết 1 số thông tin
            về bạn để có những bài tập phù hợp nhất nhé
          </ContentBody>
          <Gender>
            <GenderTitle>Gender</GenderTitle>

            <ButtonWrapper>
              <ButtonMen
                style={{
                  backgroundColor: selectedButton === "man" ? "blue" : "",
                }}
                onClick={() => handleButtonClick("man")}
              >
                Nam
              </ButtonMen>
              <Button
                style={{
                  backgroundColor: selectedButton === "women" ? "blue" : "",
                }}
                onClick={() => handleButtonClick("women")}
              >
                Nữ
              </Button>
            </ButtonWrapper>
          </Gender>

          <DetailsBody>
            <DetailsTittle>Thông số cơ thể</DetailsTittle>

            <DobWrapper>
              <Input
                type="number"
                required="required"
                placeholder="Nhập"
              ></Input>
              <Label>
                Năm sinh <span>*</span>
              </Label>
            </DobWrapper>
            <TallWrapper>
              <Input
                type="number"
                required="required"
                placeholder="Nhập"
                pr="45px"
              ></Input>
              <Label>
                Chiều cao <span>*</span>
              </Label>
              <Label2>cm</Label2>
            </TallWrapper>
            <WeightWrapper>
              <Input
                type="number"
                required="required"
                placeholder="Nhập"
                pr="50px"
              ></Input>
              <Label2>kg</Label2>
              <Label>
                Cân nặng <span>*</span>
              </Label>
            </WeightWrapper>
          </DetailsBody>
        </BodyWrapper>
        <FooterWrapper>
          <Link
            to={`/details/${selectedButton}`}
          >
            <ButtonFooter onClick={handleContinue}>Tiếp tục</ButtonFooter>
          </Link>
        </FooterWrapper>
      </HomeWrapper>
    </>
  );
};
export default Home;
