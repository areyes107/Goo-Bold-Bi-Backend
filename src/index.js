const server = require("./app/app");
const normalizePort = require("normalize-port");

const port = normalizePort(process.env.PORT || 9000);

server.listen(port, () => {console.log(`Server running on port: ${port}`)});