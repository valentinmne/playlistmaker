import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
import fetch from 'node-fetch';

dotenv.config()


const client = new DiscordJS.Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES
    ],
  })


    client.on('ready', () => {
        console.log('The bot is ready!')
      })
      client.on('messageCreate', (msg) => {
        if (msg.content.startsWith('https://open.spotify.com/track/')) {

          msg.reply({
            content: 'adding to playlist',
          })
        }
      })
  

    client.login(process.env.TOKEN)

