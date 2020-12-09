const Sequelize = require('sequelize')
const db = new Sequelize('postgres://mattortner:password@localhost:5432/dumpsterdreams')

db
  .authenticate()
  .then(() => {
    console.log('Connection established');
  })
  .catch((err) => {
    console.error('error error, did not connect', err)
  })

module.exports = db