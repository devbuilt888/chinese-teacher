import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";

const tokenAddress = "0x24e39d3066d639f548c29a348cb31126c5f46f0f";

const tokenABI = [];

const CheckToken = () => {
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const tokenCheck = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        const web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts();
        const contract = new web3.eth.Contract(tokenABI, tokenAddress);
        const balance = await contract.methods.balanceOf(accounts[0]).call();
        setHasToken(balance > 0);
      }
    };
    tokenCheck();
  }, []);

  return (
    <div>
      {hasToken ? (
        <TokenAlert>You have access to this content</TokenAlert>
      ) : (
        <TokenAlert>You do not have access</TokenAlert>
      )}
    </div>
  );
};

const TokenAlert = styled.div`
    background-color: navyBlue;
    color: white;
    padding: 20px;
    border-radius: 5px;
    margin-top: 20px;
    `;

export default CheckToken;
