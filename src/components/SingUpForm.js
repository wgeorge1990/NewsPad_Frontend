import React from 'react';
import { Form, Icon } from 'semantic-ui-react';

class SignUpForm extends React.Component {
    state = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        newUser: null
        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signUpUser = (e) => {
        e.preventDefault();
        let body = JSON.stringify({
            user: {
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                user_name: this.state.username,
                password: this.state.password
            }
        })

        fetch("http://localhost:3000/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body, })
            .then(response => response.json())
            .then((e, user)=>this.props.setCurrentUser(e, user))
            this.props.homeButton()
        }



    render(){
        return(
            <div style={{ textAlign: 'center' }}>
                <Form onSubmit={(e)=> this.signUpUser(e)}>
                    <h1>Sign Up For NewsPad <Icon name="newspaper" /></h1>
                    <Form.Field
                        style={{ display: 'inline-block' }}
                        width={3} >
                        <label>First Name</label>
                        <input
                            name="firstName"
                            placeholder='First Name'
                            onChange={(e) => this.handleChange(e)} />
                    </Form.Field>
                    <Form.Field
                        style={{ display: 'inline-block' }}
                        width={3} >
                        <label>Last Name</label>
                        <input
                            name="lastName"
                            placeholder='Last Name'
                            onChange={(e) => this.handleChange(e)} />
                    </Form.Field>
                    <Form.Field
                        style={{ display: 'inline-block' }}
                        width={3} >
                        <label> Username </label>
                        <input 
                        name="username"
                        placeholder='Username'
                        onChange={(e) => this.handleChange(e)}
                        />
                    </Form.Field>
                    <Form.Field
                        style={{ display: 'inline-block' }}
                        width={3} >
                        <label>Password</label>
                        <input 
                        name="password"
                        placeholder='Password'
                        onChange={(e) => this.handleChange(e)} />
                    </Form.Field>

                    <Form.Button type='submit'>Sign Up
                    </Form.Button>
                </Form>
                </div>
        )
    }
}
export default SignUpForm;