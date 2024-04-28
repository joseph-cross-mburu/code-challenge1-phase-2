// TableComponent.js
import React from 'react';
import search from './search';

function Table({ formData }) {
  return (
    <table >
      <thead style={{textAlign:"center"}}>
        <tr>
          <th>Date</th>
          <br/>
          <th>description</th>
          <br/>
          <th>Category</th>
          <br/>
          <th>amount</th>
          <br/>
        </tr>
      </thead>
      <tbody>
        {formData.filter((formData)=>{
            search.toLowerCase()===""? formData:formData.date.description.category.amount.toLower
        }).map((formData) => (
          <tr key={formData.id}>
            <td>{formData.date}</td>
            <td>{formData.description}</td>
            <td>{formData.category}</td>
            <td>{formData.amount}</td>
          </tr>  
        ))}
        
      </tbody>
    </table>
  );
}

export default Table;