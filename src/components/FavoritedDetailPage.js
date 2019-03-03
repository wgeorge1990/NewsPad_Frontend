import React from 'react';
import { GridColumn, Divider, Segment, Grid, Input, Form } from "semantic-ui-react";

class ArticleAndPad extends React.Component {
    render(){
        return(
            <Segment>
                <Grid columns={2} relaxed='very'>
                    <GridColumn>
                        <iframe
                            src={this.props.article.url}
                            width="880"
                            height="800"
                            scrolling="yes"
                            allowtransparency="true" />
                    </GridColumn>
                    <GridColumn>
                        <Form.Input />
                    </GridColumn>
                </Grid>
                <Divider vertical></Divider>
            </Segment>
        )
    }
}
export default ArticleAndPad;