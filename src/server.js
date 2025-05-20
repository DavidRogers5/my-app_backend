// ================================
// 🌐 LOCAL DEVELOPMENT VERSION
// ✅ This block is ACTIVE (uncommented) for local dev
// ❌ Comment this entire block before deploying
// ================================


// import Hapi, { server } from '@hapi/hapi';
// import routes from './routes';
// const DBConn = require("./DB.js");

// var cors = require('cors');

// const start = async () => 
// {
//     //Angular version
//     /*
//     const server = Hapi.server({
//         port:8080,
//         host: 'localhost' , 
//         "routes": {
//             "cors": {
//                 "origin": ["http://localhost:4200"],
//                 "headers": ["Accept", "Content-Type"],
//                 "additionalHeaders": ["X-Requested-With"]
//             }
//         }
//     */
    
//     //React version
//     const server = Hapi.server({
//         port:8080,
//         host: 'localhost' , 
//         "routes": {
//             "cors": {
//                 "origin": ["http://localhost:3000"],
//                 "headers": ["Accept", "Content-Type"],
//                 "additionalHeaders": ["X-Requested-With"]
//             }
//         }
//     });

//     //Angular app IP is http://localhost:4200 , React is 3000

//     routes.forEach(routes => server.route(routes));

//     server.route({
//         method: 'GET',
//         path: '/hello',
//         handler: (req, h) => {  
//             return 'Hello';        
//         }
//     });

//     await server.start();
//     console.log('Server is listening on ${server.info.uri}');
// }

// process.on('unhandledRejection' , err => {
//     console.log(err);
//     process.exit(1);
// });

// start();



// ================================
// ☁️ AZURE DEPLOYMENT VERSION
// ❌ This block is currently commented out
// ✅ Uncomment this block when deploying to Azure
// ================================

console.log("🔥 App has started running...");

import Hapi from '@hapi/hapi';
import routes from './routes';
const DBConn = require("./DB.js");

const start = async () => {
    const server = Hapi.server({
        port: process.env.PORT || 8080,
        host: '0.0.0.0', // Required for Azure
        routes: {
            cors: {
                origin: ['*'],
                headers: ['Accept', 'Content-Type'],
                additionalHeaders: ['X-Requested-With']
            }
        }
    });

    routes.forEach(route => server.route(route));

    server.route({
        method: 'GET',
        path: '/',
        handler: () => {
            console.log("🔁 Root route hit");
            return 'API is live!';
        }
    });

    server.route({
        method: 'GET',
        path: '/hello',
        handler: () => {
            return 'Hello from Azure!';
        }
    });

    await server.start();
    console.log(`✅ Server is running at ${server.info.uri}`);
};

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
});

start();

