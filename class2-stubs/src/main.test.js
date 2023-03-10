const Service = require("./model/classes/service");
const urls = require("./model/enum/urls");
const mocks = require("./model/enum/mocks");
const expected = require("./model/enum/expected")
const sinon = require("sinon");
const { deepStrictEqual } = require("assert");

(async () => {
    
    /*{
        // Vai para Internet
        const service = new Service();
        const response = await service.makeRequest(urls.url1);
        console.log(JSON.stringify(response));
    }*/

        const service = new Service();
        const stub = sinon.stub(service, service.makeRequest.name);

        stub.withArgs(urls.url1).resolves(mocks.tatooine);
        stub.withArgs(urls.url2).resolves(mocks.alderaan);

    {
        const response = await service.makeRequest(urls.url2);
        // console.log("resp: ", response);
    }


    {
        const result = await service.getInfo(urls.url1);
        console.log('result', result);
        deepStrictEqual(result, expected.mock1);
    }

    
    {
        const result = await service.getInfo(urls.url2);
        console.log('result', result);
        deepStrictEqual(result, expected.mock2);
    }
})();