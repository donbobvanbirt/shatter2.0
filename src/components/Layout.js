import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import HomePage from './HomePage/HomePage'
import ProfileForm from './ProfileForm/ProfileForm'
import { Dropdown } from 'semantic-ui-react'


const trigger = (
  <span>
    <i className="fa fa-user" aria-hidden="true" />
  </span>
)

class Layout extends React.Component {
  render() {
    return (

      <div className="container">
        <h1 className="appTitle" onClick={() => browserHistory.push('/')}>Shatter</h1>
        <div className="profileBtn"><Dropdown trigger={trigger} pointing='top right' icon={null}>
          <Dropdown.Menu>
            <Dropdown.Item text='Account' icon='user' onClick={() => browserHistory.push('/profile')}/>
            <Dropdown.Item text='Settings' icon='settings' onClick={() => browserHistory.push('/profile')}/>
            <Dropdown.Item text='Sign Out' icon='sign out' />
          </Dropdown.Menu>
        </Dropdown></div>
        <div className="pageContainer">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout
