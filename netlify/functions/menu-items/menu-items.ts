import { Handler } from '@netlify/functions';
import { createConnection } from 'mysql2/promise';

export const handler: Handler = async (event, context) => {
    const { name = 'stranger' } = event.queryStringParameters;

    const {
        planetscale: { connection },
    } = context;

    const { body } = event;

    const conn = await createConnection(planetscale);

    // Getting the rows returned by the table
    const [rows] = await conn.execute('SELECT * from MenuItems');

    // Consoles out the rows and ends the connection
    console.log(rows);
    await conn.end();

    // Returns the rows as JSON response
    return {
        statusCode: 200,
        body: JSON.stringify(rows),
    };

    // return {
    //     statusCode: 200,
    //     body: JSON.stringify({
    //         message: `Hello, ${name}!`,
    //     }),
    // };
};
