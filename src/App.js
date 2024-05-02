import React from 'react';
import TransactionForm from './TransactionForm';
import TransactionTable from './TransactionTable';
import { useState } from 'react';
import Search from './search';



function App() {
  const [formDataInput, setFormInput] = useState([]);

  const handleFormSubmitButton = (formData) => {
    setFormInput([...formDataInput, formData]);
  };

  return (
    <div>
      <header>
        <h1 style={{ background: "purple", textAlign: "center" }}>The Royal Bank of Flatiron</h1>
        <Search />
      </header>
      <TransactionForm onSubmit={handleFormSubmitButton} />
      <TransactionTable formData={formDataInput} />
    </div>
  );
}

export default App
