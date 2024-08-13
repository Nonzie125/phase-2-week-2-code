import React from 'react';
import Bot from './rob';

const YourBotArmy = ({ army, removeFromArmy, dischargeBot }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="bot-army">
        {army.map(bot => (
          <Bot key={bot.id} bot={bot} onClick={() => removeFromArmy(bot)} onDischarge={() => dischargeBot(bot)} />
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
