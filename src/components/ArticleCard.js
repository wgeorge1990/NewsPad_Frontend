import React from 'react';
import { Container, Card } from 'semantic-ui-react'


const ArticleCard = (props) => {
    const { article} = props
    //console.log("single article",article)
    //console.log("article image", article.media[0])
    const media = article.media[0]
    //console.log("still article image", media["media-metadata"][0].url)
    return(
        <Card 
              onClick={(e) => props.showDetail(e, article)}>
            <Card.Content header={article.title} />
                <img 
                src={media["media-metadata"][2].url} 
                ></img>
            <Card.Content extra>
                <Card.Meta>Published: {article['published_date']}</Card.Meta>
                <Card.Description>Section: {article.section} </Card.Description>
                <Card.Description>Published By: {article.source}</Card.Description>
            </Card.Content>
            </Card>  
    )
}
export default ArticleCard;




