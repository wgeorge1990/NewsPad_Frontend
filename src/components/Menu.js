import React, { Component } from 'react'
import { Input, Menu, Button } from 'semantic-ui-react'


class NavMenu extends Component {
    render() {
        return (
            <Menu  >
                <Menu.Item>
                    <Button
                        onClick={ (e) => this.props.showLogin(e) } >
                        Login
                        </Button>
                </Menu.Item>
                    <Menu.Item>
                        <Button
                        onClick={(e) => this.props.viewFavorites(e)} >
                        Favorites
                        </Button>
                    </Menu.Item>
                <Menu.Item>
                    <Button
                        onClick={(e) => this.props.goHome(e)} >
                        Home
                        </Button>
                </Menu.Item>
                    <Menu.Item>
                        <Input 
                        icon='search' 
                        placeholder='Search...' />
                    </Menu.Item>
                    <Menu.Item>
                        <Button
                        name='Search Articles' 
                        onClick={(e) => this.props.loadNews(e)}>
                        Load News
                        </Button>
                    </Menu.Item>
                </Menu>
        )
    }
}
export default NavMenu
