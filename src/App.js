import React, { Component } from 'react';
import SearchResults from "./components/SearchResults"
import Menu from './components/Menu'
import ArticleDetails from './components/ArticleDetails'
import Favorites from './components/Favorites'
import Login from './components/Login'
import FavoritedDetail from './components/FavoritedDetailPage'
import SignUpForm from './components/SingUpForm'
import { Container } from 'semantic-ui-react'


const key = "mn3dtRxwdGYGdziMyPqLiOgfsQ08gwAb"	
const mostViewed = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${key}`
const sevenDays = `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${key}`
const pickDays = `https://api.nytimes.com/svc/mostpopular/v2/viewed/2.json`

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
    currentUser: null,
    comments: [],
    searchTerm: ""
  }

   loadNews = (e) => {
    fetch(mostViewed).then(res => res.json()).then(data =>
      this.setState({
        articles: data.results
      }))
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value.toLowerCase()
    })
  }

  // fetchSearchResults = () => {
  //   fetch(searchRoute).then(res => res.json()).then(console.log)
  // }

  setCurrentUser = (user) => {
    this.setState({
      currentUser: user
    })
  }

  componentDidMount = () => {
    this.loadNews()
    
    // this.fetchSearchResults()
  }

  fetchFavorites = (e) => {
    console.log("fetch favorites", this.state.currentUser[0].id.toString())
    let userId = this.state.currentUser[0].id.toString()
    let path = `http://localhost:3000/users/${userId}/favorites`
    fetch(path)
      .then(res => res.json())
      .then(data =>
        this.setState({
          favorites: data
        }))
    this.fetchComments()
  }

  fetchComments = (e) => {
    let userId = this.state.currentUser[0].id.toString()
    fetch(`http://localhost:3000/users/${userId}/favorites/2/comments`)
      .then(res => res.json())
      .then(data => this.setState({
        comments: data
      }));
  }

  saveFavorite = () => {
   
    console.log("saveFavorite", this.state.currentUser[0].id.toString())
    let userId = this.state.currentUser[0].id.toString()
    let path = `http://localhost:3000/users/${userId}/favorites`

    const favPost =
    {
      title: this.state.selectedArticle.title,
      url: this.state.selectedArticle.url,
      image_url: this.state.selectedArticle.media[0]['media-metadata'][2].url,
      user_id: this.state.currentUser[0].id
    }
    let body = JSON.stringify(favPost)
    fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then(response => response.json()).then(data => this.setState({favorites: this.state.favorites.concat(data)}))
  }

  showDetail = (e, selected) => {
    this.setState({
      showDetail: true
    })
    this.setState({
      selectedArticle: selected
    })
    this.setState({showHome: false})
  }

  renderDetails = () => (
    <ArticleDetails 
    article={this.state.selectedArticle} 
    pinArticle={this.pinArticle}
    goBackToSearch={this.goBackToSearch}/>
  )

  pinArticle = (e, article) => {
    // console.log('pin article', e, article, )
    // this.setState({
    //   favorites: this.state.favorites.concat(article)
    // })
    this.saveFavorite()
    this.viewFavorites()
  }

   
  homeButton = (e) => {
    this.setState({
      showDetail: false,
      showFavorites: false,
      showHome: true,
      showFavDetail: false
    })
  }

  goBackToSearch = (e) => {  
    this.setState({
      showDetail: !this.state.showDetail,
      selectedArticle: null,
      showHome: !this.state.showHome
    })
  }

  viewFavorites = (e) => {
    this.setState({
      showFavorites: true,
      showHome: false,
      showDetail: false,
      showFavDetail: false
    })
   this.fetchFavorites(e)
  }

  logOut = () => {
    this.setState({
      currentUser: null,
      showFavorites: false,
      showHome: false,
      showDetail: false,
      showFavDetail: false,
      favorites: []
    })
  }

  showLogin = (e) => {
    this.setState({
      showLogin: !this.state.showLogin,

    })
  }
  
  showPadDetail = (e, article) => {
    console.log("showPadDetail",e, article)
    this.setState({
      showFavDetail: true,
      selectedFavDetail: article,
      showFavorites: false
    })
  }

  render() {
    let filtered = this.state.articles.filter(article => article.title.toLowerCase().includes(this.state.searchTerm))
    console.log(filtered)
    return (
      <div className="App">

        {this.state.currentUser === null ? null : 
        <Menu 
        handleChange={this.handleChange}
        showLogin={this.logOut} 
        goHome={this.homeButton} 
        viewFavorites={this.viewFavorites} 
        loadNews={this.loadNews} />}

        {this.state.showFavDetail ? 
        <FavoritedDetail  
        fetchComments={this.fetchComments} 
        comments={this.state.comments} 
        article={this.state.selectedFavDetail} /> : null}

        {this.state.currentUser === null ? 
        <Login 
        showHome={this.homeButton} 
        showLogin={this.showLogin} 
        setCurrentUser={this.setCurrentUser} /> : null }
    <Container>
        {this.state.currentUser === null ? 
        <SignUpForm
        setCurrentUser={this.setCurrentUser}
        homeButton={this.homeButton}
        /> : null}
    </Container>


        {this.state.showDetail ? 
        <ArticleDetails 
        article={this.state.selectedArticle} 
        pinArticle={this.pinArticle} 
        goBackToSearch={this.goBackToSearch} /> : null}

        {this.state.showHome ? 
        <SearchResults  
        showDetail={this.showDetail} 
        articles={filtered} /> : null}

        {this.state.showFavorites 
          ? <Favorites 
          favorites={this.state.favorites} 
          currentUser={this.state.currentUser} 
          showDetail={this.showPadDetail} /> : null}

      </div>
    );
  }
}

export default App;