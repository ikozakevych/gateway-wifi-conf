import React, { Component } from 'react';
import logo from './LOCINOX_LOGO_250x56px.png';
import NetworkItem from './NetworkItem.jsx'
import './App.css';

class AppHeader extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Gateway Wi-Fi configuration</h1>
        </header>
        <div className="App-separator" >
         <div className="Color-header-desktop">
          <div className="Center"/>
         </div>
         </div>
      </div>
    );
  }
}

class NetworkSearch extends Component {

  constructor(props) {

    super(props);
    
    this.state = {networkList: []};
    this.state = {isInSearch: false};
    this.state = {progressVal: 0};

  }

  handleSearchClick =  () => {
 
    this.setState({isInSearch: true});
    this.setState({networkList: []});
    this.timerID = setInterval(
        () => this.searchFinishedTick(),
        5500
    );
    this.timerIntervalID = setInterval(
      () => this.intervalTick(),
      50
    );
    this.setState({progressVal: 10});
  }

  searchFinishedTick = () => {
    this.setState({isInSearch: false});
    this.setState({progressVal: 0});

    clearInterval(this.timerID);
    clearInterval(this.timerIntervalID);
  }

  intervalTick = () =>{
    this.setState({progressVal: this.state.progressVal+1});
    if(this.state.progressVal === 30) this.setState({networkList: [...this.state.networkList, "N-ix wifi"]});
    if(this.state.progressVal === 40) this.setState({networkList: [...this.state.networkList, "N-ix 1 wifi"]});
    if(this.state.progressVal === 50) this.setState({networkList: [...this.state.networkList, "N-ix 2 wifi"]});
    if(this.state.progressVal === 90) this.setState({networkList: [...this.state.networkList, "N-ix Guest wifi"]});
  }

  render() {
    const isInSearch = this.state.isInSearch;
    const progressVal = this.state.progressVal;

    let networks = this.state.networkList;
    let optionItems;
    if(networks)
    {
      optionItems = networks.map((item) =>
              <NetworkItem name={item} />
          );

    }

    let progress;
    let networkList;
    let customStyle = isInSearch? {visibility: 'visible'}: {visibility: 'hidden'};

    progress = <progress class="SearchProgress" style={customStyle} value={progressVal} max="100"/>;
  
    if(optionItems)
      networkList = <div name="Networks" class="NetworkListBox">{optionItems}</div>;

    return (
      <div class="MainDiv">
        <div class="CenterringDiv">
          <button type="button" class="SearchButton" onClick={this.handleSearchClick} disabled={this.state.isInSearch}> Search for Networks </button>
          {progress}
          <div>
            {networkList}
          </div>

        </div>
      </div>
    );
  }
}


class App extends Component{
  render()
  {
    return (
    <div>
      <AppHeader/>
      <NetworkSearch/>
    </div>
    );
  }
}

export default App;
