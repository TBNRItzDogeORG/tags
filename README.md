# @tbnritzdoge/tags

Small tag parser based on [bread-tags](https://github.com/Soumil07/bread-tags).
```js
const { Event } = require("klasa");
const Parser = require("@tbnritzdoge/tags");
module.exports = class extends Event {
  constructor(...args) {
    super(...args, {
      enabled: true,
      once: false,
    });
  }

  async run(msg) {
    if (!msg.guild) return null;
    /* Define wether the tag exists or not here */
    const parsedTag = await this.parser.parse(tag[1], {
      args: msg.content.slice(msg.prefixLength).trim().split(/\s+/).slice(1),
      user: msg.author,
      guild: msg.guild,
      channel: msg.channel,
      member: msg.member,
    });
    return msg.send(parsedTag);
  }

  async init() {
    this.parser = new Parser();
  }
};
```
This example is using the klasa bot framework.