import React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useStateContext } from "./Context";
import { useLocation, useNavigate } from 'react-router-dom';

// const chit = {
// title: "Chit 192",
// description: "Sample.",
// totalAmount: 50000,
// installmentAmount: 5000,
// period: 30,
// numParticipants: 10,
// deadline: "2023-06-01",
// paid: [
// { name: "0x12321..", paid: true },
// { name: "0x12354..", paid: true },
// { name: "0x12312..", paid: true },
// { name: "0x12311..", paid: true },
// { name: "0x12356..", paid: false },
// { name: "0x12389..", paid: false },
// { name: "0x12323..", paid: false },
// { name: "0x12323..", paid: false },
// { name: "0x12353..", paid: false },
// { name: "0x12233..", paid: false },
// ],
// };

function ChitDetails() {
// const { title, description, totalAmount, installmentAmount, period, numParticipants, deadline, paid } = chit;

const location = useLocation();
const navigate = useNavigate();
const {getChit, chit, getAllParticipants, participants} = useStateContext()
React.useEffect(() => {
    const pathname = location.pathname;
    const id = pathname.split("/chit/")[1];
    // console.log(id)
    getChit(id)
    getAllParticipants(id)
}, [])

return (
<div>
<Navbar />
<div className="flex flex-col items-center justify-center mt-12">
<div className="bg-white rounded-lg p-8 max-w-lg w-full text-center">
{chit && <><h2 className="text-lg font-bold mb-4">{chit.title}</h2>
<p className="text-gray-500 text-sm mb-4">{chit.desc}</p>
<div className="grid grid-cols-2 gap-4 mb-4">
<div className="bg-gray-100 p-4 rounded-lg">
<p className="text-lg font-bold text-gray-800 mb-2">{chit.total}</p>
<p className="text-gray-500 text-sm">Total Amount</p>
</div>
<div className="bg-gray-100 p-4 rounded-lg">
<p className="text-lg font-bold text-gray-800 mb-2">{chit.inst}</p>
<p className="text-gray-500 text-sm">Installment Amount</p>
</div>
<div className="bg-gray-100 p-4 rounded-lg">
<p className="text-lg font-bold text-gray-800 mb-2">{chit.period}</p>
<p className="text-gray-500 text-sm">Period (days)</p>
</div>
<div className="bg-gray-100 p-4 rounded-lg">
<p className="text-lg font-bold text-gray-800 mb-2">{chit.participants}</p>
<p className="text-gray-500 text-sm">Number of Participants</p>
</div>
</div>
<p className="text-gray-500 text-sm mb-2">Deadline: {chit.deadline}</p>
<h3 className="text-lg font-bold mb-2">Payments</h3>
<ul className="list-disc pl-4">
{participants && participants.map(({ wallet, paid }, i) => (
    <li className="flex items-center mb-2" key={i}>
        {paid ? (
            <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
        ) : (
            <CheckCircleIcon className="w-4 h-4 text-gray-500 mr-2" />
        )}
        {wallet}
    </li>
    ))}
</ul>
</>
}
</div>
</div>
<Footer />
</div>
);
}

export default ChitDetails;