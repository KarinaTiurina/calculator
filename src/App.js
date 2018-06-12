import React, { Component } from 'react';
import './App.css';

class OutputBox extends Component {
  render() {
    const result = this.props.result;
    const expression = this.props.expression;
    return (
      <div className="OutputBox">
        <p>{expression}</p>
        <hr align="left" />
        <p>{result}</p>
      </div>
    );
  }
}

class Button extends Component {
  render() {    
    const value = this.props.value;
    const handleClick = this.props.handleClick;
    const style = this.props.style;

    return (
      <button onClick={handleClick} style={style}>{value}</button>
    );
  }

}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      expression: ''
    };
    this.handleClick = this.handleClickFunc.bind(this);
  };

  render() {
    return (
        <div>
          <OutputBox result={this.state.result} expression={this.state.expression} />
          <div className="ButtonsBox">
            <table>
              <tbody>
                <tr>
                  <td><Button value='1' handleClick = {this.handleClick} /></td>
                  <td><Button value='4' handleClick = {this.handleClick} /></td>
                  <td><Button value='7' handleClick = {this.handleClick} /></td>
                  <td></td>
                  <td><Button value='+' handleClick = {this.handleClick} /></td>                
                  <td><Button value='*' handleClick = {this.handleClick} /></td>
                </tr>
                <tr>
                  <td><Button value='2' handleClick = {this.handleClick} /></td>
                  <td><Button value='5' handleClick = {this.handleClick} /></td>
                  <td><Button value='8' handleClick = {this.handleClick} /></td>
                  <td></td>
                  <td><Button value='-' handleClick = {this.handleClick} /></td>                                
                  <td><Button value='/' handleClick = {this.handleClick} /></td>
                </tr>
                <tr>
                  <td><Button value='3' handleClick = {this.handleClick} /></td>
                  <td><Button value='6' handleClick = {this.handleClick} /></td>
                  <td><Button value='9' handleClick = {this.handleClick} /></td>
                </tr>
                <tr>
                  <td></td>
                  <td><Button value='0' handleClick = {this.handleClick} /></td>
                  <td><Button value='.' handleClick = {this.handleClick} /></td>
                  <td></td>
                  <td><Button value='=' handleClick = {this.handleClick} style={{background:'lightgreen'}} /></td> 
                  <td><Button value='C' handleClick = {this.handleClick} style={{background: 'pink'}} /></td> 
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
  };

  handleClickFunc(event) {
    const value = event.target.firstChild.nodeValue; // get the value from the target element (button)
    switch (value) {
      case '=' : {
        const result = eval(this.state.expression).toString();
        this.setState({result});
        break;
      }
      case 'C' : {
         this.setState({ result: '', expression: '' });
        break;
      }
      default: {
        this.setState({ expression: this.state.expression += value})
        break;
      }
    }
  }
} 


class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;




