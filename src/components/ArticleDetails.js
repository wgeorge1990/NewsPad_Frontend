import React from 'react';
import { Container, Button, Menu, Embed, Segment, MenuItem} from 'semantic-ui-react'

const ArticleDetails = (props) => {
   return (
    <div >
           <Menu >
            <MenuItem >
            <Button 
            center
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
               src={props.article.url}
               width="100%"
               height="650"
               scrolling="yes"
               allowtransparency="true"
               border='false' 
            />
           <Menu >
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
           </div>
   )
}

export default ArticleDetails
{/* <iframe 
           src={props.article.url}
           width="1200"
           height="800"
           scrolling="yes"
           allowtransparency="true" /> */}