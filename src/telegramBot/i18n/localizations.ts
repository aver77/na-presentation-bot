import { RUSSIAN_CODE } from "./languageCodes";
import { PORTFOLIO_COMMAND, START_COMMAND } from "../constants";

interface IBaseLocalizationTexts {
    description: string;
    commandText: string;
    portfolio: string;
}

interface IStartLocalizationTexts extends IBaseLocalizationTexts {
    itBlog: string;
    inAppChat: string;
    webCompiler: string;
    aiChat: string;
    insuranceApp: string;
    hookahStore: string;
    oldPortfolio: string;
}

interface IPortfolioLocalizationTexts extends IBaseLocalizationTexts {}

interface ILocalizationCommands {
    [START_COMMAND]: IStartLocalizationTexts;
    [PORTFOLIO_COMMAND]: IPortfolioLocalizationTexts;
}

type ILocalizations = Record<string, ILocalizationCommands>;

export const LOCALIZATIONS = new Proxy({} as ILocalizations, {
    get(_, localeCode: string) {
        if (localeCode === RUSSIAN_CODE) {
            return {
                [START_COMMAND]: {
                    description: "Все мои проекты",
                    commandText: "🔗 Мои проекты",
                    portfolio: "🎨 Мое портфолио",
                    itBlog: "🌐 Блог об IT",
                    inAppChat: "💬 INApp Мессенджер [исходный код]",
                    webCompiler: "⚙️ Веб Компилятор [исходный код]",
                    aiChat: "🤖️ AI Чат [исходный код]",
                    insuranceApp: "🛡️️ Страхование 24/7 [исходный код]",
                    hookahStore: "😮‍💨 Кальянный магазин",
                    oldPortfolio: "💼 Старое портфолио [исходный код]"
                },
                [PORTFOLIO_COMMAND]: {
                    description: "Сайт портфолио",
                    commandText: "Открыть сайт портфолио ⬇️",
                    portfolio: "🎨 Мое портфолио"
                }
            };
        }

        return {
            [START_COMMAND]: {
                description: "All my projects",
                commandText: "🔗 My projects",
                portfolio: "🎨 My portfolio",
                itBlog: "🌐 Blog about IT",
                inAppChat: "💬 INApp Real-time Chat [source code]",
                webCompiler: "⚙️ Web Compiler [source code]",
                aiChat: "🤖️ AI Chat [source code]",
                insuranceApp: "🛡️️ Insurance App [source code]",
                hookahStore: "😮‍💨 Hookah store",
                oldPortfolio: "💼 Old Portfolio [source code]"
            },
            [PORTFOLIO_COMMAND]: {
                description: "Portfolio website",
                commandText: "Open portfolio website ⬇️",
                portfolio: "🎨 My portfolio"
            }
        };
    }
});
