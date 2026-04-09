import TelegramBot from "node-telegram-bot-api";
import { START_COMMAND } from "../constants";
import { LOCALIZATIONS, REST_WORLD_CODE } from "../i18n";

export const listenToStartCommand = (bot: TelegramBot) => {
    bot.onText(new RegExp(`/${START_COMMAND}`), (msg) => {
        const languageCode = msg.from?.language_code || REST_WORLD_CODE;
        const i18n = LOCALIZATIONS[languageCode][START_COMMAND];

        bot.sendMessage(msg.chat.id, i18n.commandText, {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: i18n.portfolio,
                            web_app: { url: "https://naportfolio.space/" }
                        }
                    ],
                    [
                        {
                            text: i18n.itBlog,
                            web_app: { url: "https://nablog.tech/" }
                        }
                    ],
                    [
                        {
                            text: i18n.inAppChat,
                            url: "https://github.com/orgs/INApp-team/repositories"
                        }
                    ],
                    [
                        {
                            text: i18n.webCompiler,
                            url: "https://github.com/aver77/Web-compiler"
                        }
                    ],
                    [
                        {
                            text: i18n.aiChat,
                            url: "https://github.com/aver77/hashbon-task"
                        }
                    ],
                    [
                        {
                            text: i18n.insuranceApp,
                            url: "https://github.com/aver77/p-24-dubai"
                        }
                    ],
                    [
                        {
                            text: i18n.hookahStore,
                            web_app: { url: "https://silk-way-aver77s-projects.vercel.app/" }
                        }
                    ],
                    [
                        {
                            text: i18n.oldPortfolio,
                            url: "https://github.com/aver77/next-portfolio"
                        }
                    ]
                ]
            }
        });
    });
};
