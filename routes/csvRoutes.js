//const express = require('express')
import express from 'express'
export const router = express.Router();
import CSVController from '../controllers/csvController.js'
//import upload from '../controllers/uploadController';
import multer from "multer";

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './upload')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
    }
});
var upload = multer({storage: storage});

router.post("/upload",upload.single('file'), CSVController.postCSV );
