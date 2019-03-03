import React, { Component } from 'react';
import ArticleCard from "./ArticleCard";
import { Card } from 'semantic-ui-react'


class Favorites extends Component {
    render() {
        return(
            <div >
                <h1 style={{position: 'center'}}>Pinned Articles</h1>
                <Card.Group centered itemsPerRow={5}>
                    {this.props.favorites.map(article =>
                        <ArticleCard 
                            key={article.id}
                            article={article}
                            showDetail={this.props.showDetail} />)}
                </Card.Group>
            </div>
        )
    }
}

export default Favorites;