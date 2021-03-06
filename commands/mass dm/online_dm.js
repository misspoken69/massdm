const whitelist = require("../../whitelist.json")

module.exports.execute = async (client, message) => {

  if(message.author.id !== whitelist.id && message.author.id !== whitelist.id2) return message.reply("You are not whitelisted.")

    let timedOut = false
  
    const { channel, author } = message
  
    const isFromAuthor = m => m.author.id == author.id
  
    const options = {
      max: 1,
      time: 60 * 1000
    }
  
    await channel.send('What message would you like to send?')
    const firstColl = await channel.awaitMessages(isFromAuthor, options)
  
    if (firstColl.size > 0) {
      const title = firstColl.first().content

      message.guild.members.cache.forEach(member => {
        if (member.id !== client.user.id && member.presence.status === 'online' && !member.user.bot) member.send(title).catch(() => {});
      });

      } else timedOut = true

    if (timedOut)
    channel.send('Command timed out. Cancelled.')

}



module.exports.help = {
    name: "dmonline",
    aliases: [],
    category: "MassDM",
    usage: "<message>",
    description: "Send a message to all online members."
}
