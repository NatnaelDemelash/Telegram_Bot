//importing the telegraf package
const { Telegraf } = require("telegraf");

//creating an instanse of bot using the telegraf constructor and included the API token
const bot = new Telegraf("5923084192:AAFohRBPSJfPf1jZ7f8h_aG8_jULCJ3L7q0");

const goodayOn =
  "💁 GoodayOn is a gig patform that connects a skilled professionals \n with individuals and bussiness in need of their services. \nጉዳይኦን በቅርብ ርቀት ላይ የሚገኙ አገልግሎት ሰጪ (ባለሙያ) ሰራተኞች እና አገልግሎት ፈላጊ (ተጠቃሚዎችን) በቀላሉ የሚያገናኝ የሞባይል መተግበሪያ ነው።";

const helpMessage = `
Use this commands to communicate
/start - starts the bot (ለማስጀመር)
/serviceProviderRequest - for requesting service provider (ባለሙያ/ሰራተኛ ለመጠይቅ)
/register - to register as a Service Provider (እንደ ባለሙያ ለመመዝገብ)
/help - for command referense (እገዛ ለማግኘት)
`;

const services = `
Available service category
/homeMaids - for home made chores
/technicians - for Technicians
/construction -for finishing & const. 
`;

// Initiated when the user /start
bot.command("start", (ctx) => {
  ctx.reply(
    "Hello" +
      " " +
      ctx.from.first_name +
      " " +
      "👋 Welcome to GoodayOn telegram bot 🤖"
  );
  ctx.reply(goodayOn);
  ctx.reply(helpMessage);
});

bot.help((ctx) => {
  ctx.reply(helpMessage);
});

//Service providers Onboarding
bot.command("register", (ctx) => {
  ctx.reply(
    "Ok if you want to register as a service provider, Please give us your info"
  );
  ctx.reply("What is your full name?");
});

bot.command("serviceProviderRequest", (ctx) => {
  ctx.reply("What type of service provider did you want?");
  ctx.reply(services);
});

bot.launch();
