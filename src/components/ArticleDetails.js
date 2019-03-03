import React from 'react';
import { Container, Button, Menu, Embed} from 'semantic-ui-react'

const ArticleDetails = (props) => {
   return (

    <Container>
        <Menu>
            <Button
            onClick={(e)=> props.pinArticle(e, props.article)}
            >PIN ARTICLE TO FAVORITES
            </Button>

            <Button
                onClick={(e) => props.goBackToSearch(e)}
            >GO BACK TO SEARCH
            </Button>
        </Menu>

           <iframe
               src={props.article.url}
               width="1400"
               height="1000"
               scrolling="yes"
               allowtransparency="true"
               border='false' 
            />

    </Container>

   )
    
}

export default ArticleDetails
{/* <iframe 
           src={props.article.url}
           width="1200"
           height="800"
           scrolling="yes"
           allowtransparency="true" /> */}