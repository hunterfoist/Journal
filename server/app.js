require('dotenv').config();
let express = require('express');
let app = express();

let sequelize = require('./db');

let journal = require('./controllers/journalcontroller');
let user = require('./controllers/usercontroller');
let calculator = require('./controllers/calculatorcontroller');

sequelize.sync();
//sequelize.sync({force: true})

app.use(require('./middleware/headers'));
app.use(express.json());

//Exposed Route
app.use('/user', user);


app.use('/journal', journal);
app.use('/calculator', calculator)





app.listen(3000, function(){
    console.log('App is listening on port 3000');
})