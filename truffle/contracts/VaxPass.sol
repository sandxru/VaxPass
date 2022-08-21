// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract VaxPass {
    string[] items;

    function addItem(string memory item) public {
        items.push(item);
    }

    function getItems() public view returns (string[] memory) {
        return items;
    }
}
