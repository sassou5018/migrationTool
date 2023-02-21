import { exec } from "child_process";
import dotenv from "dotenv";
dotenv.config();



exec(`typeorm-model-generator -h ${process.env.DB_HOST} -d ${process.env.DB_NAME} -p ${process.env.DB_PORT} -u ${process.env.DB_USERNAME} -x ${process.env.DB_PASSWORD} -e oracle`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
})


import scrape from "./scrapeForEntities";
(async () => {
    let entities = await scrape("./output/entities");
    console.log(entities);
})();
