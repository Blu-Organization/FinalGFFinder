import React from 'react';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';
import GamesModal from './NewGamesModal.jsx';

export default class GameMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      modalShow: false
    };
    this.handleClickGamesModal = this.handleClickGamesModal.bind(this);
  }

  //on click handler to show modal
  handleClickGamesModal(e) {
    const { modalShow } = this.state;
    if (modalShow === false) {
      this.setState({
        type: e.target.innerText,
        modalShow: true
      })
    } else {
      this.setState({
        modalShow: false
      })
    }
  }

  render() {
    //styled components
    const StyledGameMenuDiv = styled.div`
      padding-left: 1%;
      color: white;
      width: 40%;
      height: 520px;
      margin-left: 2%;
      margin-right: 1%;
      background: linear-gradient(0deg,rgba(7,1,12,0.86),rgba(7,1,12,0.86)),rgba(40,83,165,0.86);
      box-shadow: inset 0px 4px 4px rgba(0,0,0,0.5);
      border-radius: 10px;
    `;

    const GameMenuHeader = styled.h2`
      position: relative;
      height: 25px;
      width: 100%;
      margin: auto;
      vertical-align: middle;
      top: 30px;

      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 25px;
      /* identical to box height */

      display: block;
      align-items: center;
      text-align: center;
      letter-spacing: -0.015em;

      color: #E3A1FA;
    `;

    const GameCategoryListContainer = styled.div`
      position: relative;
      margin-top: 50px;
      margin-left: 20px;
      font-size: 14px;
      color: #FFF;
    `;

    const StyledGameCategory = styled.h3`
      &:hover {
        cursor: pointer;
      }
    `;

    //conditional render modal
    const modalShow = this.state.modalShow;
    let modal;
    if (modalShow) {
      modal = <GamesModal show={this.state.modalShow} type={this.state.type} handleClickGamesModal={this.handleClickGamesModal} handleGameSelect={this.props.handleGameSelect}/>
    } else {
      modal = null
    }

    return (
      <StyledGameMenuDiv>
        <GameMenuHeader>
        Game Categories
        </GameMenuHeader>
        <GameCategoryListContainer>
          <StyledGameCategory onClick={(e) => { this.handleClickGamesModal(e) }} >Action</StyledGameCategory>
          <StyledGameCategory onClick={(e) => { this.handleClickGamesModal(e) }} >Adventure</StyledGameCategory>
          <StyledGameCategory onClick={(e) => { this.handleClickGamesModal(e) }} >Shooter</StyledGameCategory>
          <StyledGameCategory onClick={(e) => { this.handleClickGamesModal(e) }} >MMORPG</StyledGameCategory>
          <StyledGameCategory onClick={(e) => {this.handleClickGamesModal(e)}} >RPG</StyledGameCategory>
          <StyledGameCategory onClick={(e) => {this.handleClickGamesModal(e)}} >Strategy</StyledGameCategory>
          <StyledGameCategory onClick={(e) => {this.handleClickGamesModal(e)}} >Puzzle</StyledGameCategory>
          <StyledGameCategory onClick={(e) => {this.handleClickGamesModal(e)}} >Sports</StyledGameCategory>
          <StyledGameCategory onClick={(e) => {this.handleClickGamesModal(e)}} >Racing</StyledGameCategory>
          <StyledGameCategory onClick={(e) => {this.handleClickGamesModal(e)}} >Fighting</StyledGameCategory>
          {modal}
        </GameCategoryListContainer>
      </StyledGameMenuDiv>
    )
  }
}