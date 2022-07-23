import { useState } from 'react'
export default function BasicForm({ addContact }) {

  const [contactInfo, setContactInfo] = useState({
    name: "",
    last: "",
    phone: "",
  });
  
  const handleChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(contactInfo);
    setContactInfo({ name: "", email: "", phone: "" });
  };
  const { name = "", last = "", phone = "" } = contactInfo;
  return (
    <form onSubmit={handleSubmit}>
      <label>name</label>
      <input name="name" value={name} type="text" onChange={handleChange} />
      <br />
      <label>last</label>
      <input name="last" value={last} type="text" onChange={handleChange} />
      <br />
      <label>phone</label>
      <input name="phone" value={phone} type="text" onChange={handleChange} />
      <br />
      <input type="submit" />
    </form>
  );
}
