import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';


const chitDetails = {
name: "Chit Fund Name",
prize: "$1000",
amount: "$50",
installment: "12",
participants: "10"
};

const swapRequest = {
user: "x33234",
message: "I hope this message finds you well. I am one of the participants in your chit fund and I wanted to request a swap for this month's chit.\n\nThe reason for my request is that I have been recently diagnosed with a heart condition, and I am not sure if I will be able to manage the prize amount if I win this month's chit. I was wondering if you would be open to swapping this month's chit with me so that I can avoid any potential financial strain.\n\nI completely understand if you are not open to the idea of swapping, but I wanted to reach out and see if we could come to a mutually beneficial arrangement. Please let me know if you have any questions or concerns.\n\nThank you for your time and consideration."
};

const ChitSwap = () => {
const [requestStatus, setRequestStatus] = useState(null);

const handleAcceptRequest = () => {
setRequestStatus('accepted');
};

const handleRejectRequest = () => {
setRequestStatus('rejected');
};

return (
<div>
<Navbar />
<div className="mx-auto w-2/3 mt-24">
<div className="my-4">
<h1 className="text-3xl font-bold text-center mb-4">Congrats, You are
this month's winner!</h1>
<div className="border p-4">
<div className="mb-4">
<p className="text-lg font-semibold">{chitDetails.name}</p>
<p className="text-gray-500">Prize: {chitDetails.prize} | Amount:
{chitDetails.amount} | Installment: {chitDetails.installment} |
Participants: {chitDetails.participants}</p>
</div>
{swapRequest && (
<div className="border p-4 mb-4">
<p className="text-lg font-semibold">{swapRequest.user} has requested
for swapping</p>
<p className="text-gray-500">{swapRequest.message}</p>
<div className="flex justify-end mt-4">
<button className="bg-green-500 text-white font-bold py-2 px-4 rounded
mr-2" onClick={handleAcceptRequest}>Accept Request</button>
<button className="bg-red-500 text-white font-bold py-2 px-4 rounded"
onClick={handleRejectRequest}>Reject Request</button>
</div>
</div>
)}
{requestStatus && (
<div className="border p-4">
<p className="text-lg font-semibold">{requestStatus === 'accepted' ?
'You have accepted the swap request!' : 'You have rejected the swap request.'}</p>
</div>
)}
</div>
</div>
</div>
<div className='bottom-0 absolute'>
<Footer />
</div>
</div>
);
};

export default ChitSwap;
