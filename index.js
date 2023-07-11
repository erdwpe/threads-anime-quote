const { ThreadsAPI } = require('threads-api');
const axios = require('axios');
require('dotenv').config();

const main = async () => {
    try {
        const threadsAPI = new ThreadsAPI({
            username: process.env.UNAME,
            password: process.env.PASSW
        });
        fetch('https://kyoko.rei.my.id/api/quotes.php')
       .then(response => response.json())
  .then((data) => {
        const p = threadsAPI.publish({
          text: `Quote: ${data.apiResult[0].english}\nCharacter: ${data.apiResult[0].character}\nAnime: ${data.apiResult[0].anime}`,
        });
    })
console.log(`${data.apiResult[0].english}`)
        console.log('succses');

    } catch (error) {
        console.log("failed");
    }
}

  
setInterval( async () => {
        await main()
    }, process.env.DELAY * 1000);

