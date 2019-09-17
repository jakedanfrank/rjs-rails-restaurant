import React, { Component } from 'react';
import axios from "axios";
import ItemForm from "./ItemForm";
import Items from "./Items";
import { Container, Header, } from "semantic-ui-react";


class App extends Component {
  state = { choices: [], };

    componentDidMount() {
      axios.get("/api/menus")
        .then( response => {
          this.setState({ choices: response.data, });
        })
        .catch( error => {
         })
        }

    addItem = (name) => {

    }

    updateItem = (id) => {

    }

    deleteItem = (id) => {

    }

  render() {
    return (
      <Container style={{ padding: "35px", textAlign: "center", }}>
        <Header as="h1">Café De Rails</Header>
        <ItemForm addItem={this.addItem} />
        <br />
        <Items
          choices={this.state.choices}
          updateItem={this.updateItem}
          deleteItem={this.deleteItem}
          />
      </Container>
    )
  }
}


export default App;
