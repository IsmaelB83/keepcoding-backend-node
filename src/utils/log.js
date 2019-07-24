// Import node modules
const SimpleNodeLogger = require('simple-node-logger');
const Moment = require ('moment');

// Creo el logger con la configuración deseada
options = {
    logFilePath:`./log/error.${Moment().format("YYYYMMDD")}.log`,
    timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS'
},
log = SimpleNodeLogger.createSimpleLogger(options);
// Indico el nivel de mensajes que deseo almacenar
log.setLevel('info');


module.exports = log;