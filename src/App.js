import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, Button } from 'semantic-ui-react'


const key = "mn3dtRxwdGYGdziMyPqLiOgfsQ08gwAb"	
const mostViewed = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${key}`

class App extends Component {
  state = {
    articles: []
  }
  componentDidMount = () => {
    fetch(mostViewed).then(res => res.json()).then(data => 
      this.setState({
        articles: data
      }))
  }

  articleCard = () => (
    <Card>
      <a className="embedly-card"
        href="https://www.nytimes.com/interactive/2019/02/27/us/politics/michael-cohen-testimony.html">
        Michael D. Cohen's Congressional Testimony</a>
        <Button>
          Add To Favorites
        </Button>
        

    </Card>
  )

  render() {
    return (
      <div className="App">
        {this.articleCard()}
        {this.articleCard()}
      </div>
    );
  }
}

export default App;
