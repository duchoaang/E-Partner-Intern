import APIs, { endpoints } from "@cf/APIs";
import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
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
  Label,Label2
} from "@s/StyledHome";
import { Button, ButtonWrapper, ButtonMen } from "@s/ButtonStyles";
const Home = () => {
  const id = 1;
  const [user, setUser] = useState({
    id: "",
    name: "",
    avatar: "",
  });

  // get info user
  const getUser = async () => {
    console.log(12302);
    try {
      const url = endpoints.user_by_id(id);
      const res = await APIs.get(url);
      if (res.status === 200) {
        setUser(res.data);
      }
    } catch (ex) {
      console.error(ex);
    }
  };
  // do work
  useEffect(() => {
    getUser();
  }, []);

  //test console
  console.log(user);

  return (
    <>
      <header>
        <HeaderContainer>
          <HeaderLeft>
            Xin chào,
            <NameUser
              color="
#FF5C00"
            >
              {user.name}
            </NameUser>
          </HeaderLeft>
          <HeaderRight>
            <Logo src={user.avatar}></Logo>
          </HeaderRight>
        </HeaderContainer>
      </header>

      <BodyWrapper>
        <ContentBody>
          Chào mừng đến với Gym Train . Hãy cho chúng tôi biết 1 số thông tin về
          bạn để có những bài tập phù hợp nhất nhé
        </ContentBody>
        <Gender>
          <GenderTitle>Gender</GenderTitle>
          <ButtonWrapper>
            <ButtonMen bg="#0352FE">Nam</ButtonMen>
            <Button>Nữ</Button>
          </ButtonWrapper>
        </Gender>

        <DetailsBody>
          <DetailsTittle>Thông số cơ thể</DetailsTittle>

          <DobWrapper>
            <Input type="number" required="required" placeholder="Nhập"
            ></Input>
            <Label>
              Năm sinh <span>*</span>
            </Label>
          </DobWrapper>
          <TallWrapper>
            <Input type="number" required="required" placeholder="Nhập"
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
    </>
  );
};
export default Home;
