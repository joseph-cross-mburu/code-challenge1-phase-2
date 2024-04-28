import React from 'react'; 
import Form from './Form';
import Table from './Table';
import { useState } from 'react';
u



function App() {
  const [formDataInput, setFormInput] = useState([]);

  const handleFormSubmitButton = (formData) => {
    setFormInput([...formDataInput, formData]);
  };

  return (
    <div>
      <header>
        <h1 style={{background:"purple",textAlign:"center"}}>The Royal Bank of Flatiron</h1>
      </header>
      <Form onSubmit={handleFormSubmitButton} />
      <Table formData={formDataInput} />
    </div>
  );
}

export default App