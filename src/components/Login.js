import React from 'react';
import { Form, FormButton } from 'semantic-ui-react';

class Login extends React.Component {
    state = {
        username: "",
        password: "",
        searchData: []
    }
    componentDidMount = () => {
        fetch("http://localhost:3000/users").then(res => res.json())
            .then(data => this.setState({
                searchData: data
            }))
    }
    handleLogin = (e) => {
        e.preventDefault();
        let file = this.state.searchData
        file = file.filter(user => user.password.includes(this.state.password) && user.user_name.includes(this.state.username))
        this.props.setCurrentUser(file);
        this.props.showLogin();
        this.props.showHome()
     }

    handleOnChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value }) }

    render(){
        return(
            <div style={{textAlign: 'center'}}>
                <Form onSubmit={this.handleLogin}>
                    <Form.Field 
                        style={{ display: 'inline-block' }}
                        width={2} >
                        <label> Username </label>
                        <input 
                        onChange={this.handleOnChange}
                        placeholder='Username'
                        name="username" 
                        />
                    </Form.Field>
                    <Form.Field 
                        style={{ display: 'inline-block' }}
                        width={2} >
                        <label>Password</label>
                        <input 
                        onChange={this.handleOnChange}
                        placeholder='Password'
                        name="password" />
                    </Form.Field>
                    <FormButton type='submit' >Sign In
                    </FormButton>
                    <FormButton onClick={null}> SignUp for NewsPad
                    </FormButton>
                </Form>
            </div>
        )
    }
}
export default Login