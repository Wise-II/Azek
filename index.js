// first we import the modules (no shit sherlock)
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Client, Events, GatewayIntentBits } from 'discord.js';

//end import, for now... 
//spawns a new client instance
const client = new Client ({intents: [GatewayIntentBits.Guilds] });

//when client successfully executes line 7, the following code should only run once.
client.once(Events.ClientReady, (readyClient)=> {
    console.log(`ready! Signed in as ${readyClient.user.tag}`)
});

client.login(process.env.DISCORD_TOKEN);