import React, { Component } from 'react';
import FavoriteArticleCard from "./FavoriteArticleCard";
import { Card } from 'semantic-ui-react'


class Favorites extends Component {
    
    render() {
        let filtered = this.props.favorites.filter(fav => fav.user_id === this.props.currentUser[0].id)
        return(
            <div >
                <h1 style={{textAlign: 'center'}}>Pinned Articles</h1>
                <Card.Group centered itemsPerRow={5}>
                    {filtered.map(article => 
                        <FavoriteArticleCard
                            key={article.id}
                            article={article}
                            showDetail={this.props.showDetail} />)}
                </Card.Group>
            </div>
        )
    }
}

export default Favorites;