import React from 'react';
import styled from 'styled-components';
import TeamMember from './TeamMember.jsx';

const BlockingDiv = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  background: linear-gradient(0deg,rgba(7,1,12,0.86),rgba(7,1,12,0.86)),rgba(40,83,165,0.86);
  z-index: 9001;
`;

const CenteredModal = styled.div`
  position: fixed;
  width: 25%;
  height: 70%;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  overflow-y: auto;
  background: linear-gradient(180deg, #3B0069 0%, rgba(255, 255, 255, 0) 100%), #2853A5;
  box-shadow: inset 0px 4px 4px rgba(0,0,0,0.5);
  border-radius: 10px;
  z-index: 9002;
  ::-webkit-scrollbar {display:none;}
  text-align: center;
  color: #FFF;
`;

const FriendContents = styled.div`
  margin: 5px;
`;

const FriendUserName = styled.h2`
  color: #E3A1FA;
`;

const CenteredFriendDetails = styled.div`
position: fixed;
`;

const StyledImage = styled.img`
  border-radius: 4px;
`;

const FlexBoxedDetails = styled.div`
  display: flex;
`;

const BlockedDetails = styled.div`
  width: 33%;
  display: block;
`;

const Buttons = styled.button`
  background: linear-gradient(180deg, #B747FC 46.21%, rgba(255, 255, 255, 0) 146.21%), #1C2331;
  border-radius: 65px;
  height: 32px;
  width: 68px;
  border: none;
  outline: none;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: inline-block;
  vertical-align: middle;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  transition-duration: 0.3s;
  transition-property: transform;
  &:before {
    pointer-events: none;
    position: absolute;
    z-index: -1;
    content: '';
    top: 100%;
    left: 5%;
    height: 10px;
    width: 90%;
    opacity: 0;
    background: -webkit-radial-gradient(center, ellipse, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
    /* W3C */
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform, opacity;
    transition-property: transform, opacity;
  }
  &:hover {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
    cursor: pointer;
    background-color: #DFB4F9;
  }
  &:hover:before {
    opacity: 1;
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
  }
`;

export default function TeamDetailModal (props) {

    //map members
    const {teamDetails} = props;
    const teamMemberBlocks = teamDetails.map((member) => {
      return <TeamMember key={member.teamMemberId} member={member} />
    })

  return (
    <BlockingDiv>
      <CenteredModal>
        <FriendContents>
          <FriendUserName>Team Information For {props.teamDetails[0].teamName}:</FriendUserName>
          <CenteredFriendDetails>
            <h3>Team Leader:</h3>
            <p>{props.leaderDetails[0].username}</p>
            <h3>Members:</h3>
            {teamMemberBlocks}
            <Buttons onClick={() => {props.handleClickTeamDetail()}}>Close</Buttons>
          </CenteredFriendDetails>
        </FriendContents>
      </CenteredModal>
    </BlockingDiv>
  );
}