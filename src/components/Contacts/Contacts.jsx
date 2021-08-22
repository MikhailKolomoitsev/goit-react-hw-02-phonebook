import React, { Component } from "react";
import PropTypes from "prop-types";

export class Contacts extends Component {
  static defaultProps = {
    contacts: [],
  };

  state = { contacts: this.props.contacts };

  static propTypes = {
    contacts: PropTypes.array.isRequired,
    // onClick: PropTypes.func.isRequired,
  };

  render() {
    const data = this.props.contacts;
    return (
      <ul>
        {data.map((contact) => (
          <li key={contact.id}>
            {contact.name} {contact.number}
          </li>
        ))}
      </ul>
    );
  }
}

export default Contacts;
