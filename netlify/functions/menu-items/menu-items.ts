import { Handler } from '@netlify/functions';
import { withPlanetscale } from '@netlify/planetscale';

export const handler: Handler = withPlanetscale(async (event, context) => {
    const { name = 'stranger' } = event.queryStringParameters;

    const {
        planetscale: { connection },
    } = context;

    const { body } = event;

    // Getting the rows returned by the table
    const result = await connection.execute('SELECT * from MenuItems');

    // Returns the rows as JSON response
    return {
        statusCode: 200,
        body: JSON.stringify(result.rows),
    };

    // return {
    //     statusCode: 200,
    //     body: JSON.stringify({
    //         message: `Hello, ${name}!`,
    //     }),
    // };
});
