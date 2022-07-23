import { useState } from 'react'

import BasicForm from './BasicForm';
import ContactList from './ContactList';

const MyForm = () => {
    // hooks
    const [contactInfo, setContactInfo] = useState({
        name: "",
        last: "",
        phone: "",
      });
    

    return (
        <div>
            <BasicForm contactInfo={contactInfo} setContactInfo={setContactInfo} />
            <ContactList contacts={contactInfo}/>
        </div>
    )
}
  


export default MyForm