import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

const App = () => {
    // i put state for all bots 
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
//i now do fetching of my data
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(err => console.error(err));
  }, []);

  // Function to add a bot  if it's not already there
  const addToArmy = (bot) => {
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };
  // Function that removes a bot 
  const removeFromArmy = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };
//i will introduce function to permanently delete a bot everywhere
  const dischargeBot = (bot) => {
    fetch(`http://localhost:8001/bots/${bot.id}`, { method: 'DELETE' })
      .then(() => {
        setArmy(army.filter(b => b.id !== bot.id));
        setBots(bots.filter(b => b.id !== bot.id));
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Bot Army</h1>
      <YourBotArmy army={army} removeFromArmy={removeFromArmy} dischargeBot={dischargeBot} />
      <BotCollection bots={bots} addToArmy={addToArmy} />
    </div>
  );
};

export default App;
