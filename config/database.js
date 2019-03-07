if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb+srv://jovan:jmc123@cluster0-dumee.mongodb.net/test?retryWrites=true'}
}
else{
    module.exports = {mongoURI: 'mongodb://localhost:27017/multiplayergamedata'}
}