const { Client, GatewayIntentBits, Events } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ],
});
require('dotenv').config();
client.on(Events.ClientReady, async () => {
  console.log(`Logged in as ${client.user.tag}`);
});
client.on(Events.MessageCreate, async (message) => {
  if (message.author.bot) return;
  if (message.content === '!ping') {
    message.channel.send('Pong!');
  }
  if (
    message.content.match(
      /こんにちは|こんばんは|おはよう|おつすぱ|おつかれ|お疲れ|つかれた|疲れた/
    )
  ) {
    message.reply(message.member.displayName + 'さん おつすぱ〜❤️');
  }
  if (
    message.content.match(
      /たらこすぱ|たらこスパ|たらこすぱげてぃ|たらこスパゲティ/
    )
  ) {
    message.reply('たらこスパ大好き🍝');
  }
  if (message.content.match(/ぴえん/)) {
    let react = '🥺';
    message
      .react(react)
      .then((message) => console.log('リアクション: 🥺'))
      .catch(console.error);
  }
  if (message.content.match(/すき|らぶ|ラブ|好き/)) {
    let react = '❤️';
    message
      .react(react)
      .then((message) => console.log('リアクション: ❤️'))
      .catch(console.error);
  }
  if (message.content.match(/えきすぱ子|えきすぱこ/)) {
    let react = '🥳';
    message
      .react(react)
      .then((message) => console.log('リアクション: 🥳'))
      .catch(console.error);
  }
  if (message.mentions.users.has(client.user.id)) {
    message.channel.send('おつすぱ〜！えきすぱ子だよ〜');
  }
  if (message.content.match(/ちょうさ|調査/)) {
    message.reply('す〜ぱ〜EXPANSION🌟');
  }
  //不適切なメッセージのさくじょ
  if (
    message.content.match(
      /しね|死ね|しぬ|死ぬ|しんだ|死んだ|しんで|死んで|ころす|殺す|ころせ|殺せ|ころして|殺して/
    )
  ) {
    message.channel.send(
      '投稿されたメッセージに不適切な表現が含まれていたので削除したよ！'
    );
    message.delete(100);
  }
});
client.login(process.env.DISCORD_TOKEN);
