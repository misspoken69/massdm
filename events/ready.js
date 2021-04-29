const Discord = require("discord.js")
const { client, config } = require("../index.js")

client.on("ready", async () => {
  console.clear()
  console.log("███╗░░░███╗░█████╗░░██████╗░██████╗  ██████╗░███╗░░░███╗")
  console.log("████╗░████║██╔══██╗██╔════╝██╔════╝  ██╔══██╗████╗░████║")
  console.log("██╔████╔██║███████║╚█████╗░╚█████╗░  ██║░░██║██╔████╔██║")
  console.log("██║╚██╔╝██║██╔══██║░╚═══██╗░╚═══██╗  ██║░░██║██║╚██╔╝██║")
  console.log("██║░╚═╝░██║██║░░██║██████╔╝██████╔╝  ██████╔╝██║░╚═╝░██║")
  console.log("╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═════╝░╚═════╝░  ╚═════╝░╚═╝░░░░░╚═╝")
  console.log("—————————————————————————————————————————————————————")
  console.log("[-] Thanks for using Misspoken's Mass DM Bot!")
  console.log("[-] If you like it, maybe leave a star and follow?")
  console.log("[-] It would help a lot considering I am making more!")
  console.log("[-] Don't remove credits or you'll have legal issues.")
  console.log("—————————————————————————————————————————————————————")
})

client.on("ready", async () => {
client.user.setActivity("www.fearmisspoken.tk", {
  type: "STREAMING",
  url: "https://www.twitch.tv/kysmisspoken"
});
