const axios = require("axios");

// const dataObj = {
//     "description": "Market Mascot",
//     "external_url": "https://testnet.bscscan.com/address/0x4f659b6dfaef69e56d30aeba1491e7bbbaef488f",
//     "image": "ipfs://QmXou1mty7AqhKzxrxC5C7Xqx8yVjVi8ZEqjacUpQQ89hD?filename=gamer1_bull.jpg",
//     "name": "simple_bull"
//   }
// dataJSON = JSON.stringify(dataObj);

const contract = "0x4f659b6dFAeF69e56d30AEbA1491e7bbbAEF488f";
const options = {
  method: 'POST',
  url: 'https://thentic.tech/api/nfts/mint',
  headers: {
    'content-type': 'application/json'
  },
  data: '{"key":"u9i8J0KuSj9jdkDZS22sa3vSdYMp4Bgi","chain_id":97,"contract":"0x4f659b6dFAeF69e56d30AEbA1491e7bbbAEF488f","nft_id":3,"nft_data":"ipfs://QmQfSc5hsXRFDnkAypGc5k6zT2x6KJcASWzxtsznx1Cf2D?filename=gamer1_bull.json","to":"0xB4cAaf44a81BC8DF3AE640C1f8aFc37832BBdffB"}'
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});