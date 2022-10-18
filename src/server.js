const server = require('./app');

const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`server${port}`));
