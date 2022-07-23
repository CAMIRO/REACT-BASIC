const ContactList = ({ contacts }) => {


    return (
        <table className='informationTable'>
        {contacts.map(contact => {
            const { name, last, phone } = contact
            return (
                <thead>
                    <tr>
                        <th>{name}</th>
                        <th>{last}</th>
                        <th>{phone}</th>
                    </tr>
                 </thead>
            )
        })}
    </table>
    )
}
  


export default ContactList