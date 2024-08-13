import React from 'react';
import Bot from './rob';

const BotCollection = ({ bots, addToArmy }) => {
  return (
    <div>
      <h2>Bot Collection</h2>
      <div className="bot-collection">
        {bots.map(bot => (
          <Bot key={bot.id} bot={bot} onClick={() => addToArmy(bot)} />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
