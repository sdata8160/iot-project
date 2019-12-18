const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/iot-app";
const options = {
    keepAlive: true,
    keepAliveInitialDelay: 300000,
    useNewUrlParser: true
};

mongoose.connect(mongoURI, options);

mongoose.connection.on('connected', ()=>{  
    console.log('Mogodb Connected...');
});

mongoose.connection.on('error', (err)=>{  
    console.log(`error ${err} ocurred`);
});