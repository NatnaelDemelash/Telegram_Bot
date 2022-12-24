//importing the telegraf package
const { Telegraf } = require("telegraf");

//creating an instanse of bot using the telegraf constructor and included the API token
const bot = new Telegraf("5923084192:AAFohRBPSJfPf1jZ7f8h_aG8_jULCJ3L7q0");

const goodayOn =
  "💁 GoodayOn is a gig platform that connects a skilled professionals \n with individuals and bussiness in need of their services. \nጉዳይኦን በቅርብ ርቀት ላይ የሚገኙ አገልግሎት ሰጪ (ባለሙያ) ሰራተኞች እና አገልግሎት ፈላጊ (ተጠቃሚዎችን) በቀላሉ የሚያገናኝ የሞባይል መተግበሪያ ነው።";

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
  ctx.telegram.sendMessage(ctx.chat.id, goodayOn, {
    reply_markup: {
      inline_keyboard: [
        [{ text: "GoodayOn Website", url: "https://gooday.io" }],
      ],
    },
  });
  ctx.reply(helpMessage);
});

//help command refferense
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

//Service provider request
bot.command("serviceProviderRequest", (ctx) => {
  ctx.telegram.sendMessage(
    ctx.chat.id,
    "What type of service provider did you want?\n የሚፈልጉትን የባለሙያ አይነት ይምረጡ ",
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "🧑‍🍳HomeChores \n(የቤት ውስጥ ስራ እርዳታ ባለሙያ)",
              callback_data: "homeChores",
            },
          ],
          [
            {
              text: "🛠️In-home Technicians & maintenance \n(የቴክኒሽያን ጥገና ባለሙያ)",
              callback_data: "technicianWorkers",
            },
          ],
          [
            {
              text: "👷‍♂️Construction & Finishing \n(ግንባታ ፊንሽንግ እና ጥገና ባለሙያ)",
              callback_data: "constructionWorkers",
            },
          ],
          [
            {
              text: "🧑‍💼Business Operation \n(ለንግድ ስራ አስፈላጊ ባለሙያ)",
              callback_data: "businessOperation",
            },
          ],
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
    "Home Maid Service Providers \n(የቤት ውስጥ ስራ እርዳታ ባለሙያ)",
    {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Cooking Maid (የቤት ምግብ ሰራተኛ)", callback_data: "CM" },
            { text: "Cleaning Maid(የጽዳት ባለሙያ)", callback_data: "CL" },
          ],
          [
            { text: "Nanny(ሞግዚት)", callback_data: "NN" },
            { text: "Catering(የምግብ ዝግጅት ባለሙያ)", callback_data: "CT" },
          ],
          [
            { text: "Chauffer(ሹፌር)", callback_data: "CF" },
            { text: "Tutor(አስጠኚ)", callback_data: "TU" },
          ],
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
    "Technicians & maintenance \n(የቴክኒሽያን ጥገና ባለሙያ)",
    {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Satellite Dish Tech (የዲሽ ባለሙያ)", callback_data: "SD" },
            { text: "Electrician (ኤሌክትሪክ ሰራተኛ)", callback_data: "EL" },
          ],
          [
            { text: "Plumber(የቧንቧ ሰራተኛ)", callback_data: "PB" },
            { text: "Electronics Repair(የኤሌክትሮኒክስ ጥገና)", callback_data: "ER" },
          ],
          [
            { text: "Computer tech(የኮምፒውተር ጥገና ባለሙያ)", callback_data: "CS" },
            {
              text: "Home Appliance Repair \n(ፍሪጅ፣ምጣድ፣ ልብስ-ማጠቢያ ጥገና)",
              callback_data: "HA",
            },
          ],
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
    "Construction & Finishing \n(ግንባታ ፊንሽንግ እና ጥገና ባለሙያ)",
    {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Construction worker(የግንበኛ ባለሙያ)", callback_data: "CO" },
            { text: "Aluminium worker(የአልሙኒየም ሰራተኛ)", callback_data: "AL" },
          ],
          [
            { text: "Gypsum worker(የጂፕሰም ሰራተኛ)", callback_data: "GY" },
            { text: "Painting(የቀለም ቀቢ ባለሙያ)", callback_data: "PA" },
          ],
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
    "Business Operation \n(ለንግድ ስራ አስፈላጊ ባለሙያ)",
    {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Errand runner(ጉዳይ አስፈጻሚ)", callback_data: "ER" },
            { text: "Salesman(የሽያጭ ሰራተኛ)", callback_data: "SM" },
          ],
          [{ text: "Accountant(የሂሳብ ሰራተኛ)", callback_data: "AC" }],
        ],
      },
    }
  );
});

bot.launch();
