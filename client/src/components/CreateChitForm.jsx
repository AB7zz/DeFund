import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useStateContext } from './Context';
import { Web3Button } from '@thirdweb-dev/react';

const CreateChitForm = () => {
  const {publishChit} = useStateContext()
  const [form, setForm] = React.useState({
    title: '',
    desc: '',
    total: '',
    inst: '',
    period: '',
    participants: '',
    deadline: ''
  })

  const handleFormChange = (e) => {
    setForm({...form, [e.target.name] : e.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    publishChit(form)
  };

  return (
    <div>
        <Navbar />
        <div className="flex justify-center">
      <div className="w-1/4 text-center border-r-3 pr-5">
        <h3 className="text-xl font-bold mb-4 mt-20">Rules for Chit Fund</h3>
        <ul className="list-disc text-left">
          <li>One person is selected every month to receive the funds</li>
          <li>The amount is equally divided among all the participants</li>
          <li>The person who receives the funds is determined by a random draw</li>
          <li>Participants are required to pay a fixed amount every month</li>
          <li>Participants cannot withdraw from the chit until the end of the term</li>
        </ul>
      </div>
      <div className="w-2/3 pl-4 mt-20">
        <h3 className="text-xl font-bold mb-4 text-blue-800">Create a New Chit</h3>
        <form>
          <label htmlFor="title" className="block font-bold mb-2">Title:</label>
          <input onChange={(e) => handleFormChange(e)} type="text" id="title" name="title" placeholder='Enter title' className="bg-slate-50 w-full mb-4 p-2 border-none border-gray-400 rounded" />

          <label htmlFor="description" className="block font-bold mb-2">Description:</label>
          <textarea onChange={(e) => handleFormChange(e)}  id="description" placeholder='Enter description' name="desc" className="w-full mb-4 p-2 border-none bg-slate-50 border-gray-400 rounded" />

          <label htmlFor="installmentAmount" className="block font-bold mb-2">Total Amount (in ETH)</label>
          <input onChange={(e) => handleFormChange(e)} type="number" id="totalAmount" placeholder='eg: 0.5' name="total" className="w-full mb-4 p-2 border-none bg-slate-50 border-gray-400 rounded" />

          <label htmlFor="installmentAmount" className="block font-bold mb-2">Installment Amount (in ETH)</label>
          <input onChange={(e) => handleFormChange(e)} type="number" id="installmentAmount" placeholder='eg: 0.1' name="inst" className="w-full mb-4 p-2 border-none bg-slate-50 border-gray-400 rounded" />

          <label htmlFor="period" className="block font-bold mb-2">Period (in months):</label>
          <input onChange={(e) => handleFormChange(e)} type="number" id="period" placeholder='eg: 2' name="period" className="w-full mb-4 p-2 border-none bg-slate-50 border-gray-400 rounded" />

          <label htmlFor="participants" className="block font-bold mb-2">Number of Participants:</label>
          <input onChange={(e) => handleFormChange(e)} type="number" id="participants" placeholder='eg: 5' name="participants" className="w-full mb-4 p-2 border-none bg-slate-50 border-gray-400 rounded" />

          <label htmlFor="deadline" className="block font-bold mb-2">Deadline:</label>
          <input onChange={(e) => handleFormChange(e)} type="date" id="deadline"  name="deadline" className="w-full mb-4 p-2 border-none bg-slate-50 border-gray-400 rounded" />

          <button onClick={handleSubmit} type="submit" className="mb-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Chit</button>
        </form>
      </div>
    </div>
     <Footer />
    </div>
  );
};

export default CreateChitForm;
