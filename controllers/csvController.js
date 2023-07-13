//const neatCsv = require('neat-csv');
import neatCsv from "neat-csv";
import fs from "fs";

const csvControll = {};
let csvData;

csvControll.postCSV = (req, res, next) => {
  fs.readFile(req.file.path, async (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(await neatCsv(data));
    csvData = await neatCsv(data)
  });

  return res.status(201).send(csvData);
};

export default csvControll;
