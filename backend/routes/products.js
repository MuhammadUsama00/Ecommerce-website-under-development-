import express from 'express'
import { getproducts, getproductsById } from "../CONTROLLER.js";
const router = express.Router();
router.get("/",getproducts)
router.get("/:id",getproductsById)
export default router;