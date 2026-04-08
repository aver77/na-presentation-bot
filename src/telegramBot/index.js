const TelegramBot = require("node-telegram-bot-api");
const { handleCommands } = require("./handleCommands");

const token = process.env.BOT_TOKEN;
if (!token) {
    console.error("BOT_TOKEN NOT FOUND! ❌");
    process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });
console.log("BOT STARTED! ✅");

handleCommands(bot);
