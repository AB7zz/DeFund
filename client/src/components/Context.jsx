import React, {useContext, createContext} from 'react'
import {useAddress, useContract, useMetamask, useContractWrite, useContractRead} from '@thirdweb-dev/react'
import {ethers} from 'ethers'
import {EditionMetadataWithOwnerOutputSchema} from '@thirdweb-dev/sdk'
import BigNumber from 'bignumber.js';
import Web3Utils from 'web3-utils'

const StateContext = createContext()

export const StateContextProvider = ({children}) => {
    const {contract} = useContract("0x08bAA308336ED50F7C081bF2493B79FEB50E27a9")
    const {mutateAsync: createChit, isLoading, error} = useContractWrite(contract, 'createChit')
    const {mutateAsync: joinChit} = useContractWrite(contract, 'joinChit')
    const address = useAddress()
    const connect = useMetamask()
    const [chit, setChit] = React.useState({})
    const [chits, setChits] = React.useState([])
    const [participants, setParticipants] = React.useState([])
    const [myChits, setMyChits] = React.useState([])
    const [createdChits, setCreated] = React.useState([])

    const sendETH = async() => {
        try {
            const txResult = await sdk.wallet.transfer("{{wallet_address}}", 0.8);
        } catch (error) {
            console.log(error)
        }
    }
    
    const publishChit = async(form) => {
        console.log(form)
        const month = 5; // May
        const year = 2023;
        
        const date = new Date(year, month - 1);
        const monthUnix = date.getTime() / 1000;
        try{
            const data = await createChit({
                args:[
                    form.title,
                    form.desc,
                    Math.floor(ethers.utils.formatUnits(ethers.utils.parseEther(form.total), "gwei")),
                    Math.floor(ethers.utils.formatUnits(ethers.utils.parseEther(form.inst), "gwei")),
                    monthUnix,
                    form.participants,
                    Date.parse(form.deadline) / 1000
                ]
            })
            window.location.replace('/')
        }catch(error){
            console.log(error)
        }
    }

    const getAllParticipants = async(id) => {
        const zero = new BigNumber(id);
        const zeroAsUint256 = zero.toString(10);
        try {
            if(contract){
                const data = await contract.call('getParticipants', zeroAsUint256)
                console.log(data)
                setParticipants(data)
            } 
        } catch (error) {
            console.log(error)
        }
    }
    
    const getChit = async(id) => {
        const zero = new BigNumber(id);
        const zeroAsUint256 = zero.toString(10);
        console.log(id)
        try {
            if(contract){
                console.log(id)
                const data = await contract.call('chits', zeroAsUint256)
                console.log(data)
                const formattedData = {
                    title: data.title,
                    desc: data.description,
                    total: ethers.utils.formatEther(data.totalAmount.toString()),
                    inst: ethers.utils.formatEther(data.installmentAmount.toString()),
                    period: (new Date(data.installmentPeriod * 1000)).toString(),
                    participants: data.numberOfParticipants.toString(),
                    deadline: (new Date(data.deadline * 1000)).toString(),
                    // allParticipants: {name: data.participants.name, paid: data.participants.paid}
                }
                console.log(formattedData)
                setChit(formattedData)
            } 
        } catch (error) {
            console.log(error)
        }
    }

    const chitsCreated = async() => {
        const totalAmount = "0x64562817"
        // console.log(totalAmount.toNumber())
        try {
            if(contract){
                const chits = await contract.call('getChits')
                const parsedChits = chits.map((data, i) => {
                        const isParticipant = data.participants.some((participant) => {
                            return address.toLowerCase() === participant.wallet.toLowerCase();
                        })
                        if(isParticipant && data.creator.toLowerCase() === address.toLowerCase()){
                            return({
                                id: i,
                                by: data.creator,
                                title: data.title,
                                desc: data.description,
                                total: ethers.utils.formatEther(data.totalAmount.toString()),
                                inst: ethers.utils.formatEther(data.installmentAmount.toString()),
                                period: new Date(data.installmentPeriod * 1000),
                                participants: data.numberOfParticipants.toString(),
                                deadline: new Date(data.deadline * 1000)
                            })
                        }else{
                            return({
                                id: i,
                                by: '',
                                title: 'none',
                                desc: '',
                                total: '',
                                inst: '',
                                period: '',
                                participants: '',
                                deadline: ''
                            })
                        }
                    }
                );
                setCreated(parsedChits)
                // console.log(parsedChits)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getMyChits = async() => {
        const totalAmount = "0x64562817"
        // console.log(totalAmount.toNumber())
        try {
            if(contract){
                const chits = await contract.call('getChits')
                const parsedChits = chits.map((data, i) => {
                        const isParticipant = data.participants.some((participant) => {
                            return address.toLowerCase() === participant.wallet.toLowerCase();
                        })
                    
                        if(isParticipant && data.creator.toLowerCase() !== address.toLowerCase()){
                            return({
                                id: i,
                                by: data.creator,
                                title: data.title,
                                desc: data.description,
                                total: data.totalAmount ? ethers.utils.formatEther(data.totalAmount.toString()) : '0.5',
                                inst: data.installmentAmount ? ethers.utils.formatEther(data.installmentAmount.toString()) : '0.1',
                                period: new Date(data.installmentPeriod * 1000),
                                participants: data.numberOfParticipants.toString(),
                                deadline: new Date(data.deadline * 1000)
                            })
                        }else{
                            return({
                                id: i,
                                by: '',
                                title: 'none',
                                desc: '',
                                total: '',
                                inst: '',
                                period: '',
                                participants: '',
                                deadline: ''
                            })
                        }
                    }
                );
                setMyChits(parsedChits)
                // console.log(parsedChits)
            }
        } catch (error) {
            console.log(error)
        }
    }


    const getAllChits = async() => {
        try {
            if(contract){
                const chits = await contract.call('getChits')
                const parsedChits = chits.map((data, i) => {
                        const isParticipant = data.participants.some((participant) => {
                            return address.toLowerCase() === participant.wallet.toLowerCase();
                        })
                        if(!isParticipant){
                            return({
                                id: i,
                                by: data.creator,
                                title: data.title,
                                desc: data.description,
                                total: ethers.utils.formatEther(data.totalAmount.toString()),
                                inst: ethers.utils.formatEther(data.installmentAmount.toString()),
                                period: new Date(data.installmentPeriod * 1000),
                                participants: data.numberOfParticipants.toString(),
                                deadline: new Date(data.deadline * 1000)
                            })
                        }else{
                            return({
                                id: i,
                                by: '',
                                title: 'none',
                                desc: '',
                                total: '',
                                inst: '',
                                period: '',
                                participants: '',
                                deadline: ''
                            })
                        }
                    }
                );
                setChits(parsedChits)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const joinTheChit = async(id) => {
        try {
            const data = await joinChit({
                args:[
                    id
                ]
            })
            console.log(data)
        } catch (error) {
            console.log(error)
            window.alert(error)
        }
    }

    return(
        <StateContext.Provider value={{
            connect,
            address,
            publishChit,
            joinTheChit,
            getChit,
            getAllParticipants,
            getAllChits,
            chit,
            chits,
            getMyChits,
            getChit,
            myChits,
            createdChits,
            chitsCreated,
            participants,
            sendETH
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)