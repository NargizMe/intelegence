const express=require('express');
const bodyParser=require('body-parser');
// const cors=require('cors');
const mongoose=require('mongoose');
const morgan = require('morgan');

const app=express();
const PORT=process.env.PORT || 8080;

const routes=require('./routers/api');
const routesAdmin=require('./routers/admin');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(cors());

mongoose.connect('mongodb://localhost/Intelegence',{
  useNewUrlParser: true,
  useUnifiedTopology: true
},()=>{ 
console.log('Mongoose connected');
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(morgan('tiny'));
app.use('/api', routes);
app.use('/admin', routesAdmin);
mongoose.set('useFindAndModify', false);

app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`);
});