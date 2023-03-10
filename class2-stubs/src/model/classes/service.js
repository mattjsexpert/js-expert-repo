const https = require('https');

class Service {

    async makeRequest(url) {
        return new Promise((res,rej) => {
            https.get(url, resp => {
                resp.on("data", data => res(JSON.parse(data)));
                resp.on("err", rej);
            });
        });
    }

    async getInfo(url) {

        const result = await this.makeRequest(url);

        return {
            name: result.name,
            surfaceWater: result.surface_water,
            appearedIn: result.films.length
        }
    }
}

module.exports = Service;