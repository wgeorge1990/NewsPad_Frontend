import React from 'react';
import { Container} from 'semantic-ui-react'

const ArticleDetails = (props) => {
   return (
       <Container>
       <iframe 
           src={props.article.url}
           width="1200"
           height="800"
           scrolling="yes"
           frameborder="0"
           allowtransparency="true" />
       </Container>
   )
    
}

export default ArticleDetails