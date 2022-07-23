const ContactList = ({ contacts }) => {

    const { name, last, phone } = contacts
    console.log("🚀 ~ file: ContactList.jsx ~ line 4 ~ ContactList ~ contacts", contacts)

    return (
        <table className='informationTable'>
        <thead>
            <tr>
                <th>{name}</th>
                <th>{last}</th>
                <th>{phone}</th>
            </tr>
        </thead>
    </table>
    )
}
  


export default ContactList