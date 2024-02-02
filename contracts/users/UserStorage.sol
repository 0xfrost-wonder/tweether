// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract UserStorage {

    mapping (uint => Profile) public profiles;

    
    struct Profile {
        uint id;
        bytes32 username;
    }


    uint lastUserId = 0;

    function createUser (bytes32 _username) public returns (uint){
        lastUserId++;

        profiles[lastUserId] = Profile(lastUserId, _username);
        
        return lastUserId;
    }
    

}