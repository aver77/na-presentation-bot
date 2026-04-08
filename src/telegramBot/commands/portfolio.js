const PORTFOLIO_COMMAND = "portfolio";

const listenToPortfolioCommand = (bot) => {
    bot.onText(/\/portfolio/, (msg) => {
        bot.sendMessage(msg.chat.id, "Open portfolio website ⬇️", {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "🎨 My portfolio",
                            web_app: { url: "https://naportfolio.space/" }
                        }
                    ]
                ]
            }
        });
    });
};

module.exports = {
    PORTFOLIO_COMMAND,
    listenToPortfolioCommand
};
