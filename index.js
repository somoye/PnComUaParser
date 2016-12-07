const request = require("request"),
    cheerio = require("cheerio"),
    url = "https://pn.com.ua/ct/1003/";

request(url, function (error, response, body) {
    if (!error) {
        var $ = cheerio.load(body),
            articleItem = $("article.item");


        var newArr = articleItem.get().map(function (item) {
            return {
                "name": $(item).find(".catalog-block-head a").text(),
                "price": $(item).find(".price span strong").text()
            };


        })

        console.log(JSON.stringify(newArr));
        //
        //        console.log("Вот он " + notebook + "Вот цена " + price);
    } else {
        console.log("Fatal error");
    }
});