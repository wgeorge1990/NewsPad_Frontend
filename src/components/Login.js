import React from 'react';
import { Form, Button, Menu, Container } from 'semantic-ui-react';

class Login extends React.Component {
    render(){
        return(
         
             
            <Form >
                <Form.Field className="feild-one" width={5} >
                    <label>Username</label>
                    <input placeholder='Username' />
                </Form.Field>
                <Form.Field width={5} >
                    <label>Password</label>
                    <input  placeholder='Password' />
                </Form.Field>
                    <Button type='submit'>Submit</Button>
                    <Button onClick={null}>
                        SignUp for NewsPad
                    </Button>
            </Form>
        )
    }
}
export default Login