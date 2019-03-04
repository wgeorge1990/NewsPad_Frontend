import React from 'react';
import { Form, Button, Menu, Container, FormButton, GridColumn, Grid, Segment } from 'semantic-ui-react';
import { stripColor } from 'ansi-colors';

class Login extends React.Component {
    render(){
        return(
            <div style={{textAlign: 'center'}}>
                <Form >
                    <Form.Field 
                        style={{ display: 'inline-block' }}
                        width={2} >
                        <label> Username </label>
                        <input placeholder='Username'/>
                    </Form.Field>
                    <Form.Field 
                        style={{ display: 'inline-block' }}
                        width={2} >
                        <label>Password</label>
                        <input placeholder='Password' />
                    </Form.Field>
                    <FormButton type='submit'>Sign In
                    </FormButton>
                    <FormButton onClick={null}> SignUp for NewsPad
                    </FormButton>
                </Form>
            </div>
                
        )
    }
}
export default Login

    // < GridColumn >
    //  </GridColumn >
    //      <Grid columns={3} relaxed='very'>