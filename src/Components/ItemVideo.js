import React from "react";
import styled from "styled-components";
import { Player } from "video-react";

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
`;

const Box = styled.div`
  width: 30%;
  height: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const ItemVideo = ({ obj }) => (
  <Wrapper>
    <Text>{obj.url}</Text>
    <Box>
      <Player playsInline src={obj.url} />
    </Box>
  </Wrapper>
);

export default ItemVideo;
