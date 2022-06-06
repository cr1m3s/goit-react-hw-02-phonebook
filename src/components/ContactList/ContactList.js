import React from 'react';
import PropType from 'prop-types';
import style from './ContactList.module.css';

class ContactList extends React.Component {
  state = {
    contacts: [],
  };

  static propTypes = {
    contacts: PropType.array.isRequired,
    onDeleteContact: PropType.func.isRequired,
  };

  render() {
    return (
      <ul className={style.contatcsList}>
        {this.props.contacts.map(contact => (
          <li key={contact.id} className={style.contact}>
            <p>
              {contact.name} : {contact.number}
            </p>
            <button onClick={() => this.props.onDeleteContact(contact.id)} className={style.button}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
