import React from 'react';
import { Container, Button, Menu, Embed, Segment, MenuItem} from 'semantic-ui-react'

const ArticleDetails = (props) => {
   return (
    <Segment fluid>
        
        <Menu compact center>
            <MenuItem>
            <Button
            color={'green'}
            fluid
            onClick={(e)=> props.pinArticle(e, props.article)}
            >PIN ARTICLE TO FAVORITES
            </Button>
               </MenuItem>
            <MenuItem>
            <Button
                color={'red'}
                fluid
                onClick={(e) => props.goBackToSearch(e)}
            >GO BACK TO SEARCH
            </Button>
            </MenuItem>
        </Menu>
           <iframe
                fluid
               src={props.article.url}
               width="2000"
               height="1000"
               scrolling="yes"
               allowtransparency="true"
               border='false' 
            />
           <Menu compact center>
               <MenuItem>
                   <Button
                        
                       fluid
                       onClick={(e) => props.pinArticle(e, props.article)}
                   >PIN ARTICLE TO FAVORITES
            </Button>
               </MenuItem>
               <MenuItem>
                   <Button
                        
                       fluid
                       onClick={(e) => props.goBackToSearch(e)}
                   >GO BACK TO SEARCH
            </Button>
               </MenuItem>
               </Menu>
         
       </Segment>
      
      

   )
    
}

export default ArticleDetails
{/* <iframe 
           src={props.article.url}
           width="1200"
           height="800"
           scrolling="yes"
           allowtransparency="true" /> */}