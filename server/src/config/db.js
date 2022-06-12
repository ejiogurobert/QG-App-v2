import promise from 'bluebird';
import pg from 'pg-promise';

const options = {
  promiseLib: promise,
};

const pgp = pg(options);
const db = pgp(process.env.DATABASE_URL);

export default db;