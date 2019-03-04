import React from 'react';
import { GridColumn, Divider, Segment, Grid, Menu, Form, TextArea, MenuItem } from "semantic-ui-react";

class ArticleAndPad extends React.Component {
    render(){
        return(
            <Segment padded>

                <Grid columns={2} relaxed='very'>
                    <GridColumn>
                        <iframe
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
                                row={4}/>
                        </Form>
                        <Menu compact center>
                            <MenuItem center>Save Notes</MenuItem>
                            <MenuItem center>Reset</MenuItem>
                        </Menu>
                    </GridColumn>
                </Grid>

                <Divider vertical hidden></Divider>

            </Segment>
        )
    }
}
export default ArticleAndPad;