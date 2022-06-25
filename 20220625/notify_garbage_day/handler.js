const line = require("@line/bot-sdk");

const client = new line.Client({
  channelAccessToken: process.env.ACCESS_TOKEN
});

exports.pushMessage = async event => {
  try {
    const message = {
      "type": "text",
      "text": "ゴミを出せ！"
    };
    
    await client.pushMessage(process.env.USER_ID, message);
  } catch (error) {
    console.log(error);
  }
};