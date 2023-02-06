const mysql = require('mysql2/promise');

// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
    try {
        // Creating a MySql connection with DATABASE_URL env value
        // Run the netlify functions locally with netlify cli - netlify dev
        const connection = await mysql.createConnection(
            process.env.DATABASE_URL
        );

        // Getting the rows returned by the table
        const [rows] = await connection.execute('SELECT * from temp');

        // Consoles out the rows and ends the connection
        console.log(rows);
        await connection.end();

        // Returns the rows as JSON response
        return {
            statusCode: 200,
            body: JSON.stringify(rows),
        };

        // const subject = event.queryStringParameters.name || 'World';
        // return {
        //     statusCode: 200,
        //     body: JSON.stringify({ message: `Hello ${subject}` }),
        //     // // more keys you can return:
        //     // headers: { "headerName": "headerValue", ... },
        //     // isBase64Encoded: true,
        // };
    } catch (error) {
        return { statusCode: 500, body: error.toString() };
    }
};

module.exports = { handler };
