import axios from 'axios';
import React, {useEffect, useState} from 'react'
import CustomerForm from './CustomerForm'
import CustomersList from './CustomersList'

function Customers() {
    const [customers, setCustomers] = useState([]);

    async function getCustomers(){
        const customersRes = await axios.get("http://localhost:5000/customer/");
        setCustomers(customersRes.data);
    }

    useEffect(() => {
      getCustomers();    
    }, [customers])
    
  return (
    <div>
        <CustomerForm/>
        <CustomersList customers={customers}/>
    </div>
  )
}

export default Customers