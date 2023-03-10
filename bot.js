//importing the telegraf package
const { Telegraf } = require("telegraf");

//creating an instanse of bot using the telegraf constructor and included the API token
const bot = new Telegraf("5923084192:AAFohRBPSJfPf1jZ7f8h_aG8_jULCJ3L7q0");

let requestedService = "";
let employerPhone = "";
// let employerLocation = "";
let gigDescription = "";
let detailMessage;


const goodayOn =
    "ð <b>GoodayOn</b>  - <i>is a gig platform that connects a skilled professionals with individuals and bussiness in need of their services.</i>\n\náá³á­á¦á á áá­á¥ á­ááµ áá­ á¨ááá á áááááµ á°áª (á£ááá«) \ná°á«á°áá½ á¥á á áááááµ ááá (á°á áááá½á) á ááá á¨áá«ááá á¨áá£á­á áá°áá áªá« ááá¢";

const helpMessage = `
Use this commands to communicate
/start - starts the bot (áááµááá­)
/serviceProviderRequest - for requesting service provider (á£ááá«/á°á«á°á ááá á­á)
/register - to register as a Service Provider (á¥áá° á£ááá« áááááá¥)
/help - for command referense (á¥áá áááááµ)
`;

const regsiterInfo = `
â¹ï¸ If you are a service provider and want to find clients by promoting your work on goodayOn, important information you should send:\n
á áááááµ á°áª á¨áá á¥á áµá«ááµá á áá³á­ áá­ á ááµá°ááá á°áá áá½á ááááµ á¨áááá á¨áá ááá­ á¨ááá£ááµ á áµááá áá¨ááá½á¡\n
-------------------------------------------------------- 
 1- Profile picture (á¨áµá¨á» á áá­ á¨á°áá³ ááµ á¨áá«á³á­ áá¶)á£\n 
 2- ID picture (á¨áá³ááá«á£ ááá áááµá£ ááµáá­áµ áá¶) á¥á \n 
 3- Phone number (áµáá­ áá¥á­)
`

// Initiated when the user /start
bot.command("start", async(ctx) => {
    await ctx.reply(
        "Hello" +
        " " +
        ctx.from.first_name +
        " " +
        "ð Welcome to GoodayOn telegram bot ð¤"
    );
    await ctx.telegram.sendMessage(ctx.chat.id, goodayOn, { parse_mode: "HTML" }, {
        reply_markup: {
            inline_keyboard: [
                [{ text: "GoodayOn Website", url: "https://gooday.io" }],
            ],
        },
    });
    await ctx.reply(helpMessage);
});

//help command refferense
bot.help((ctx) => {
    ctx.reply(helpMessage);
});

//Service provider request
bot.command("serviceProviderRequest", (ctx) => {
    ctx.telegram.sendMessage(
        ctx.chat.id,
        "What type of service provider did you want? \ná¨áááááµá á¨á£ááá« á á­ááµ á­áá¨á¡", {
            reply_markup: {
                inline_keyboard: [
                    [{
                        text: "ð§âð³HomeChores \n(á¨á¤áµ ááµá¥ áµá« á¥á­á³á³ á£ááá«)",
                        callback_data: "homeChores",
                    }, ],
                    [{
                        text: "ð ï¸In-home Technicians & maintenance \n(á¨á´á­áá½á«á á¥áá á£ááá«)",
                        callback_data: "technicianWorkers",
                    }, ],
                    [{
                        text: "ð·ââï¸Construction & Finishing \n(ááá£á³ ááá½áá á¥á á¥áá á£ááá«)",
                        callback_data: "constructionWorkers",
                    }, ],
                    [{
                        text: "ð§âð¼Business Operation \n(ááááµ áµá« á áµááá á£ááá«)",
                        callback_data: "businessOperation",
                    }, ],
                ],
            },
        }
    );
});

