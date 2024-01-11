import { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";

const Portfolio = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [crypto, setCrypto] = useState("");
  const [amount, setAmount] = useState("");
  const [cryptos, setCryptos] = useState([]);


  
  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/list")
      .then((response) => {
        setCryptos(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add the transaction to the portfolio
    // You need to replace this with your own logic
    console.log(`Adding ${amount} of ${crypto} to the portfolio`);
    closeModal();
  };

  

  return (
    <div>
      <button onClick={openModal}>Add Transaction</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Add Transaction</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Crypto:
            <select value={crypto} onChange={(e) => setCrypto(e.target.value)}>
              {cryptos.map((crypto) => (
                <option key={crypto.id} value={crypto.id}>
                  {crypto.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Amount:
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
          <button type="submit">Add</button>
        </form>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default Portfolio;
