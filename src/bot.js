const TelegramBot = require("node-telegram-bot-api");
const { initServer } = require("./server");

initServer();

const token = process.env.BOT_TOKEN;
if (!token) {
    console.error("BOT_TOKEN не найден!");
    process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });
console.log("Bot started ✅");

// обработка команды /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, "🔗 My websites", {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "🌐 Portfolio",
                        url: "https://naportfolio.space/"
                    }
                ],
                [
                    {
                        text: "✍️ Blog about IT",
                        url: "https://nablog.tech/"
                    }
                ],
                [
                    {
                        text: "💬 INApp Chat [source code]",
                        url: "https://github.com/orgs/INApp-team/repositories"
                    }
                ],
                [
                    {
                        text: "⚙️ Web Compiler [source code]",
                        url: "https://github.com/aver77/Web-compiler"
                    }
                ],
                [
                    {
                        text: "🤖️ AI Chat [source code]",
                        url: "https://github.com/aver77/hashbon-task"
                    }
                ],
                [
                    {
                        text: "🛡️️ Insurance App [source code]",
                        url: "https://github.com/aver77/p-24-dubai"
                    }
                ],
                [
                    {
                        text: "😮‍💨 Hookah store",
                        url: "https://silk-way-aver77s-projects.vercel.app/"
                    }
                ],
                [
                    {
                        text: "💼 Old portfolio on Next.js [source code]",
                        url: "https://github.com/aver77/next-portfolio"
                    }
                ]
            ]
        }
    });
});
