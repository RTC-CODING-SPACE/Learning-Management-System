const config = require('../../config.json');
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: config.databases.mysql.connectionLimitm,
    host: config.databases.mysql.host,
    user: config.databases.mysql.user,
    password: config.databases.mysql.password,
    database: config.databases.mysql.databasename
})

exports.executeQuery = function(query) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
                return;
            }
            connection.query(query,function(err,rows){
                connection.release();
                if (err) reject(err);
                resolve(rows);
            });

            connection.on('error', function(err) {      
                reject(err);
                return; 
          });
        })
    })
}

function changeBasket(str) {
    return str.replace('[', '(').replace(']', ')')
}

exports.insertQuery = async function(table, data = []) {
    let columns  = changeBasket(JSON.stringify(Object.keys(data[0]))).replace(/"/g, "")
    let values = "";
    let first = true;
    for (let item of data) {
        let value = changeBasket(JSON.stringify(Object.values(item)));
        values += first ? value: ',' + value
        first = false
    }
    let query = `INSERT INTO ${table} ${columns} VALUES ${values}`
    return await this.executeQuery(query)
}

exports.updateQuery = async function(table, data, condition) {
    let set = "";
    let first = true;
    for (let [column, value] of data) {
        set += first ? `${column}='value'`:`,${column}='value'`;
        first = false;
    }
    let query = `UPDATE ${table} SET ${set} WHERE ${condition}`;
    return await this.executeQuery(query);
}

exports.deleteQuery = async function(table, condition) {
    let query = `DELETE FROM ${table} WHERE ${condition}`;
    return await this.executeQuery(query);
}