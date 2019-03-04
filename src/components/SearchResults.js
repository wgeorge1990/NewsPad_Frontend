import React, { Component } from 'react';
import ArticleCard from "./ArticleCard";
import { Container, Card, Grid, Segment } from 'semantic-ui-react';
import _ from 'lodash';

class SearchResults extends Component { 
    state= {
        renderInc: 0
    }

    incrementSection = () => {
        this.setState({ renderInc: this.state.renderA + 20})
    }

    render(){
        const { articles, showDetail } = this.props
        const renderGroup = _.slice(articles, this.state.renderA, this.state.renderInc + 100)
       
            return (
            
                    <Segment fluid >
                    <Card.Group centered itemsPerRow={5}>
                        {renderGroup.map(article => 
                        <ArticleCard 
                            key={article.id} 
                            article={article} 
                            showDetail={showDetail}/>)}
                    </Card.Group>
                    </Segment>
              
                
            )
    }


}
export default SearchResults
