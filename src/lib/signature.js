const crypto = require("crypto");

module.exports.generateSignForUrl = (queryString) => {
  const keyBytes = Buffer.from(process.env.BOLDBI_SECRET_EMBD);
  const hmac = crypto.createHmac('sha256', keyBytes);
  const data = hmac.update(queryString.toLowerCase());

  const gen_hmac = data.digest().toString('base64');
  
  return gen_hmac;
}
