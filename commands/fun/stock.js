const axios = require('axios');

module.exports = {
  aliases: ['stocks'],
  description: 'Search for stocks',
  category: 'Fun',
  guildOnly: true,
  cooldown: '10s',
  callback: async ({ message, args, text, client, prefix, instance }) => {

   // var arg = args.join(" ");
    //if (!arg) return message.channel.send("You did not specify your question");

    var baseURL = 'https://cloud.iexapis.com/v1/';
    var token = '/?token=pk_1e4577b6d2ed4a4294db34547beea67f';
    let stocksymbol = message.content.slice(prefix.length).trim().split(/ +/)[1];
    
            if (!args.length) {
            return message.channel.send(`You didn't provide a stock symbol, ${message.author}!`);
        }
        else if (args.length) {

            let getCompany = async () => {
                let stockCompany = await axios.get(baseURL + 'stock/' + stocksymbol + '/company' + token); //company info
                let stockBook = await axios.get(baseURL + 'stock/' + stocksymbol + '/book' + token); //company stock

                let companyValue = stockCompany.data;
                let stockValue = stockBook.data;

                return {
                    companyValue, 
                    stockValue
                };
            
            }
    
            let stockInfo = await getCompany();
            let changeAsPercent = (stockInfo.stockValue.quote.changePercent*100).toFixed(2);

        let embed8 = new Discord.MessageEmbed()
            .setColor("NAVY")
            .setTitle("Stock Prices")
            .setDescription(`Stock Price for ${stockInfo.companyValue.companyName}`)
            .addField(`Description: ${stockInfo.companyValue.description.substring(0,500)}`)
            .setDescription('')
            .addField(`Value: ${stockInfo.stockValue.quote.latestPrice}`)
            .setDescription('')
            .addField(`Change: ${stockInfo.stockValue.quote.change}`)
            .setDescription('')
            .addField(`Percent Change: ${changeAsPercent}`)
            .setDescription('');

            message.channel.send(embed8);

            //message.reply('\n' + '\n' + '(' + stockInfo.companyValue.symbol + ') ' + stockInfo.companyValue.companyName + '\n' + '\n' + //stockInfo.companyValue.description.substring(0,500) + '...' + '\n' + '\n' + '**$' + stockInfo.stockValue.quote.latestPrice //+ '** ' + '$' + stockInfo.stockValue.quote.change + ' (' + '%' + changeAsPercent + ')' + '\n');
            
            // stockInfo.stockValue.quote.latestPrice
            // stockInfo.stockValue.quote.previousClose
        }
    


    else if (command == 'react'){
        message.react('🥳');
    }

  }
}