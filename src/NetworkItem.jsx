import React, { Component } from 'react';
import logo from './LOCINOX_LOGO_250x56px.png';
import './App.css';
import './NetworkItem.css';



class NetworkItem extends Component{

    constructor(props){
        super(props);
        this.state = {isConnected: false};
        this.state = {isConnecting: false};
        this.state = {progressVal: 0};
        this.handleConnectClick = this.handleConnectClick.bind(this);

        this.handleDisconnectClick = this.handleDisconnectClick.bind(this);
        this.connectFinishedTick = this.connectFinishedTick.bind(this);
        this.intervalTick = this.intervalTick.bind(this);
    }

    handleConnectClick()
    {

        this.setState({isConnecting: true});
        this.setState({progressVal: 0});
        this.timerID = setInterval(
            () => this.connectFinishedTick(),
            2500
        );
        this.timerIntervalID = setInterval(
            () => this.intervalTick(),
            25
          );

    }

    intervalTick()
    {
      this.setState({progressVal: this.state.progressVal+1});
    }

    connectFinishedTick()
    {
        clearInterval(this.timerID);
        clearInterval(this.timerIntervalID);
        this.setState({isConnecting: false});
        this.setState({isConnected: true});
    }

    handleDisconnectClick()
    {
        this.setState({isConnected: false});
    }

    render() {

        const progressVal = this.state.progressVal;
        let connected;

        if(this.state.isConnecting)
        {
            connected = <progress class="SearchProgress connectProgress" max="100" value={progressVal}/>;  
        }
        else
        { 
            if(this.state.isConnected)
            {
                connected = <button class="DisconnectButton" onClick={this.handleDisconnectClick}>Disconnect</button>;
            }
            else
            {
                connected = <button class="ConnectButton" onClick={this.handleConnectClick}>Connect</button>;
            }
        }

        return (
            <div class="NetworkItem">
                <p class="NetworkText">{this.props.name}</p>
                {connected} 
            </div>  
        );
    }

}

export default NetworkItem;