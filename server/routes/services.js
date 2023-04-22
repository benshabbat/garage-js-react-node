import express from "express";
import {
  createService,
  updateService,
  deleteService,
  getService,
  getServices,
  getServicesByType,
  getServicesByCar,
  getServicesByUser
} from "../controllers/service.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();
/*
router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("logged in")
})
router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
    res.send("hello user logged in :)")
})
router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
    res.send("hello admin logged in :)")
})
*/
//TEST CREATE USER

//GET ALL BY POPULATE
router.get("/populate", verifyAdmin, getServicesByType);
//CREATE
router.post("/:carId", verifyAdmin, createService);

//UPDATE
router.put("/:id", verifyAdmin, updateService);
//DELETE
router.delete("/:id", verifyAdmin, deleteService);
//GET
router.get("/:id", verifyUser, getService);

// GET by car
router.get("/car/:car", verifyUser, getServicesByCar);
// GET by user
router.get("/user/:user", getServicesByUser);
//GET ALL
router.get("/",verifyAdmin, getServices);


export default router;
