import React, { Component } from 'react';
import PortfolioFixed from './components/PortfolioFixed';
import PortfolioContent from './components/PortfolioContent';


class App extends React.Component {
  render(){
    return (
      <div>
        <PortfolioFixed />
        <PortfolioContent />
      </div>
    );
  }
}

export default App;
