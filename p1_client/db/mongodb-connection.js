const mongoose = require('mongoose');
const URL = 'mongodb+srv://admin:admin@cluster0-nsxs1.mongodb.net/test?retryWrites=true&w=majority'
console.log('La URL es ' + URL);

mongoose.connect(URL, 
    {useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true})
    .then(()=> {
        console.log('Connected to database');
    }).catch((err)=>{
        console.log('Error, not connected');
        console.log(err);
    })

    module.exports = mongoose;