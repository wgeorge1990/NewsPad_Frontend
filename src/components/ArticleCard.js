import React from 'react';
import { Container, Card } from 'semantic-ui-react'

const ArticleCard = (props) => {
    const { article} = props

    //console.log("single article",article)

    //console.log("article image", article.media[0])

    const media = article.media[0]
    //console.log("still article image", media["media-metadata"][0].url)

    return(
            <Card >
                <h4 className="Article Card"> {article.title}</h4>
                <img 
                src={media["media-metadata"][2].url} 
                onClick={(e) => props.showDetail(e, article)}
                ></img>
            </Card>  
    )
}

export default ArticleCard;

{/* <iframe width={600} height={300} src={props.article.url}></iframe>   */}



