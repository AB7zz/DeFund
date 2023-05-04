// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract DeFund {
    struct chitFunds {
        uint256 id;
        string name;
        uint256 amount;
        uint256 duration;
        uint256 totalAmount;
        uint256 monthlyAmount;
        uint256 monthlyInterest;
        uint256 monthlyTotalAmount;
        uint256 monthlyPaidAmount;
        uint256 monthlyPaidInterest;
        uint256 monthlyPaidTotalAmount;
        uint256 monthlyPaidDate;
        uint256 monthlyPaidTime;
        uint256 monthlyPaidStatus;
        uint256 status;
        uint256 createdDate;
        uint256 createdTime;
    }
}