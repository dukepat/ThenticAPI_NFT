const axios = require("axios");
//import {} from 'dotenv/config';

//const key = process.env.KEY;

const options = {
  method: 'POST',
  url: 'https://thentic.tech/api/nfts/contract',
  headers: {
    'content-type': 'application/json'
  },
  data: `{"key":"u9i8J0KuSj9jdkDZS22sa3vSdYMp4Bgi","chain_id":97,"name":"ELF NFT","short_name":"ENFT"}`
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});