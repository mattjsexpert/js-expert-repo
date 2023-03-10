const Service = require("./model/classes/service");
const urls = require("./model/enum/urls");

(async () => {
    const response = await new Service().makeRequest("https://swapi.dev/api/planets/1/");
    console.log('resp: ', response)
})();