import React from 'react';
import { Container, Card } from 'semantic-ui-react'


const FavoriteArticleCard = (props) => {
    return (
        <Card
            onClick={(e) => props.showDetail(e, props.article)}>
            <Card.Content header={props.article.title} />
            <img
                src={props.article['image_url']}
            ></img>
        </Card>
    )
}
export default FavoriteArticleCard;