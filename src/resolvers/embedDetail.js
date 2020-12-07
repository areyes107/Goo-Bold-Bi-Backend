const getSignatureUrl = require("../lib/signature");

async function embedDetailResolver(request, response){
  try {
    response.send({status: 200});
  } catch (error) {}
}

module.exports = {
  embedDetailResolver,
}