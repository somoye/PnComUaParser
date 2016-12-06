const request = require("request"),
    cheerio = require("cheerio"),
    url = "https://pn.com.ua/ct/1003/";

request(url, function (error, response, body) {
    if (!error) {
        var $ = cheerio.load(body),
            notebook = $(".catalog-block-head").html();

        console.log("Вот оно " + notebook);
    } else {
        console.log("Fatal error");
    }
});