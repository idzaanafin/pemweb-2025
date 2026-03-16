const express = require('express');

let app = express();

app.get('/', (req,res,next) => {
    res.status(200).send('library service running')
})

app.get('/book', (req,res,next) => {
    res.status(200).send(['book1','book2','book3'])
})

app.get('/borrow', (req,res,next) => {
    res.status(200).send('ini endpoint peminjaman misalnya')
})

app.listen(8000, () => {
    console.log('library service running on 8000')
})
