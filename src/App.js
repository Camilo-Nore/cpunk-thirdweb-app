import './css/App.css';
import { Header } from './components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Punklist } from './components/Punklist';
import { Main } from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0xD1DA9274A85E6027FCE5eCed3A976F75a79CaCc5&order_direction=asc'
      );
      setPunkListData(openseaData.data.assets);
    };
    getMyNfts();
  }, []);
  return (
    <div className='App'>
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <Punklist
            punklistData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
