if (process.env.NODE_ENV === 'production') {
    //IN PROD MODE
    //module.exports = require('./prod');
    //doing same
    module.exports = require('./dev');
} else {
    //IN DEV MODE
    module.exports = require('./dev');
}