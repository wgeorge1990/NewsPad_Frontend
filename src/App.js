import React, { Component } from 'react';
import './App.css';
import SearchResults from "./components/SearchResults"
import Menu from './components/Menu'
import ArticleDetails from './components/ArticleDetails'

const key = "mn3dtRxwdGYGdziMyPqLiOgfsQ08gwAb"	
const mostViewed = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${key}`

class App extends Component {
  state = {
    articles: [],
    showDetail: false,
    selectedArticle: null
  }
  componentDidMount = () => {
    
  }
  
  loadNews = (e) => {
    fetch(mostViewed).then(res => res.json()).then(data =>
      this.setState({
        articles: data.results
      }))
  }

  showDetail = (e, selected) => {
    console.log('showDetail', e, selected)
    this.setState({
      showDetail: !this.state.showDetail
    })
    this.setState({
      selectedArticle: selected
    })
  }

  renderDetails = () => (
    <ArticleDetails article={this.state.selectedArticle} />
  )


  render() {
    return (
      <div className="App">
          <Menu
          loadNews={this.loadNews}/>
          {this.state.showDetail ? this.renderDetails() : 
          <SearchResults 
          showDetail={this.showDetail} 
         articles={this.state.articles} /> }
      </div>
    );
  }
}

export default App;


  