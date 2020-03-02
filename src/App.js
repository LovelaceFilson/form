import React from 'react';
import './App.css';

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.state = { num: '' };
    this.state = { hello: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange= this.handleSubmit.bind(this);
    this.handleChange = this.handleSubmit.bind(this);

  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    this.setState({ num: event.target.num });
    this.setState({ hello: event.target.hello });

  }

  handleSubmit(event) {
    alert('A name is stored : ' + this.state.value);
    alert('A number is stored: ' + this.state.num);
    alert('An email is stored: ' + this.state.hello);

    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>

          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />

        <label>
          Number:
<input type="text" num={this.state.num} onChange={this.handleChange} />
        </label>
        <input type="submit" num="Submit" />


        <label>
          Email:
<input type="text" hello={this.state.hello} onChange={this.handleChange} />
        </label>
        <input type="submit" hello="Submit" />
      </form>


    );
  }
};


export default StatefulComponent;
