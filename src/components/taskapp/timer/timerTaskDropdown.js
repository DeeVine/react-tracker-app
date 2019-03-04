import React from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

export default class TimerTaskDropdown extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      dropdownOpen: false
    }
}

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  checkStartTime = (startTime) => {
    console.log('startTime', startTime)
  }

  render () {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem
            onClick={() => this.props.deleteHoursLog(this.props.taskName, this.props.startTime)}
          >Delete Time</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }

}
