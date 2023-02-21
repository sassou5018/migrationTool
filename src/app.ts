import { exec } from "child_process";
import dotenv from "dotenv";
dotenv.config();



// exec(`typeorm-model-generator -h ${process.env.DB_HOST} -p ${process.env.DB_PORT} -u ${process.env.DB_USERNAME} -x ${process.env.DB_PASSWORD} -e oracle -o ./src`, (error, stdout, stderr) => {
//     if (error) {
//         console.log(`error: ${error.message}`);
//         return;
//     }
//     if (stderr) {
//         console.log(`stderr: ${stderr}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
// })

import scrape from "./scrapeForEntities";
import dynamicImportAll from "./dynamicImportAll";
(async () => {
    let entities = await scrape("./src/entities");
    console.log(entities);
    //dynamically import all entities
    const imported = await dynamicImportAll(entities);
    console.log(imported);
})();