//for homeMaid SPs...
bot.action("homeChores", (ctx) => {
    ctx.deleteMessage();
    ctx.telegram.sendMessage(
        ctx.chat.id,
        "Home Maid Service Providers \n(á¨á¤áµ ááµá¥ áµá« á¥á­á³á³ á£ááá«)", {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Cooking Maid (á¨á¤áµ ááá¥ á°á«á°á)", callback_data: "cooking-maid" },
                        { text: "Cleaning Maid(á¨á½á³áµ á£ááá«)", callback_data: "cleaning-maid" },
                    ],
                    [
                        { text: "Nanny(ááááµ)", callback_data: "nanny" },
                        { text: "Catering(á¨ááá¥ ááááµ á£ááá«)", callback_data: "catering" },
                    ],
                    [
                        { text: "Chauffer(á¹áá­)", callback_data: "chauffer" },
                        { text: "Tutor(á áµá á)", callback_data: "tutor" },
                    ],
                    //Go back menu
                    [{ text: "ðGo back (áá°ááá áá­áá­ á­ááá±)", callback_data: "go_back" }, ]
                ],
            },
        }
    );
});

//for technician SPs...
bot.action("technicianWorkers", (ctx) => {
    ctx.deleteMessage();
    ctx.telegram.sendMessage(
        ctx.chat.id,
        "Technicians & maintenance \n(á¨á´á­áá½á«á á¥áá á£ááá«)", {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Satellite Dish Tech (á¨á²á½ á£ááá«)", callback_data: "satellite-dish" },
                        { text: "Electrician (á¤áá­áµáªá­ á°á«á°á)", callback_data: "electrician" },
                    ],
                    [
                        { text: "Plumber(á¨á§áá§ á°á«á°á)", callback_data: "plumber" },
                        { text: "Electronics Repair(á¨á¤áá­áµá®áá­áµ á¥áá)", callback_data: "electronics-repair" },
                    ],
                    [
                        { text: "Computer tech(á¨á®áááá°á­ á¥áá á£ááá«)", callback_data: "computer-tech" },
                        {
                            text: "Home Appliance Repair \n(ááªáá£áá£áµá£ áá¥áµ-áá á¢á« á¥áá)",
                            callback_data: "home-repair",
                        },
                    ],
                    //Go back menu
                    [{ text: "ðGo back (áá°ááá áá­áá­ á­ááá±)", callback_data: "go_back" }, ]
                ],
            },
        }
    );
});

//for construction SPs...
bot.action("constructionWorkers", (ctx) => {
    ctx.deleteMessage();
    ctx.telegram.sendMessage(
        ctx.chat.id,
        "Construction & Finishing \n(ááá£á³ ááá½áá á¥á á¥áá á£ááá«)", {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Construction worker(á¨ááá á á£ááá«)", callback_data: "construction" },
                        { text: "Aluminium worker(á¨á áááá¨á á°á«á°á)", callback_data: "aluminium" },
                    ],
                    [
                        { text: "Gypsum worker(á¨ááá°á á°á«á°á)", callback_data: "gypsum" },
                        { text: "Painting(á¨ááá áá¢ á£ááá«)", callback_data: "painting" },
                    ],
                    //Go back menu
                    [{ text: "ðGo back (áá°ááá áá­áá­ á­ááá±)", callback_data: "go_back" }, ]
                ],
            },
        }
    );
});

//for bussiness operation SPs...
bot.action("businessOperation", (ctx) => {
    ctx.deleteMessage();
    ctx.telegram.sendMessage(
        ctx.chat.id,
        "Business Operation \n(ááááµ áµá« á áµááá á£ááá«)", {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Errand runner(áá³á­ á áµáá»á)", callback_data: "errand" },
                        { text: "Salesman(á¨á½á«á­ á°á«á°á)", callback_data: "salesman" },
                    ],
                    [{ text: "Accountant(á¨áá³á¥ á°á«á°á)", callback_data: "accountant" }],
                    //Go back menu
                    [{ text: "ðGo back (áá°ááá áá­áá­ á­ááá±)", callback_data: "go_back" }, ]
                ],
            },
        }
    );
});

