import promise from 'bluebird'
const options = { promiseLib: promise }
import pgPromise from 'pg-promise'
const pgp = pgPromise(options)

// const config = {
//  host: 'ec2-23-21-234-218.compute-1.amazonaws.com',
//  port: 5432,
//  database: 'd150qtaqcninqk',
//  user: 'mrwdkjpopctwcj',
//  password: '0qO0PyzRXpaqTv7vH9YobMSKrR',
//  ssl: true
// }

const connectionString = 'postgres://localhost:5432/jurisreal'
const db = pgp(connectionString)

module.exports = db