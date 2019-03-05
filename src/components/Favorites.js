import React, { Component } from 'react';
import FavoriteArticleCard from "./FavoriteArticleCard";
import { Card } from 'semantic-ui-react'


class Favorites extends Component {
    render() {
        return(
            <div >
                <h1 style={{textAlign: 'center'}}>Pinned Articles</h1>
                <Card.Group centered itemsPerRow={5}>
                    {this.props.favorites.map(article => 
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