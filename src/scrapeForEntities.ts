import fs from "fs";

async function getEntityTable(){
    let entityTable = new Map<string, string>();
    fs.readdir("./src", (err, files) => {
        if (err) {
            console.log(err);
            return;
        }
        files.forEach((file) => {
            console.log(file);
            entityTable.set(file, file);
        });
    });
    return entityTable;
}

export default getEntityTable;
