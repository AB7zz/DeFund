// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract DeFund {
    
    struct ChitFund {
        address creator;
        string title;
        string description;
        uint256 totalAmount;
        uint256 amountCollected;
        uint256 participantNum;
        uint256 deadline;
        address[] participants;
        address[] paidParticipants;
        uint256[] payments; 
        address[] unpaidParticipants;
    }

    mapping(uint256 => ChitFund) public ChitFunds;

    uint256 public numberOfChitFunds = 0;

    function createChitFunds(
        address _creator, 
        string memory _title, 
        string memory _description, 
        uint256 _totalAmount, 
        uint256 _participantNum,   
        uint256 _deadline
        ) public returns (uint256) {

        ChitFund storage chitFund = ChitFunds[numberOfChitFunds];

        require(chitFund.deadline < block.timestamp, "Deadline must be in the future");

        chitFund.creator = _creator;
        chitFund.title = _title;
        chitFund.description = _description;
        chitFund.totalAmount = _totalAmount;
        chitFund.participantNum = _participantNum;
        chitFund.deadline = _deadline;
        numberOfChitFunds++;

        return numberOfChitFunds - 1;
        
    }

    function joinChitFund(uint256 _id) public payable {

        
        ChitFund storage chitFund = ChitFunds[_id];
        uint256 amount = chitFund.totalAmount / chitFund.participantNum;

        chitFund.amountCollected += msg.value;
        chitFund.participants.push(msg.sender);
        chitFund.paidParticipants.push(msg.sender);

        (bool sent, ) = payable(chitFund.creator).call{value: amount}("");
        if (sent) {
            chitFund.amountCollected = chitFund.amountCollected + amount;
        }

    }

    function getParticipants(uint256 _id)
        public
        view
        returns (address[] memory, uint256[] memory)
    {
        return (ChitFunds[_id].participants, ChitFunds[_id].payments);
    }

    function getChitFunds() public view returns (ChitFund[] memory) {
        ChitFund[] memory allChitFunds = new ChitFund[](numberOfChitFunds);

        for (uint256 i = 0; i < numberOfChitFunds; i++) {
            ChitFund storage item = ChitFunds[i];
            allChitFunds[i] = item;
        }
        return allChitFunds;
    }

}