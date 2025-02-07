import React, { useState, useEffect } from "react";
import web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const ConnectWallet = () => {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const init = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        const Web3 = new web3(provider);
        const accounts = await web3.eth.requestAccounts();
        setAccount(accounts[0]);
      } else {
        console.log("Please install Metamask!");
      }
    };
    init();
  }, []);

  return (
    <ButtonContainer>
      <Button
        variant="contained"
        className="walletButton"
        color="primary"
        onClick={() =>
          window.ethereum.request({ method: "eth_requestAccounts" })
        }
      >
        Connect Wallet
      </Button>
{account && <p>Connected with Account: {account}</p>}

    </ButtonContainer>
  );
};


const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 40px;
  margin-right: 40px;
`;

export default ConnectWallet