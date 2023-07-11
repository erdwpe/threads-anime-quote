const { ThreadsAPI } = require('threads-api');
const axios = require('axios');
require('dotenv').config();

const main = async () => {
    try {
        const threadsAPI = new ThreadsAPI({
            username: process.env.UNAME,
            password: process.env.PASSW
        });
        const response = await axios.get('https://animechan.xyz/api/random');
        const quotes = response.data;
        const p = await threadsAPI.publish({
          text: `Quote: ${quotes.quote}\nCharacter: ${quotes.character}\nnime: ${quotes.anime}`,
        });

        console.log(p);

    } catch (error) {
        console.log("failed");
    }
}
  
setInterval( async () => {
        await main()
    }, process.env.DELAY * 1000);
