import React, { Component } from "react";

class AddMoney extends Component {
  state = {
    input: ""
  };
  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addMoneyForm(this.state.input);
  };

  render() {
    return (
      <div>
        <form className="add-money" onSubmit={this.handleSubmit}>
          <label>$</label>
          <input
            type="number"
            value={this.state.input}
            onChange={this.handleChange}
            min={0}
            max={100}
          />
          <button type="submit">Add Money Now!</button>
        </form>
      </div>
    );
  }
}

export default AddMoney;
