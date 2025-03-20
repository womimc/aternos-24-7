const mineflayer = require('mineflayer');
const bot = mineflayer.createBot({
    host: "006evx.aternos.me",
    port: 25565,
    username: "zenXmnDpl",
    version: "1.12.2",
    loadInternalPlugins: false
});
bot.on('spawn', () => {
    console.log("✅ Bot dołączył, wysyłam /trigger afk...");
    bot.chat("/trigger afk");
});
bot.on('error', (err) => console.log(`❌ Błąd: ${err}`));
bot.on('end', () => console.log("⚠️ Bot został rozłączony, próbuję ponownie..."));