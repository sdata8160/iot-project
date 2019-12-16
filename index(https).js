const https = require('https');
const app = require('./app');
const path = require('path');
const fs = require('fs');


const port = 4430;

const httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, 'ssl', 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'ssl', 'server.crt')),
    ca: fs.readFileSync(path.join(__dirname, 'ssl', 'ca.crt'))
};

const server = https.createServer(httpsOptions, app);

server.listen(port, () =>{
    console.log(`Server up at https://localhost:${port}`);
});