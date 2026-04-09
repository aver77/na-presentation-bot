import TelegramBot from "node-telegram-bot-api";
import { handleCommands } from "./commands";

export const launchTelegramBot = () => {
    const token = process.env.BOT_TOKEN;
    if (!token) {
        console.error("BOT_TOKEN NOT FOUND!  ❌");
        process.exit(1);
    }

    const bot = new TelegramBot(token, { polling: true });
    console.log("BOT STARTED! ✅");

    handleCommands(bot);
};
