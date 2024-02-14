
const Logger = require('./logger')
const logger = new Logger()

logger.on('message', (data)=> console.log('gestionnaire appelé: ', data))

logger.log('Salut tout le monde');
logger.log('2e message');
logger.log('autre chose');

