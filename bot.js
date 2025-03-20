const mineflayer = require('mineflayer');
const bot = mineflayer.createBot({
    host: "example.com",
    port: 25565,
    username: "Womi-Bot",
    version: "1.12.2",
    loadInternalPlugins: false
});
bot.on('spawn', () => {
    console.log("✅ Joined!");
});
bot.on('error', (err) => console.log(`❌ Error: ${err}`));
