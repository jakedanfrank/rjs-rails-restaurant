import React, { Component } from "react";
import { Form, } from "semantic-ui-react";

class ItemForm extends Component {
  state = { name: "", };

  handleChange = (e) => {
    this.setState({ name: e.target.value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({ name: "", });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Item"
          placeholder="Add Menu Item"
          required
          value={this.state.name}
          onChange={this.handleChange}
          />
      </Form>
    )
  }
}

export default ItemForm;