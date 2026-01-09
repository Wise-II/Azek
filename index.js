// first we import the modules (no shit sherlock)
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Client, Events, GatewayIntentBits } from 'discord.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//end import, for now... 
//spawns a new client instance
const client = new Client ({intents: [GatewayIntentBits.Guilds] });

//when client successfully executes line 7, the following code should only run once.
client.once(Events.ClientReady, (readyClient)=> {
    console.log(`ready! Signed in as ${readyClient.user.tag}`)
});
//load commands (time to blueball myself)
const commandpaths = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandpaths).filter(f=>f.endsWith('.js'));
for (const file of commandFiles) {
    const command = await import(`file://$filePath`);
    client.command.set(command.data.name, command);

}


client.login(process.env.DISCORD_TOKEN);