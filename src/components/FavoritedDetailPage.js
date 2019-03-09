import React from 'react';
import { GridColumn, Divider, Container, Grid, Menu, Form, TextArea, MenuItem, List } from "semantic-ui-react";

class ArticleAndPad extends React.Component {
    state = {
        comment: ""
    }

    setComment = (e) => {
        console.log("save Comment inside: Favorite.js")
        this.setState({ comment: e.target.value })
    }

    saveComment = (e) => {
        e.preventDefault();
        console.log("saveing comment", this.props.article.id)
        const comment = {
            comment: this.state.comment,
            favorite_id: this.props.article.id
        }
        let body = JSON.stringify(comment)
        fetch(`https://damp-meadow-28245.herokuapp.com/users/2/favorites/${this.props.article.id.toString()}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        }).then(response => response.json())
            .then((e) => this.props.fetchComments(e))
    }

    resetTextBox = () => {
        document.querySelector('#root > div > div:nth-child(2) > div.ui.very.relaxed.two.column.grid > div.center.aligned.column > form > textarea').value = "";
    }

    render() {
        let filtered = this.props.comments.filter(comment => comment.favorite_id === this.props.article.id)
        console.log("matching comments", filtered)
        return (
            <div padded>
                <Grid columns={2} relaxed='very'>
                    <GridColumn>
                        <iframe
                            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                            src={this.props.article.url}
                            width="880"
                            height="800"
                            scrolling="yes"
                            allowtransparency="true" />
                    </GridColumn>
                    <GridColumn textAlign="center">
                        <Form>
                            <TextArea placeholder="Write your notes here and do not forget to press save"
                                autoHeight
                                row={4}
                                onChange={(e) => this.setComment(e)} />
                        </Form>
                        
                        <Menu compact center>
                            <MenuItem center
                                onClick={(e) => this.saveComment(e)}>Save Notes</MenuItem>
                            <MenuItem
                                onClick={this.resetTextBox}
                                center>Reset</MenuItem>
                        </Menu>

                        <div className="ui big list">
                            {filtered.map(com =>
                                <List.Item >{com.comment}</List.Item>)}
                        </div>
                    </GridColumn>
                </Grid>
                <Divider vertical hidden></Divider>
            </div>
        )
    }
}
export default ArticleAndPad;