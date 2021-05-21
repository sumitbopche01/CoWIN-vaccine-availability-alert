require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

// process.env.TELEGRAM_BOT_TOKEN
const token = "1674505532:AAHQK7w8JmVMKTPOVrYv1vt696CnF7WKB8E";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", function (msg) {
  //nothing to do as of now
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, "Received your message.");
});
