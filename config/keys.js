if (process.env.NODE_ENV === 'production') {
    //IN PROD MODE
    module.exports = require('./prod');
} else {
    //IN DEV MODE
    module.exports = require('./dev');
}