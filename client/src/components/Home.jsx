import React from 'react'
import Navbar from './Navbar'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Footer from './Footer';
import { useStateContext } from './Context';
import { useContractRead } from '@thirdweb-dev/react';
const MyChit = ({id, title, desc, people, amount, by, initial, paid}) => {
    const {sendETH} = useStateContext()
    return (
        <>
        {title !== "none" ? <div className="sm:w-[288px] w-full rounded-[15px] bg-slate-50 cursor-pointer">
            <div className="flex p-4">
                <div className=''>
                    <div className="block">
                        <Link to={`/chit/${id}`}><h3 className="font-epilogue font-semibold text-xl text-[#505050] text-left leading-[26px] truncate">{title}</h3></Link>
                        <p className="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] truncate">{desc}</p>
                    </div>

                    <div className="flex justify-between flex-wrap mt-[15px] gap-2">
                        <div className="flex flex-col">
                            <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">{amount} ETH</h4>
                            <p className="mt-[3px] font-epilogue font-normal text-md leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Total: {amount*people}</p>
                            <p className="mt-[3px] font-epilogue font-normal text-md leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Initial: {initial ? <span className='text-green-500'><CheckCircleIcon className='text-green-500' /></span>: <span className='text-red-500'><CancelIcon className='text-red-500' /></span>}</p>

                        </div>
                        <div className="flex flex-col items-center">
                            <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]"><PeopleAltIcon className='text-md' /> {people}</h4>
                        </div>
                    </div>

                    <div className="flex justify-between w-[100%] items-center mt-[20px] gap-[12px]">
                        <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">by <span className="text-[#b2b3bd]">{by.slice(0, 6)}...${by.slice(-4)}</span></p>
                        {paid ? <button className='hover:bg-blue-900 bg-blue-300 text-white px-3 rounded'>Pay</button> : <button onClick={sendETH} className='hover:bg-blue-900 bg-blue-800 text-white px-3 rounded'>Pay</button>}
                    </div>
                </div>
            </div> 
        </div>
        : <></>}</>
    )
}

function Card({id, clickJoin, title, desc, people, amount, by, initial}){
    return (
        <>
        {title !== "none" ? <div className="sm:w-[288px] w-[100%] rounded-[15px] bg-slate-50 cursor-pointer">
            <div className="flex p-4">
                <div className=''>
                    <div className="block">
                        <Link to={`/chit/${id}`}><h3 className="font-epilogue font-semibold text-xl text-[#505050] text-left leading-[26px] truncate">{title}</h3></Link>
                        <p className="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] truncate">{desc}</p>
                    </div>

                    <div className="flex justify-between flex-wrap mt-[15px] gap-2">
                        <div className="flex flex-col">
                            <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">{amount} ETH</h4>
                            <p className="mt-[3px] font-epilogue font-normal text-md leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Total: {amount*people}</p>
                            <p className="mt-[3px] font-epilogue font-normal text-md leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Initial: {initial ? <span className='text-green-500'><CheckCircleIcon className='text-green-500' /></span>: <span className='text-red-500'><CancelIcon className='text-red-500' /></span>}</p>

                        </div>
                        <div className="flex flex-col items-center">
                            <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]"><PeopleAltIcon className='text-md' /> {people}</h4>
                        </div>
                    </div>

                    <div className="flex justify-between w-[100%] items-center mt-[20px] gap-[12px]">
                        <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">by <span className="text-[#b2b3bd]">{by.slice(0, 6)}...${by.slice(-4)}</span></p>
                        <button onClick={() => clickJoin(id)} className='hover:bg-blue-900 bg-blue-800 text-white px-3 rounded'><AddIcon/> Join</button>
                    </div>
                </div>
            </div>
        </div> : 
        <></>
        }
        </>
    )
}

const Home = () => {
    // const [chit, setChit] = React.useState()
    const {getChit, getAllParticipants, joinTheChit, getAllChits, chits, myChits, getMyChits, chitsCreated, createdChits} = useStateContext()
    React.useEffect(() => {
        getAllChits()
        getMyChits()
        chitsCreated()
    }, [chits])
    const clickJoin = () => {
        joinTheChit(0)
    }
  return (
    <div>
        <Navbar />
        <div className='w-screen mt-10'>
            <h1 className='text-2xl px-10 py-10 font-bold'>All Chits</h1>
            <div className='flex justify-evenly w-[100%] mt-2'>
                {chits.title !== "none" ? chits.map(post => <Card id={post.id} clickJoin={clickJoin} title={post.title} desc={post.desc} people={post.participants} amount={post.total} by={post.by} initial={post.initialInstallment} />) : <p className='text-center'>None</p>}
            </div>
        </div>
        <div className='w-screen'>
            <h1 className='text-2xl px-10 py-10 font-bold'>My Chits (participant)</h1>
            <div className='flex justify-evenly w-[100%] mt-2'>
                {myChits.title !== "none" ? myChits.map(post => <MyChit id={post.id} title={post.title} desc={post.desc} people={post.people} amount={post.amount} by={post.by} initial={post.initial} paid={post.paid} />) : <p className='text-center text-black'>None</p>}
            </div>
        </div>
        <div className='w-screen'>
            <h1 className='text-2xl px-10 py-10 font-bold'>Chits I Created (creator)</h1>
            <div className='flex justify-evenly w-[100%] mt-2'>
                {createdChits.title !== "none" ? createdChits.map(post => <MyChit id={post.id} title={post.title} desc={post.desc} people={post.people} amount={post.amount} by={post.by} initial={post.initial} paid={post.paid} />) : <p className='text-center'>None</p>}
            </div>
        </div>
        <div className='bottom-0 absolute'>
<Footer />
</div>
    </div>
  )
}

export default Home