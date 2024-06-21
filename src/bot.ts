import { Bot } from "grammy";
import useGlobalStore from "./states/global.store";

const bot = new Bot("7344745433:AAEfZIvkx4LcED2UFHQK2bwPw8cYSiuZLAs");

const globalStore = useGlobalStore.getState();

bot.command("start", (ctx) => {
  const address = globalStore.address;
  ctx.reply(`Your address is ${address}`);
});

bot.command("menu", (ctx) => {
  ctx.reply("test nodemon");
});

bot.start();
 