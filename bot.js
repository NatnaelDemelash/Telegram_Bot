//importing the telegrad package
const { Telegraf } = require('telegraf');
const { text } = require('telegraf/typings/button');
const { inlineKeyboard } = require('telegraf/typings/markup');

//creating an instanse of bot using the telegraf constructor and included the API token
const bot = new Telegraf('5923084192:AAFohRBPSJfPf1jZ7f8h_aG8_jULCJ3L7q0');

// Initiated when the user /start
bot.command('start', ctx => {
    ctx.reply(`Welcome to GoodayOn👋, How can we help you? `);
    bot.telegram.sendMessage(ctx.chat.id, 'Main Menu', {
        reply_markup: {
            inlineKeyboard: [
                [
                    { text: 'Info', callback_data: 'Information' },
                ],
                [
                    { text: "Request Service", callback_data: 'requestService' }
                ]
            ]
        }
    })
})

bot.launch();