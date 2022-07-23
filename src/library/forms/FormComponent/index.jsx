import { useState } from 'react'

import BasicForm from './BasicForm';
import ContactList from './ContactList';

const MyForm = () => {
    // hooks
    const [contacts, setContacts] = useState([]);

    const addContact = (contact) => {
        setContacts([...contacts, contact]);

    }
    

    return (
        <div>
            <BasicForm addContact={addContact} />
            <ContactList contacts={contacts}/>
        </div>
    )
}
  


export default MyForm