import React, { Component } from 'react';
import SearchResults from "./components/SearchResults"
import Menu from './components/Menu'
import ArticleDetails from './components/ArticleDetails'
import Favorites from './components/Favorites'
import Login from './components/Login'
import NewsPad from './components/FavoritedDetailPage'
import SignUpForm from './components/SingUpForm'


const key = "mn3dtRxwdGYGdziMyPqLiOgfsQ08gwAb"	
const mostViewed = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${key}`

class App extends Component {
  state = {
    articles: [],
    showDetail: false,
    selectedArticle: null,
    favorites: [],
    showFavorites: false,
    showHome: false,
    showLogin: true,
    showFavDetail: false,
    selectedFavDetail: null,
    currentUser: null
  }

  setCurrentUser = (user) => {
    console.log("set Current user", user)
    this.setState({
      currentUser: user
    })
  }

  componentDidMount = () => {
    this.loadNews()
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
    this.setState({showHome: !this.state.showHome})
  }

  renderDetails = () => (
    <ArticleDetails 
    article={this.state.selectedArticle} 
    pinArticle={this.pinArticle}
    goBackToSearch={this.goBackToSearch}/>
  )

  pinArticle = (e, article) => {
    console.log('pin article', e, article, )
    this.setState({
      favorites: this.state.favorites.concat(article)
    })
    this.saveFavorite()
  }
    

    saveFavorite = () => {
      console.log("saveFavorite", this.state.selectedArticle.title)
      const favPost = 
        {title: this.state.selectedArticle.title,
        url: this.state.selectedArticle.url,
        image_url: this.state.selectedArticle.media[0]['media-metadata'][2].url,
        user_id: this.state.currentUser.id}
      let body = JSON.stringify(favPost)
      fetch('http://localhost:3000/users/1/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body,
      }).then(response => response.json()).then(data => console.log(data))
    }
    

  homeButton = () => {
    this.setState({
      showDetail: false,
      showFavorites: false,
      showHome: true
    })
  }

  goBackToSearch = (e) => {  
    this.setState({
      showDetail: !this.state.showDetail
    })
    this.setState({
      selectedArticle: null
    })
    this.setState({
      showHome: !this.state.showHome
    })
  }

  viewFavorites = (e) => {
    this.setState({
      showFavorites: true
    })
    this.setState({
      showHome: false
    })
    this.setState({
      showDetail: false
    })
  }

  showLogin = (e) => {
    this.setState({
      showLogin: !this.state.showLogin
    })
  }
  
  showPadDetail = (e, article) => {
    console.log("showPadDetail",e, article)
    this.setState({
      showFavDetail: true
    })
    this.setState({
      selectedFavDetail: article
    })

  }

  render() {
    return (
      <div className="App">
        <Menu 
        showLogin={this.showLogin} 
        goHome={this.homeButton} 
        viewFavorites={this.viewFavorites} 
        loadNews={this.loadNews} />
        {this.state.showFavDetail ? <NewsPad article={this.state.selectedFavDetail} /> : null}
        {this.state.showLogin ? <Login showHome={this.homeButton} showLogin={this.showLogin} setCurrentUser={this.setCurrentUser}/> : null}
        {this.state.showDetail ? <ArticleDetails article={this.state.selectedArticle} pinArticle={this.pinArticle} goBackToSearch={this.goBackToSearch} /> : null}
        {this.state.showHome ? <SearchResults  showDetail={this.showDetail} articles={this.state.articles} /> : null}
        {this.state.showFavorites ? <Favorites showDetail={this.showPadDetail} favorites={this.state.favorites}/> : null}
      </div>
    );
  }
}

export default App;

// {
//   this.state.currentUser === null ?
//   <SignUpForm setCurrentUser={this.setCurrentUser} /> : null
// }