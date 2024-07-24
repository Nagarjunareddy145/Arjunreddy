import express from 'express';
import languageRoute from './arjun.route';
import Login from '../db/models/ttt';
import loginrouter from './ttt.route';
import service from '../db/models/service';
import serviceRoute from './service.route';
import categoriesRoute from './categories.route';
import userRoute from './user.route';
import driverRoute from './driver.route';
import restaurantRoute from './restaurant.route';
 
 // Adjust the import path as needed


const routes = express.Router();

 
routes.use('/', languageRoute)
routes.use('/',loginrouter)
routes.use('/',serviceRoute)
routes.use('/',categoriesRoute)
routes.use('/',userRoute)
routes.use('/',driverRoute)
routes.use('/',restaurantRoute)
 


export default routes;
