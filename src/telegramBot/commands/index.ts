import TelegramBot from "node-telegram-bot-api";

import { listenToPortfolioCommand } from "./portfolio";
import { listenToStartCommand } from "./start";
import { PORTFOLIO_COMMAND, START_COMMAND } from "../constants";

import { LOCALIZATIONS, REST_WORLD_CODE, RUSSIAN_CODE } from "../i18n";

export const handleCommands = (bot: TelegramBot) => {
    const i18nRu = LOCALIZATIONS[RUSSIAN_CODE];
    const i18nWorld = LOCALIZATIONS[REST_WORLD_CODE];

    bot.setMyCommands(
        [
            {
                command: START_COMMAND,
                description: i18nRu[START_COMMAND].description
            },
            {
                command: PORTFOLIO_COMMAND,
                description: i18nRu[PORTFOLIO_COMMAND].description
            }
        ],
        {
            language_code: RUSSIAN_CODE
        }
    );
    bot.setMyCommands([
        {
            command: START_COMMAND,
            description: i18nWorld[START_COMMAND].description
        },
        {
            command: PORTFOLIO_COMMAND,
            description: i18nWorld[PORTFOLIO_COMMAND].description
        }
    ]);

    listenToPortfolioCommand(bot);
    listenToStartCommand(bot);
};
