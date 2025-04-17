import Hapi from '@hapi/hapi';
import routes from './routes/index.js'; // or './routes'
const DBConn = require("./db.js");

const start = async () => {
    try {
        const server = Hapi.server({
            port: process.env.PORT || 8080,
            host: '0.0.0.0',
            routes: {
                cors: {
                    origin: ['*'], // Allow all origins for now
                    headers: ['Accept', 'Content-Type'],
                    additionalHeaders: ['X-Requested-With']
                }
            }
        });

        // Register all API routes
        routes.forEach(route => server.route(route));

        // Optional: Add a simple root route for health check or test
        server.route({
            method: 'GET',
            path: '/',
            handler: () => 'API is live!'
        });

        // Start the server
        await server.start();
        console.log(`✅ Server is running at ${server.info.uri}`);
    } catch (err) {
        console.error('🔥 Server failed to start:', err);
        process.exit(1);
    }
};

// Graceful shutdown on unhandled rejections
process.on('unhandledRejection', err => {
    console.error('Unhandled rejection:', err);
    process.exit(1);
});

start();
