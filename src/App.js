require('dotenv').config();

import React, { Component } from 'react';
//import logo from './logo.svg';
import ArticleContainer from './articleContainer';
import Header from './header';
import SuperAgent from 'superagent';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      articlesData : [],
    }
  }

  componentDidMount(){
    SuperAgent.get(process.env.REACT_APP_LIVE_API_URI).query(null).set('Accept', 'text/json')
    .end((error, response) => {
      if(error){
        console.log(`'An error has occured calling the web service. ${error}.'`);
      }
      else{
        const jsonResponse = response.body;
        this.setState({
          articlesData : jsonResponse
        })
      }
    })
  }

render() {
    return (
      <div className="AppContainer container">
        <Header />
        <ArticleContainer articlesData={this.state.articlesData}/>
      </div>
    );
  }
}

export default App;
