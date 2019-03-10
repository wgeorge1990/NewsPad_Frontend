import React from 'react';
import { Form, FormButton, Icon } from 'semantic-ui-react';

class Login extends React.Component {
    state = {
        username: "",
        password: "",
        searchData: []
    }
    componentDidMount = () => {
        fetch("http://damp-meadow-28245.herokuapp.com/users").then(res => res.json())
            .then(data => this.setState({
                searchData: data
            }))
    }
    handleLogin = (e) => {
        e.preventDefault();
        let file = this.state.searchData
        file = file.filter(user =>
            user.password.includes(this.state.password) && user.user_name.includes(this.state.username))
        this.props.setCurrentUser(file);
        this.props.showLogin();
        this.props.showHome();
    }

    handleOnChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Sign In to NewsPad <Icon name="newspaper" /></h1>
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
                            name="password"
                            type="password" />
                    </Form.Field>
                    <FormButton type='submit' >Sign In
                    </FormButton>
                </Form>
            </div>
        )
    }
}
export default Login