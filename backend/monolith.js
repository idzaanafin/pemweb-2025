//import express from  'express';
const express = require('express');

let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
    res.send("backend service runnign")
})

app.get('/ping', (req, res, next) => {
    res.send("pong")
})

app.get('/mhs', (req, res, next) => {
    res.send([{'nama': 'alfa', 'nrp': '115'},{'nama': 'arul', 'nrp':'038'}])
})

app.post('/mhs/create', (req, res, next) => {
    // res.send('berhasil ditambahkan\n')
    res.send('Berhasil menambahkan data\n' + JSON.stringify(req.body)+ '\n')
})

app.put('/mhs/update/:id', (req, res, next) => {
    // res.send('berhasil diperbarui\n')
    res.send(`Mahasiswa ${req.params.id} berhasil diperbarui\n` + JSON.stringify(req.body) + '\n');

})

app.delete('/mhs/delete/:id', (req, res, next) => {
    // res.send('berhasil dihapus\n')
    res.send(`Mahasiswa ${req.params.id} berhasil dihapus\n`+ '\n');
})

app.listen(3000, () => {
    console.log('Server running on 3000');
})
