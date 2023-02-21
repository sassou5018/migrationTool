import { exec } from "child_process";

// exec("typeorm-model-generator -h localhost/orcl -d HR -p 1521 -u HR -x root -e oracle", (error, stdout, stderr) => {
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

import oracledb from "oracledb";


async function fun() {
    const con = await oracledb.getConnection({
        user: "HR",
        password: "root",
        connectString: "localhost/orcl"
    });
    const result = await con.execute("select * from employees");
    console.log(result);
}

fun();