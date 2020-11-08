import React from 'react';
import styled from 'styled-components';

//width: 280px;
const ChatBoxContainer = styled.div`
margin-top: 24px;
margin-right: 3.5%;
width: 35%;
height: 425px;
background: linear-gradient(0deg, rgba(7, 1, 12, 0.51), rgba(7, 1, 12, 0.51)), #4C7FE6;
box-shadow: inset 0px 4px 20px rgba(0, 0, 0, 0.5);
border-radius: 65px;
padding: 15px 30px 30px 30px;
`;

const LobbySign = styled.span`
  color: #E3A1FA;
  font-size: 20px;
  text-align: center;
  display: block;
  margin: 0;
`;

const PlayerName = styled.span`
  color: #E3A1FA;
  font-size: 15px;
  padding-right: 10px;
`;

const ChatBox = ({ currentGame }) => {

  const RoomName = () => {
    if (currentGame === '') {
      return "Global";
    } else {
      return currentGame;
    }
  }

  return (
    <ChatBoxContainer>
        <LobbySign>{RoomName()} Chat Room</LobbySign>
        <div>
          <div>
            <PlayerName>Paul Choi</PlayerName>
            <span>Yo whats up guys anyone want to play?</span>
          </div>
          <div>
            <PlayerName>Tracy Tea</PlayerName>
            <span>Does anyone have one more for among us!!!</span>
          </div>
        </div>
      </ChatBoxContainer>
  )
}

export default ChatBox;