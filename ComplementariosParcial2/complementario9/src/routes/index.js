// core
const express = require('express');

// terceros
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
require('express-async-errors')

// propios
const { NotFoundMiddleware, ErrorMiddleware } = require('../middlewares');

// nivel 0
module.exports = function ({ HomeRoutes, UserRoutes , BebidaRoutes, PizzaRoutes}) {
    const router = express.Router();
    const apiRoutes = express.Router();

    apiRoutes
        .use(express.json())
        .use(cors())
        .use(helmet())
        .use(compression());

    apiRoutes.use('/home', HomeRoutes);
    apiRoutes.use('/user', UserRoutes);
    apiRoutes.use('/pizza', PizzaRoutes);
    apiRoutes.use('/bebida', BebidaRoutes); 
    apiRoutes.use('/public', express.static('public')); 
    

    router.use('/api/v1', apiRoutes);

    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware);

    return router;
}
