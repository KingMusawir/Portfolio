import React, { useState } from 'react';
import axios from 'axios';

function Form() {
  const [formData, setFromData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/send-email', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className=' flex flex-col items-center justify-center pt-28'
      id='contactme'
    >
      <h3 className='text-[2.4rem] md:text-[4.8rem]'>
        {'Let’s [Work] together'}
      </h3>
      <p className='text-[1.2rem] md:text-[1.8rem] text-[#727272]'>
        Open to full time, remote jobs or freelance projects
      </p>
      <form className=' flex flex-col gap-8 py-20' onSubmit={handleSubmit}>
        <label>
          <input
            type='text'
            name='name'
            placeholder='Your  name'
            required
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type='email'
            name='email'
            placeholder='Your  email'
            required
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <textarea
            name='message'
            placeholder='Your  message'
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </label>
        <button
          type='submit'
          className='bg-secondary p-4 rounded-3xl text-[1.4rem] md:text-[2rem]'
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Form;
