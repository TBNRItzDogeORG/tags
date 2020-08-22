// Copyright (c) Soumil07, BSD-3 License
const { regex } = require('../util/utils.js');
module.exports = {
  name: "sendchannel",
  aliases: ["channelsend"],
  run: (ctx) => {
    const [id, message] = ctx.value;
    if (!id || !message)
      throw "You must provide a valid channel ID and content.";
    let channel;
    if (regex.channel.test(id)) {
      channel = ctx.guild.channels.cache.get(id);
    } else {
      channel = ctx.guild.channels.cache.find((chan) => chan.name === id);
    }
    if (!channel || channel.type === "voice")
      throw "An invalid channel or channel type was specified.";
    try{
      return channel.send(message);
    }catch(err){
      throw "I do not have permissions to send messages to that channel.";
    }
  },
};
