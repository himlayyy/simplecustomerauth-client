import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


function CustomerForm() {
    const [customerName, setCustomerName] = useState("");

    // const navigate = useNavigate();

    async function saveCustomer(e){
        e.preventDefault();
        try{
            const customerData = {
                name: customerName,
            }
            await axios.post("https://simplecustomerauth.herokuapp.com/customer", customerData);
            // await axios.post("http://localhost:5000/customer/",customerData);
        }
        catch(err){
            console.error(err)
        }
    }
  return (
    <div>
        <form onSubmit={saveCustomer}>
            <input type="text" 
            placeholder="Customer name" 
            value={customerName} 
            onChange={(e) => setCustomerName(e.target.value)}/>
            <button type="submit">Save Customer</button>
        </form>
    </div>
  )
}

export default CustomerForm