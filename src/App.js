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
    this.buttonValues = [['1', '2', '3', '+', '*'],['4', '5', '6', '-', '/'],['7', '8', '9', '(', ')'], ['.', '0', '√', '=', 'C']];
  };

  render() {
    return (
        <div>
          <OutputBox result={this.state.result} expression={this.state.expression} />
          <div className="ButtonsBox">
            <table>
              <tbody>
                { this.buttonValues.map(rows => {
                  var row = rows.map(value => <td><Button value={value} handleClick = {this.handleClick} /></td>);
                  return <tr>{row}</tr>
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
  };

  handleClickFunc(event) {
    const value = event.target.firstChild.nodeValue; 
    switch (value) {
      case '=' : {
        try {
          var answer = eval(this.state.expression).toString();
          if (answer === 'Infinity') {
            const result = 'Division by zero is undefined';
            this.setState({result});
          } else {
            const result = eval(this.state.expression).toString();
            this.setState({result});
          }
        }
        catch (error) {
          const result = 'ERROR';
          this.setState({result});
        }
        break;
      }
      case "√" : {
        try {
          const result = Math.sqrt(eval(this.state.expression)).toString();
          this.setState({result});
        }
        catch (error) {
          const result = 'ERROR';
          this.setState({result});
        }
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




