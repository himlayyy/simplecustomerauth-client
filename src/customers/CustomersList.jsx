import React from 'react'

function CustomersList({customers, i}) {
    function renderCustomers(){
        return customers.map((customer) =>{
            return <li key={i}>{customer.name}</li>
        });
    }
  return (
    <div>
        <ul>
            {renderCustomers()}
        </ul>
    </div>
  )
}

export default CustomersList