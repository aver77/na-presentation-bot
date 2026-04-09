import type TelegramBot from "node-telegram-bot-api";
import { PORTFOLIO_COMMAND } from "../constants";
import { LOCALIZATIONS, REST_WORLD_CODE } from "../i18n";

export const listenToPortfolioCommand = (bot: TelegramBot) => {
    bot.onText(new RegExp(`/${PORTFOLIO_COMMAND}`), (msg) => {
        const languageCode = msg.from?.language_code || REST_WORLD_CODE;
        const i18n = LOCALIZATIONS[languageCode][PORTFOLIO_COMMAND];

        bot.sendMessage(msg.chat.id, i18n.commandText, {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: i18n.portfolio,
                            web_app: { url: "https://naportfolio.space/" }
                        }
                    ]
                ]
            }
        });
    });
};
