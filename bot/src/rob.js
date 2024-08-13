import React from 'react';
//pass props bot:object with bot dtails onclick:will handle add and remove ondischarge:this will discharge item
const Bot = ({ bot, onClick, onDischarge }) => {
  return (
    <div className="bot">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={onClick}>Add/Remove</button>
      {onDischarge && <button onClick={onDischarge} style={{ backgroundColor: 'red' }}>Discharge</button>}
    </div>
  );
};

export default Bot;



