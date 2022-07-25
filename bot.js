const {  Snake  } = require("tgsnake")
const ping = require("ping")
const commands = [];
// import {Snake} from "tgsnake"
const bot = new Snake({
  apiHash : "process.env.HASH", // your api hash // e.g 123e1bd232c12a13f1234567be0c9
  apiId :  process.env.API // your api id // e.g 123456
  // for the bot from the father's bot, add the line botToken: "123456:abcdefghijklmniurs" // token
})
try {
bot.run() //snake running
} catch (err) {
 console.log("Error: clear the file cache.json and paste [] – and check your code for errors.")
}

const utils = { // ready-made utilities 

    // e.g let rand = utils.random(1, 5) // gives a random number from 1 to 5, and ctx.telegram.sendMessage(ctx.chat.id,rand);
    // e.g let smileserr = utils.pick([`-_-`, `*_*`, `@_@`]); // equips the answer options and issues a random, and ctx.telegram.sendMessage(ctx.chat.id,smileerr);
    // e.g let money = ${utils.sp(match[1]) // allows you to read a fragment from a variable - e.g. message arguments

	sp: (int) => {
		int = int.toString();
		return int.split('').reverse().join('').match(/[0-9]{1,3}/g).join('.').split('').reverse().join('');
	},
	rn: (int, fixed) => {
		if (int === null) return null;
		if (int === 0) return '0';
		fixed = (!fixed || fixed < 0) ? 0 : fixed;
		let b = (int).toPrecision(2).split('e'),
			k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 33) / 3),
            c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3) ).toFixed(1 + fixed),
            d = c < 0 ? c : Math.abs(c),
            e = d + ['', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '][k];

			e = e.replace(/e/g, '');
			e = e.replace(/\+/g, '');
			e = e.replace(/Infinity/g, 'WOW');

		return e;
	},
	gi: (int) => {
		int = int.toString();

		let text = ``;
		for (let i = 0; i < int.length; i++)
		{
			text += `${int[i]}&#8419;`;
		}

		return text;
	},
	decl: (n, titles) => { return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2] },
	random: (x, y) => {
		return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
	},
	encrypt: (text) => { 
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(`${text}`,'utf8','hex')
  crypted += cipher.final('hex');
  return `${crypted}`;
}, 
decrypt: (text) => { 
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(`${text}`,'hex','utf8')
  dec += decipher.final('utf8');
  return `${dec}`;
	},
	pick: (array) => {
		return array[utils.random(array.length - 1)];
	},
	time: () => {
		return parseInt(new Date().getTime()/1000)
	}
}


/* basic functions for your static user-bots */
bot.hears(".info", async (ctx) => {  // one command to edit a message, often used to perform functions
  console.log(`🛸 LOGGING: ${ctx.text}`)
  const msg = await ctx.reply("🔍 Search...");
  async function go() {
  
  await ctx.telegram.editMessage(ctx.chat.id,msg.message.id,`📖 Found:  info... `)
  }
  setTimeout(go, 2000);
});

/* next for api, getting answers and then */
bot.hears(".ping", async (ctx) => { // two command for check ping
 console.log(`🛸 LOGGING: ${ctx.text}`)
 const ress = console.log(ctx);
 const msgId = ctx.id;
 const pingRes = await ping.promise.probe("google.com");
 const pongMsg = `🏓 Pong\n${pingRes.time} ms`;
 if(msgId) {
  ctx.telegram.editMessage(ctx.chat.id,msgId,pongMsg);
 } else {
   await ctx.reply(pongMsg);
 } 
});

