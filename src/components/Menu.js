import React, { Component } from 'react'
import { Input, Menu, Button, Icon, MenuHeader } from 'semantic-ui-react'



class NavMenu extends Component {
    render() {
        return (
            <Menu fluid size="huge">
                    <Menu.Item 
                        onClick={ (e) => this.props.showLogin(e) } >
                        Login 
                    </Menu.Item>
                    <Menu.Item
                        onClick={(e) => this.props.viewFavorites(e)} >
                        Favorites
                       
                    </Menu.Item>
                    <Menu.Item
                        onClick={(e) => this.props.goHome(e)} >
                        Home
                    </Menu.Item>
                    <MenuHeader>
                        
                    </MenuHeader>
                    <Menu.Item position="right">
                        <Input 
                        icon='search' 
                        placeholder='Search...' />
                    </Menu.Item>
                    <Menu.Item
                        name='Search Articles' 
                        onClick={(e) => this.props.loadNews(e)}>
                        Load News
                    </Menu.Item>
                </Menu>
        )
    }
}
export default NavMenu
