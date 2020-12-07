const generateSignForUrl = require("./signature");

module.exports.generateUrl = ({embedQueryString, dashboardServerApiUrl}) => {
  const user = `&embed_user_email=${process.env.BOLDBI_ADMIN_EMAIL}`;
  const signature = `&embed_signature=${generateSignForUrl(user)}`;

  const embedDetailsUrl = `/embed/authorize?${user.toLowerCase()}${signature}`;

  return embedDetailsUrl;
}