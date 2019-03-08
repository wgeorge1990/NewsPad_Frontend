import React, { Component } from 'react'
import { Input, Menu, Button, Icon } from 'semantic-ui-react'

class NavMenu extends Component {
  render() {
    return (
      <Menu size="huge">
        <Menu.Item onClick={(e) => this.props.showLogin(e)}>
          <Button animated>
            <Button.Content visible>Logout</Button.Content>
            <Button.Content hidden>
              <Icon name='user' />
            </Button.Content>
          </Button>
        </Menu.Item>
        <Menu.Item onClick={(e) => this.props.viewFavorites(e)}>
          Favorites
        </Menu.Item>
        <Menu.Item onClick={(e) => this.props.goHome(e)}>
          Home
        </Menu.Item>
        <Menu.Item position="right">
          <Input
            icon='search'
            placeholder='Search...'
            onChange={(e) => this.props.handleChange(e)}
            name="searchTerm" />
        </Menu.Item>
        <Menu.Item name='Search Articles' onClick={(e) => this.props.loadNews(e)}>
          Load News
        </Menu.Item>
      </Menu>
    )
  }
}
export default NavMenu
