import React from 'react';
import './app.css';
import Header from './Header'
import ResultContainer from './resultContainer'

const name = require('@rstacruz/startup-name-generator')

class App extends React.Component {
  state = {
    HeaderText:"NameIt!",
    headerExpanded: true,
    suggestedName : []
  }
  handelInputChange = (inputChange) =>{
  
this.setState({
  suggestedName: inputChange ? name(inputChange):[],
  headerExpanded:!inputChange
})
  }
  render() {
    console.log(this.state.suggestedName)
    return (
      <div className="App">
        <Header  onInputChange = {this.handelInputChange} expanded = {this.state.headerExpanded} />
        <ResultContainer names = {this.state.suggestedName}/>
      </div>
    );
  }
}

export default App;
