import web3 from './web3.js';

const address = '0x5e8dfc57571495ef14683d4fd5159315782c8121';

const abi = [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_rno",
                    "type": "string"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_data",
                    "type": "uint256[]"
                }
            ],
            "name": "checkMsHash",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_rno",
                    "type": "string"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_data",
                    "type": "uint256[]"
                }
            ],
            "name": "createMarksheet",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_rno",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_tmarks",
                    "type": "uint256"
                }
            ],
            "name": "getHash",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256[]",
                    "name": "_data",
                    "type": "uint256[]"
                }
            ],
            "name": "getTotalSum",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "name": "hashTable",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];

// @js-ignore
export default new web3.eth.Contract(abi, address);