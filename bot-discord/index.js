const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const dotenv = require('dotenv');

dotenv.config();

const menu = ["ข้าวผัดหมูกรอบ","กระเพราหมูกรอบ","หมูกรอบผัดพริกแกง","ไข่เจียวหมูกรอบ","คะน้าหมูกรอบ","ผัดไทยหมูกรอบ","ข้าวหน้าหมูกรอบ","ผัดพริกเกลือหมูกรอบ","ข้าวหมูกรอบทอดน้ำปลา","ข้าวหมูกรอบแกงกะหรี่"]

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
  if (interaction.commandName === 'menu') {
    await interaction.reply(menu[Math.floor(Math.random() * menu.length)]);
  }
});

client.login(process.env.TOKEN);