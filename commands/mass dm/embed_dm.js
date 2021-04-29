
const Discord = require("discord.js")
const whitelist = require("../../whitelist.json")
const color = require("./config.json")

module.exports.execute = async (client, message) => {

  if(message.author.id !== whitelist.id && message.author.id !== whitelist.id2) return message.reply("You are not Whitelisted.")

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

        const Embed = new Discord.MessageEmbed()
        .setDescription(title)
        .setTimestamp()
        .setColor(config.color)

        message.guild.members.cache.forEach(member => {
          if (member.id !== client.user.id && !member.user.bot) member.send(Embed).catch(() => {});
        });

      } else timedOut = true

    if (timedOut)
    channel.send('Command timed out. Cancelled.')

}



module.exports.help = {
    name: "dmembed",
    aliases: [],
    category: "MassDM",
    usage: "<message>",
    description: "Send an embedded message to all users."
}
