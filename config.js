

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://noahland:noahland@noahlandmusic.06xhocd.mongodb.net/?retryWrites=true&w=majority&appName=noahlandmusic",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/efq26f9Q",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "noahland",
      password: "jmlitelavalink",
      host: "46.202.82.164 ",
      port:  1027,
      secure: false
    }
  ]
}
