const express = require('express')
const app = express()
const port = 5000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'fullcycledb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)


const sqlCreateTable = `create table if not exists people(id int not null auto_increment, name varchar(255), primary key(id));`;
connection.query(sqlCreateTable)

const names = ['Victor', 'Wesley', 'Ana', 'Marcelo', 'Fernanda', 'Camila'];
names.forEach((el) => {
  connection.query(`INSERT INTO people(name) values('${el}');`)
});

app.get('/', (req,res) => {  
  connection.query(`SELECT * FROM people;`, (error, results, fields) => {
    console.log(results)
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ol>
        ${!!results.length ? results.map(el => `<li>${el.name}</li>`).join('') : ''}
      </ol>
    `)
  })
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})