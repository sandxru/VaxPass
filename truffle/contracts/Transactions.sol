// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract Transactions{
    mapping(uint => transaction)public  transactions;
    uint public numTransactions;

    struct transaction{
        string txHash;
        string txType; // add or delete
        string accountAdress;

    }
    function addTransaction(string memory _txHash,string memory _txtype,string memory _account) public {
        
        transactions[numTransactions]=transaction(_txHash,_txtype,_account);
        numTransactions++;

    }
    function getTransactionsCount() public returns(uint){ return numTransactions;}
    function getTransactions(uint index) 
    payable 
    public
     returns(
         string[] memory,
         string[] memory,
         string[] memory
          )
         { 
string[] memory Hashes;
string[] memory Types;
string[] memory Accounts;

for(uint i=0;i<numTransactions;i++) {
    transaction memory obj =transactions[index];
    Hashes[i]=obj.txHash;
    Types[i]=obj.txType;
    Accounts[i]= obj.accountAdress;

}
return (Hashes,Types,Accounts);


    }
}