//Go Back Menu
bot.action('go_back', ctx => {
    ctx.deleteMessage();
    ctx.telegram.sendMessage(
        ctx.chat.id,
        "What type of service provider did you want?\n á¨áááááµá á¨á£ááá« á á­ááµ á­áá¨á¡ ", {
            reply_markup: {
                inline_keyboard: [
                    [{
                        text: "ð§âð³HomeChores \n(á¨á¤áµ ááµá¥ áµá« á¥á­á³á³ á£ááá«)",
                        callback_data: "homeChores",
                    }, ],
                    [{
                        text: "ð ï¸In-home Technicians & maintenance \n(á¨á´á­áá½á«á á¥áá á£ááá«)",
                        callback_data: "technicianWorkers",
                    }, ],
                    [{
                        text: "ð·ââï¸Construction & Finishing \n(ááá£á³ ááá½áá á¥á á¥áá á£ááá«)",
                        callback_data: "constructionWorkers",
                    }, ],
                    [{
                        text: "ð§âð¼Business Operation \n(ááááµ áµá« á áµááá á£ááá«)",
                        callback_data: "businessOperation",
                    }, ],
                ],
            },
        }
    );
});


//Register as a service provider
bot.command("register", ctx => {
    ctx.telegram.sendMessage(ctx.chat.id, regsiterInfo, { parse_mode: "HTML" });
})

//handling employers request
let serviceRequest = ['cooking-maid', 'cleaning-maid', 'nanny', 'catering', 'chauffer', 'tutor', 'satellite-dish', 'electrician', 'plumber', 'electronics-repair', 'computer-tech', 'home-repair', 'construction', 'aluminium', 'gypsum', 'painting', 'errand', 'salesman', 'accountant'];
bot.action(serviceRequest, ctx => {
    requestedService = ctx.match.input.toUpperCase();
    // console.log(requestedService);

    ctx.reply("â¹ï¸ Please tell us detailed information regarding the job and the service provider you want.\n\náµá áµá«á á¥áá²áá áµááááááµ á¨á£ááá« á á­ááµ ááá½ á¨áá áá¥á«áªá« á­ááá©á");

    bot.on('text', async(ctx) => {
        gigDescription = ctx.message.text;
        console.log(gigDescription);
        detailMessage = `<b><u>REQUEST DETAIL</u></b> \n\n<i><b>requtsed service</b></i>: ð ${requestedService} 
        \n<i><b>job description</b></i>: ${gigDescription} `
        console.log(detailMessage)
        await ctx.telegram.sendMessage(ctx.chat.id, detailMessage, { parse_mode: "HTML" })
        await ctx.reply('Please provide us your /phone number')


    });


});

bot.command('phone', async(ctx) => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, "Please use 'Share my contact' keyboard button below \nto share your contact number", requestPhoneKeyboard, { parse_mode: "HTML" });
    bot.use((ctx) => {
        console.log(ctx.message.contact)
        employerPhone = ctx.message.contact.phone_number;
        console.log(employerPhone)
    })
})

bot.hears("location", (ctx) => {
    console.log(ctx.from);
    const userName = ctx.from.username;
    bot.telegram.sendMessage(ctx.chat.id, "Please use 'Share my contact'keyboard button below to share your contact number", requestLocationKeyboard);
    bot.use((ctx) => {
        // console.log(ctx.message.location);
        latitude = ctx.message.location.latitude
        longitude = ctx.message.location.longitude
        console.log(latitude, longitude);
    })
})

//constructor for providing phone number to the bot
const requestPhoneKeyboard = {
    "reply_markup": {
        "one_time_keyboard": true,
        "resize_keyboard": true,
        "keyboard": [
            [{
                text: "Share my contact",
                request_contact: true,
                one_time_keyboard: true
            }]
        ]
    }

};

// constructor for proving location to the bot
const requestLocationKeyboard = {
    "reply_markup": {
        "one_time_keyboard": true,
        "resize_keyboard": true,
        "keyboard": [
            [{
                text: "My location",
                request_location: true,
                one_time_keyboard: true
            }],
            ["Cancel"]
        ]
    }

}




bot.launch();