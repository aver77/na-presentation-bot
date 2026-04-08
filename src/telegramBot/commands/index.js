const { PORTFOLIO_COMMAND, listenToPortfolioCommand } = require("./portfolio");
const { START_COMMAND, listenToStartCommand } = require("./start");

const handleCommands = (bot) => {
    bot.setMyCommands([
        { command: START_COMMAND, description: "All my projects" },
        { command: PORTFOLIO_COMMAND, description: "Portfolio website" }
    ]);

    listenToPortfolioCommand(bot);
    listenToStartCommand(bot);
};

module.exports = {
    handleCommands
};
