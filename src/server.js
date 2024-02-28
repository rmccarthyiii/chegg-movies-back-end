// macbook pro m1 might need a different port, eg: 3002
// trying PORT = 10000 for Render
const { PORT = 5001 } = process.env;  

const app = require("./app");
const knex = require("./db/connection");

const listener = () => console.log(`Listening on Port ${PORT}!`);

knex.migrate
  .latest()
  .then((migrations) => {
    console.log("migrations", migrations);
    app.listen(PORT, listener);
  })
  .catch(console.error);
