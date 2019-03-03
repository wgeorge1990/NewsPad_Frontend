import React, { Component } from 'react'
import { Input, Menu, Button } from 'semantic-ui-react'


export default class MenuExamplePointing extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <Menu  >
                <Menu.Item className="item-one" name='login' 
                        active={activeItem === 'login'} 
                        onClick={this.handleItemClick} />
                    <Menu.Item
                        name='search'
                        active={activeItem === 'search'}
                        onClick={this.handleItemClick} />
                    <Menu.Item
                        name='favorites'
                        active={activeItem === 'favorites'}
                        onClick={this.handleItemClick}/>
                    <Menu.Item>
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
