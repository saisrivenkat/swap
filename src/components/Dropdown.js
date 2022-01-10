import React from 'react';
import { networks } from '../networks';

const Dropdowm = () => {
  const [network, setnetwork] = React.useState('ethereum')
  const [error, seterror] = React.useState('');
  const handlechange = (e) => {
    setnetwork(e.target.value);
    window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks[e.target.value]
        }
      ]
    })
      .then(() => console.log("success"))
      .catch((err) => seterror(err.message));
  }
  return (
    <div>
      <select value={network} onChange={(e) => handlechange(e)} >
        <option value="eth">Ethereum</option>
        <option value="polygon">Polygon</option>
        <option value="optimism" >optimism</option>
        <option value="arbitrium">arbitrium</option>
      </select>
    </div >
  )
};
export default Dropdowm;