import React from 'react';
import {Button, Menu, MenuItem} from 'semantic-ui-react'

class ArticleDetails extends React.Component {
    render(){
        return (
            <div >
                <Menu >
                    <MenuItem >
                        <Button
                            center
                            color={'green'}
                            fluid
                            onClick={(e) => this.props.pinArticle(e, this.props.article)}
                        >PIN ARTICLE TO FAVORITES
            </Button>
                    </MenuItem>
                    <MenuItem>
                        <Button
                            color={'red'}
                            fluid
                            onClick={(e) => this.props.goBackToSearch(e)}
                        >GO BACK TO SEARCH
            </Button>
                    </MenuItem>
                </Menu>
                <iframe
                    src={this.props.article.url}
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
                            onClick={(e) => this.props.pinArticle(e, this.props.article)}
                    >PIN ARTICLE TO FAVORITES
            </Button>
                    </MenuItem>
                    <MenuItem>
                        <Button

                            fluid
                            onClick={(e) => this.props.goBackToSearch(e)}
                        >GO BACK TO SEARCH
            </Button>
                    </MenuItem>
                </Menu>
            </div>
        )
    }
   
}
export default ArticleDetails
