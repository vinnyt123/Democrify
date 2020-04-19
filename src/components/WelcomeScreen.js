import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
  Button,
  InputGroup,
  Input,
  InputGroupAddon,
  Container,
  Row,
  Col,
  Popover,
  //PopoverHeader,
  PopoverBody,
  //InputGroupText,
  ButtonGroup,
} from "reactstrap";
import "./WelcomeScreen.css";
//import * as spotify from "../SpotifyFunctions.js";

class WelcomeScreen extends Component {
  state = {
    popoverHostOpen: false,
    popoverCodeOpen: false,
  };

  togglePopover = (event) => {
    const id = event.target.id;
    console.log(id);
    if (id == "PopoverCode") {
      this.setState({
        popoverCodeOpen: !this.state.popoverCodeOpen,
      });
    } else if (id == "PopoverHost") {
      this.setState({
        popoverHostOpen: !this.state.popoverHostOpen,
      });
    }
  };

  render() {
    return (
      <div>
        <Container className="inputContainer">
          <Row xs="1">
            <Col>
              <InputGroup className="inputPartyCode">
                <Input placeholder="Enter the party code" />
                <InputGroupAddon addonType="append">
                  <Button style={{backgroundColor: "#c030ed", borderColor : "#c030ed"}}>Join!</Button>
                  <InputGroupAddon addonType="append">
                    <Button
                      style={{backgroundColor: "black", borderColor : "black"}}
                      className="informationButton"
                      id="PopoverCode"
                      type="button"
                      size="sm"
                      onClick={this.togglePopover}
                    >
                      ?
                    </Button>
                    <Popover
                      placement="bottom"
                      isOpen={this.state.popoverCodeOpen}
                      target="PopoverCode"
                    >
                      <PopoverBody>
                        You can join an existing shared playlist and start
                        adding your music to it. Just ask the host for an access
                        code!
                      </PopoverBody>
                    </Popover>
                  </InputGroupAddon>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>
        </Container>
        <Container className="hostButtonContainer">
          <ButtonGroup>
            <Link to='/playlists'>
              <Button style={{backgroundColor: "#1ed760", borderColor : "#1ed760"}} size="lg">
                Host a party
              </Button>
            </Link>
            <Button
              style={{backgroundColor: "black", borderColor : "black"}}
              size="sm"
              className="informationButton"
              id="PopoverHost"
              type="button"
              onClick={this.togglePopover}
            >
              ?
            </Button>
            <Popover
              placement="bottom"
              isOpen={this.state.popoverHostOpen}
              target="PopoverHost"
              toggle={this.toggle}
            >
              <PopoverBody>
                You can start your own party! Create or share your Spotify
                playlist with your party guests
              </PopoverBody>
            </Popover>
          </ButtonGroup>
        </Container>
      </div>
    );
  }
}

export default WelcomeScreen;