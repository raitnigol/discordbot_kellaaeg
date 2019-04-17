// Nigol Enterprises | discord.js | Eestikeelne kellakuvamise kood | nigol.me
// minu veebileht on https://www.nigol.me/
// Kui soovid minuga kontakteeruda, kirjuta mulle: rait.nigol@khk.ee

// Kuna tahame kella kuvada formaadis TT:MM:SS, peame kasutama pad2 funktsiooni

function pad2(number) {
    return (number < 10 ? '0' : '') + number
}
// Nimetame ingliskeelsed kuude nimetused ümber eestikeelseteks

function formatDate(date) {
    var monthNames = [
      "Jaanuar", "Veebruar", "Märts",
      "Aprill", "Mai", "Juuni", "Juuli",
      "August", "September", "Oktoober",
      "November", "Detsember"
    ];
// Nimetame ingliskeelsed päevade nimetused ümber eestikeelseteks
    var dayNames = [
        "Esmaspäev", "Teisipäev", "Kolmapäev",
        "Neljapäev", "Reede", "Laupäev", "Pühapäev"
    ];
  
// Sätestame paar muutujat, et kood oleks lühem ja oleks lihtsam aru saada.
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var dayIndex = date.getDay();
// See koodilõik kuvatakse vastusena, kui keegi seda Teie discordi botilt küsib.  
    return "Täna on " + dayNames[dayIndex] + ", " + day + "." + ' ' + monthNames[monthIndex] + ' ' + year + "." + " " + "Hetkene kellaaeg on: " + pad2(hours) + ":" + pad2(minutes) + ":" + pad2(seconds);
  }

// Kui keegi kirjutab Teie discordi serveris prefix + aeg, kuvatakse talle aeg järgneval kujul:
// <@nigol.me>, täna on Reede, 18. Aprill 2019. Hetkene kellaaeg on: 00:01:44
// muutuja "aeg" ja prefiks on võimalik iga kell ära muuta vastavalt enda vajadusele
client.on('message', message => {
    if (message.content === prefix + "aeg") {
        message.reply((formatDate(new Date())));
    }
})