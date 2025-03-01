import Hapi, { server } from '@hapi/hapi';
import routes from './routes';
const DBConn = require("./DB.js");

var cors = require('cors');

const start = async () => 
{
    
    const server = Hapi.server({
        port:8080,
        host: 'localhost' , 
        "routes": {
            "cors": {
                //Angular
                //"origin": ["http://localhost:4200"],

                //React
                //"origin": ["http://localhost:3000"],

                //Python
                "origin": ["http://localhost:8000"],

                "headers": ["Accept", "Content-Type"],
                "additionalHeaders": ["X-Requested-With"]
            }
        }
    

   

});

//Angular app IP is http://localhost:4200 , React is 3000

routes.forEach(routes => server.route(routes));

server.route({
    method: 'GET',
    path: '/hello',
    handler: (req, h) => {  
        
        return 'Hello';        

    }
});


await server.start();
console.log('Server is listening on ${server.info.uri}');
}

process.on('unhandledRejection' , err => {
    console.log(err);
    process.exit(1);
});

start();

