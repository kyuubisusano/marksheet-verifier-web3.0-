
import React, { useEffect, useState } from 'react';
import hf from './hf.js';
import web3 from './web3.js';

const Address = process.env.REACT_APP_ADDRESS;
const RpcHttpUrl = process.env.REACT_APP_RPC_HTTPURL;
const web3 = new Web3(new Web3.provider.HttpProvider(RpcHttpUrl));

function Main(props){
    return(
        <div>
            [Address]
        </div>
    )
}

export default Main;