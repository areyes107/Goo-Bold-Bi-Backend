const axios = require("axios");

const getSignatureUrl = require("../lib/signature");
const generateUrl = require("../lib/url");

async function embedDetailResolver(request, response){
  try {
    const url = generateUrl();
    const response = await axios.get(url);
    const { data } = response;

    response.send(data);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  embedDetailResolver,
}