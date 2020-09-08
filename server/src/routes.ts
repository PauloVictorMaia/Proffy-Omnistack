import express from 'express'
import classesController from './controllers/classesControllers';
import connectionsController from './controllers/connectionsController';


const routes = express.Router();
const classesControllers =  new classesController();
const connectionsControllers = new connectionsController();

routes.get('/classes', classesControllers.index); 
routes.post('/classes', classesControllers.create);

routes.get('connections', connectionsControllers.index);
routes.post('connections', connectionsControllers.create);


export default routes;
