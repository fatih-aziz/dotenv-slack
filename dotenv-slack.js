#!/usr/bin/env node

const dotenv = require("dotenv").config();
const dotenvParsed = dotenv.parsed;
const axios = require("axios");
const fs = require("fs");
var argv = require("minimist")(process.argv.slice(2));

const defaultFormat = {
  title: "ENV Update Notice [App:]",
  fallback: "Porto Notification",
  pretext: "Your team just make change to the an APP .env",
  author_link: "",
  author_icon: "",
  text: "Normal Text, *Bold Text*, **Italic Text**, \n ```data:[]```",
  footer: "Porto System",
  footer_icon:
    "https://platform.slack-edge.com/img/default_application_icon.png",
  ts: "now",
  color: "#2eb886",
};

const botHook = dotenvParsed.BOT_HOOK;
let message = defaultFormat;
let changerName = argv.name || dotenvParsed.MY_NAME;

if (dotenvParsed.FORCE_PUT_NAME && !changerName) {
  console.log("Please identify your name!");
  process.exit(1);
}

let envPath = argv.path || dotenvParsed.ENV_PATH || "./.env";

const sendMessage = async () => {
  let envFile = fs.readFileSync(envPath, "utf-8");
  message.title = `ENV Update Notice [App: ${
    dotenvParsed.APP_NAME || argv.appname || "other"
  } ] `;
  message.text = "```" + envFile + "```";
  message.fields = [
    {
      title: "Changer",
      value: changerName,
      short: true,
    },
    {
      title: "File name",
      value: envPath,
      short: true,
    },
  ];
  await axios
    .post(botHook, { attachments: [message] })
    .then(() => {
      console.log("=========================================");
      console.log("🔧 ENV broadcasted through your team! 💬");
      console.log("=========================================");
    })
    .catch((err) => {
      console.log(err);
    });
  process.exit(0);
};

sendMessage();
