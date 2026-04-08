const handleCommands = (bot) => {
    bot.onText(/\/start/, (msg) => {
        const chatId = msg.chat.id;

        bot.sendMessage(chatId, "🔗 My projects", {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "🌐 Portfolio",
                            web_app: { url: "https://naportfolio.space/" }
                        }
                    ],
                    [
                        {
                            text: "✍️ Blog about IT",
                            web_app: { url: "https://nablog.tech/" }
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
                            web_app: { url: "https://silk-way-aver77s-projects.vercel.app/" }
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
};

module.exports = {
    handleCommands
};
