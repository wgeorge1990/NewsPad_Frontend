import React, { Component } from 'react';
import ArticleCard from "./ArticleCard";
import { Card } from 'semantic-ui-react';
import _ from 'lodash';

class SearchResults extends Component {
    state = {
        renderInc: 0
    }

    incrementSection = () => {
        this.setState({ renderInc: this.state.renderA + 40 })
    }

    render() {
        const { articles, showDetail } = this.props
        const renderGroup = _.slice(articles, this.state.renderA, this.state.renderInc + 100)
            return (
                <div>
                    <Card.Group centered itemsPerRow={5}>
                        {renderGroup.map(article =>
                            <ArticleCard
                                key={article.id}
                                article={article}
                                showDetail={showDetail} />)}
                    </Card.Group>
                </div>
            )
    }
}
export default SearchResults
