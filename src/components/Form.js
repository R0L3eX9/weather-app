import React from 'react';
import './Form.css';

const Form = (dataSetter) => {
  const key = process.env.REACT_APP_URI;
  const BASE_URL = 'https://api.weatherbit.io/v2.0/forecast/daily?';

  const handleSubmit = (event) => {
    if(event.key === 'Enter') {
      console.log(event.target.value);
      fetch(`${BASE_URL}&city=${event.target.value}&key=${key}`)
      .then(res => res.json())
      .then(result => dataSetter.dataSetter(result))
      .catch(err => console.log(err));
      event.target.value = ''
    }
  }

  return (
    <div className="search-form" >
      <input
        className="input-form"
        type="text"
        placeholder="Search..."
        onKeyPress={handleSubmit}
      />
    </div>
  );
};

export default Form;
