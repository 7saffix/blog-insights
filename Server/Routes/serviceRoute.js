import express from "express";
import { createService, deleteService, getService, updateService } from "../Controllers/serviceController.js";


const serviceRouter  = express.Router()

serviceRouter.post('/post-service',createService)  //create a service
serviceRouter.get('/services',getService)  //read services
serviceRouter.put('/update-service/:id',updateService)  //update a service
serviceRouter.delete('/delete-service/:id',deleteService)  //delete a service

export default serviceRouter