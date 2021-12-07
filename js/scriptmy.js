const TelegramApi = require('node-telegram-bot-api')



const token = '5012156589:AAFKXdHclMqoVVVMyasW0IUEapteFGyjOSw'

const bot = new TelegramApi(token, {polling: true})


const dataOption={
    reply_markup:JSON.stringify({
        inline_keyboard:[
            [{text:"Захворювання свиней ",callback_data:"1"}],
            [{text:"Харчування свиней",callback_data:"2"}],
            [{text:"Розведення свиней",callback_data:"3"}],
        ]
    })
}

bot.setMyCommands([

    {command: "/start",description: "НАчальное приветсвия"},
    {command: "/info",description: "вывод кнопок "},
])
// силка для инфи  https://rosng.ru/post/content-kak-kormit-sviney-chtoby-bystro-rosli
bot.on("message",   async  msg=>{
    console.log(msg)
    const text= msg.text;
    const chadId=msg.chat.id;
   await  bot.sendMessage(chadId,"ты написал мне "+text);

    if (text==="/start"){
    await    bot.sendMessage(chadId, "Привіт.Цей бот вміє давати корисну на задану тематику вибери " +
            "тематику яка тебе цікавить ",dataOption)
    }

    bot.on("callback_query",async event=>{
        const data=event.data;
        const chatId=event.message.chat.id;
        console.log(event);
       await  bot.sendMessage(chatId," хорошо давай попробуем так"+data)
    })

})

