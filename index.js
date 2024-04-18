async function main() {
  const { Telegraf, Markup } = require("telegraf");
  const { getDetails } = require("./api");
  const { sendFile } = require("./utils");
  const express = require("express");

  const bot = new Telegraf(process.env.BOT_TOKEN);
  const diskwalaURL = "www.diskwala.com"
  bot.start(async (ctx) => {
    try {
      ctx.replyWithMarkdown(
        `Hi ${ctx.message.from.first_name},\n\nI can create Downloadable Links from Terabox Link.\n\nMade with ❤️ by [Diskwala](${diskwalaURL})\n\nSend any terabox link to get downloadable link which you can upload to Diskwala Remote URL upload.`,
      );
    } catch (e) {
      console.error(e);
    }
  });

  bot.on("message", async (ctx) => {
    if (ctx.message && ctx.message.text) {
      const messageText = ctx.message.text;
      if (
        messageText.includes("terabox.com") ||
        messageText.includes("teraboxapp.com")
      ) {
        //const parts = messageText.split("/");
        //const linkID = parts[parts.length - 1];

        // ctx.reply(linkID)

        const details = await getDetails(messageText);
        if (details && details.direct_link) {
          try {
            ctx.reply(`Here is the downloadable link: `, details.direct_link);
            ctx.replyWithMarkdown(`Copy this URL and paste it in Remote URL in Diskwala [Dashboard](${diskwalaURL})`)
          } catch (e) {
            console.error(e); // Log the error for debugging
          }
        } else {
          ctx.reply('Something went wrong 🙃');
        }
        console.log(details);
      } else {
        ctx.reply("Please send a valid Terabox link.");
      }
    } else {
      //ctx.reply("No message text found.");
    }
  });

  const app = express();
  // Set the bot API endpoint
  app.use(await bot.createWebhook({ domain: process.env.WEBHOOK_URL }));

  app.listen(process.env.PORT || 3000, () => console.log("Server Started"));
}

main();
