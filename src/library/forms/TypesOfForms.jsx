import React, { useState } from "react";

const TypesOfForms = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Submit");
  };
  return (
    <>
      <h1>React Form</h1>
      <form onSubmit={handleSubmit}>
        {/* LABEL INPUT */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        {/* RADIO BUTTON INPUT */}
        <p>Choose your favorite JS flavor</p>
        <input
          type="radio"
          id="react"
          name="flavor"
          value="react"
          defaultChecked
          onChange={handleChange}
        />
        <label htmlFor="react">React</label>
        <input
          type="radio"
          id="angular"
          name="flavor"
          value="angular"
          onChange={handleChange}
        />
        <label htmlFor="angular">Angular</label>
        <input
          type="radio"
          id="vue"
          name="flavor"
          value="vue"
          onChange={handleChange}
        />
        <label htmlFor="vue">Vue</label>
        <input
          type="radio"
          id="svelte"
          name="flavor"
          value="svelte"
          onChange={handleChange}
        />
        <label htmlFor="svelte">Svelte</label>
        {/* DROPDOWN LIST INPUT */}
        <p>Choose your favorite language program</p>
        <select defaultValue="" name="language" onChange={handleChange}>
          <option value="">---</option>
          <option value="js">Javascript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">Go</option>
          <option value="rb">Ruby</option>
        </select>
        {/* CHECKBOX LIST INPUT */}
        <br />
        <label htmlFor="terms">Agree terms and conditions</label>
        <input
          type="checkbox"
          id="terms"
          name="terms"
          onChange={handleChecked}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
};

export default TypesOfForms;
