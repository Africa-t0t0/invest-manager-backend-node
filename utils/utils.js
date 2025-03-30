const fs = require("fs");

const csv = require("csv-parser");

const Banks = require("../models/Banks");


// Adhoc function for Banks, this is only because its static data and should be
// updated once.
function uploadBanksDataToDatabase(pathToFile) {
    const results = [];

    fs.createReadStream(pathToFile)
    .pipe(csv())
    .on("data", (row) => {
        results.push({
            name: row.name,
            nemo: row.nemo,
            description: row.description || null,
        });
    })
    .on("end", async () => {
        try {
            await Banks.bulkCreate(results);
            console.log("Update success");
        } catch (error) {
            console.log("Update failed: ", error);
        }
    });
}

module.exports = { uploadBanksDataToDatabase };
