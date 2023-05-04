import React from 'react'
import Navbar from './Navbar'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Footer from './Footer';

const MyChit = ({title, desc, people, amount, by, initial, paid}) => {
    return (
        
        <div className="sm:w-[288px] w-full rounded-[15px] bg-slate-50 cursor-pointer">
            <div className="flex p-4">
                <div className=''>
                    <div className="block">
                        <Link to={`/chit/${by}`}><h3 className="font-epilogue font-semibold text-xl text-[#505050] text-left leading-[26px] truncate">{title}</h3></Link>
                        <p className="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] truncate">{desc}</p>
                    </div>

                    <div className="flex justify-between flex-wrap mt-[15px] gap-2">
                        <div className="flex flex-col">
                            <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">₹ {amount}</h4>
                            <p className="mt-[3px] font-epilogue font-normal text-md leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Total: {amount*people}</p>
                            <p className="mt-[3px] font-epilogue font-normal text-md leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Initial: {initial ? <span className='text-green-500'><CheckCircleIcon className='text-green-500' /></span>: <span className='text-red-500'><CancelIcon className='text-red-500' /></span>}</p>

                        </div>
                        <div className="flex flex-col items-center">
                            <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]"><PeopleAltIcon className='text-md' /> {people}</h4>
                        </div>
                    </div>

                    <div className="flex justify-between w-[100%] items-center mt-[20px] gap-[12px]">
                        <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">by <span className="text-[#b2b3bd]">{by}</span></p>
                        {paid ? <button className='hover:bg-blue-900 bg-blue-300 text-white px-3 rounded'>Pay</button> : <button className='hover:bg-blue-900 bg-blue-800 text-white px-3 rounded'>Pay</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Card = ({title, desc, people, amount, by, initial}) => {
    return (
        
        <div className="sm:w-[288px] w-full rounded-[15px] bg-slate-50 cursor-pointer">
            <div className="flex p-4">
                <div className=''>
                    <div className="block">
                        <Link to={`/chit/${by}`}><h3 className="font-epilogue font-semibold text-xl text-[#505050] text-left leading-[26px] truncate">{title}</h3></Link>
                        <p className="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] truncate">{desc}</p>
                    </div>

                    <div className="flex justify-between flex-wrap mt-[15px] gap-2">
                        <div className="flex flex-col">
                            <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">₹ {amount}</h4>
                            <p className="mt-[3px] font-epilogue font-normal text-md leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Total: {amount*people}</p>
                            <p className="mt-[3px] font-epilogue font-normal text-md leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Initial: {initial ? <span className='text-green-500'><CheckCircleIcon className='text-green-500' /></span>: <span className='text-red-500'><CancelIcon className='text-red-500' /></span>}</p>

                        </div>
                        <div className="flex flex-col items-center">
                            <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]"><PeopleAltIcon className='text-md' /> {people}</h4>
                        </div>
                    </div>

                    <div className="flex justify-between w-[100%] items-center mt-[20px] gap-[12px]">
                        <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">by <span className="text-[#b2b3bd]">{by}</span></p>
                        <button className='hover:bg-blue-900 bg-blue-800 text-white px-3 rounded'><AddIcon/> Join</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Home = () => {
    const [posts, setPosts] = React.useState([
        {
            id: 1,
            by: '0xs234safsd23',
            title: 'Title',
            desc: 'Desc',
            people: 15,
            amount: 5000,
            initial: true
        },
        {
            id: 2,
            by: '0xs234safsd23',
            title: 'Title',
            desc: 'Desc',
            people: 15,
            amount: 5000,
            initial: false
        },
        {
            id: 3,
            by: '0xs234safsd23',
            title: 'Title',
            desc: 'Desc',
            people: 15,
            amount: 5000,
            initial: false
        },
        {
            id: 3,
            by: '0xs234safsd23',
            title: 'Title',
            desc: 'Desc',
            people: 15,
            amount: 5000,
            initial: true
        }

    ])

    const [myChits, setMyChits] = React.useState([
        {
            id: 1,
            by: '0xs234safsd23',
            title: 'Title',
            desc: 'Desc',
            people: 15,
            amount: 5000,
            initial: true,
            paid: true
        },
        {
            id: 2,
            by: '0xs234safsd23',
            title: 'Title',
            desc: 'Desc',
            people: 15,
            amount: 5000,
            initial: false,
            paid: false
        },
        {
            id: 3,
            by: '0xs234safsd23',
            title: 'Title',
            desc: 'Desc',
            people: 15,
            amount: 5000,
            initial: false,
            paid: false
        },
        {
            id: 3,
            by: '0xs234safsd23',
            title: 'Title',
            desc: 'Desc',
            people: 15,
            amount: 5000,
            initial: true,
            paid: true
        }
    ])
  return (
    <div className='pb-10'>
        <Navbar />
        <div className='w-screen'>
            <h1 className='text-2xl px-10 py-10 font-bold'>All Chits</h1>
            <div className='flex justify-evenly w-[100%] mt-10'>
                {posts.map(post => <Card title={post.title} desc={post.desc} people={post.people} amount={post.amount} by={post.by} initial={post.initial} />)}
            </div>
        </div>
        <div className='w-screen'>
            <h1 className='text-2xl px-10 py-10 font-bold'>My Chits</h1>
            <div className='flex justify-evenly w-[100%] mt-10'>
                {myChits.map(post => <MyChit title={post.title} desc={post.desc} people={post.people} amount={post.amount} by={post.by} initial={post.initial} paid={post.paid} />)}
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home