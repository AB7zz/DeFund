import React from 'react';//import { ChatIcon } from '@heroicons/react/outline';
import Navbar from './Navbar';
import Footer from './Footer';




const Feed = () => {
    const chits = [
        {
          id: 1,
          title: 'Chit 1',
          winner: 'John Doe',
          prizeAmount: '$1000',
          period: '6 months',
           // '1 year', '2 years', '3 years', '4 years', '5 years
          participants: 10,
          deadline: '2023-05-05',
        },
        {
          id: 2,
          title: 'Chit 2',
          winner: 'Jane Doe',
          prizeAmount: '$2000',
          period: '6 months',
          participants: 20,
          deadline: '2023-05-04',
        },
      ];
      return (
        <div>
            
            <nav className="bg-white shadow-sm">
          <Navbar />
          </nav>
          <header className="bg-white shadow-sm py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <h1 className="text-3xl font-bold text-gray-900">Winner of this month!</h1>
            </div>
          </header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {chits.map((chit) => (
                <div
                  key={chit.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
            <div className="p-4">
            <h2 className="text-lg font-bold text-gray-900">{chit.title}</h2>
            <p className="mt-2 text-sm text-gray-500">{`Winner: ${chit.winner}`}</p>
            <p className="mt-2 text-sm text-gray-500">{`Prize amount: ${chit.prizeAmount}`}</p>
          <p className="mt-2 text-sm text-gray-500">{`Period: ${chit.period}`}</p>
          <p className="mt-2 text-sm text-gray-500">{`No. of participants: ${chit.participants}`}</p>
          <p className="mt-2 text-sm text-gray-500">{`Deadline: ${chit.deadline}`}</p>
          <button className="mt-4 bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Swap chit
          </button>
        </div>
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <h3 className="text-lg font-bold text-gray-900">Chat with the winner</h3>
          <div className="mt-4 flex space-x-4">
            <input
              type="text"
              className="flex-1 block w-full rounded-md sm:text-sm border-gray-300"
              placeholder="Type your message..."
            />
            <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Send
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
<Footer />
</div>
);
};

export default Feed;
