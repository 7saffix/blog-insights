import express from "express";
import { createTeam, deleteTeam, getTeam, updateTeam } from "../Controllers/teamController.js";


const teamRouter  = express.Router()

teamRouter.post('/create-team',createTeam)  //create a team
teamRouter.get('/teams',getTeam)  //read teams
teamRouter.put('/update-team/:id',updateTeam)  //update a team
teamRouter.delete('/delete-team/:id',deleteTeam)  //delete a team

export default teamRouter