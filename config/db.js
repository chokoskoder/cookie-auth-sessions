const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config({ path: '../.env' });

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

// Helper to run queries
const query = async (text, params) => {
//TODO:
const start = Date.now()
const res = await pool.query(text , params);
const duration = Date.now() - start;
console.log('Executed query', { text, duration, rows: res.rowCount });
return res;
};

// Helper for transactions
const getClient = async () => {
    const client = await pool.connect();
    const query = client.query.bind(client);
    const release = client.release.bind(client);

    // Set a timeout of 5 seconds, after which we release the client
    const timeout = setTimeout(() => {
        console.error('A client has been checked out for too long.');
        console.error(`The last executed query was: ${client.lastQuery}`);
        client.release();
    }, 5000);

    client.release = () => {
        clearTimeout(timeout);
        client.query = query;
        return release();
    };

    return client;
};


// Run the test query
testConnection();

module.exports = {
    query,
    getClient,
    pool
};
