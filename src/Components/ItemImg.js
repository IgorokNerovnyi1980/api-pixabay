import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 99%;
  height: 10vh;
  margin: 0 auto;
  margin-top: 0.2em;
  border-bottom: 0.2em solid rgb(70, 68, 68);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Text = styled.p`
  width: 70%;
  font-size: 0.8rem;
  word-wrap: break-word;
  text-align: center;
`;

const ImgBox = styled.div`
  width: 30%;
  height: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;
const Img = styled.img`
  max-width: none;
  min-width: auto;
  min-height: auto;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ItemImg = ({ url }) => (
  <Wrapper>
    <Text>
      <a href={url} download="">
        Download
      </a>
    </Text>
    <ImgBox>
      <Img src={url} alt="" />
    </ImgBox>
  </Wrapper>
);

export default ItemImg;
