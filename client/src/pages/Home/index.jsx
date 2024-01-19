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
} from "@s/StyledHome";
import { Button, ButtonWrapper } from "@s/ButtonStyles";
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
            Xin chào,<NameUser>{user.name}</NameUser>
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
          <h2>Gender</h2>
          <ButtonWrapper>
            <Button bg="#0352FE" color="#FFFFFF" genderMen={true} mr="20px">
              Nam
            </Button>
            <Button>Nữ</Button>
          </ButtonWrapper>
        </Gender>
      </BodyWrapper>
    </>
  );
};
export default Home;
