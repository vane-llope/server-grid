const express = require('express')
const cors = require('cors')
const controller = require ('./controllers/controller.js')

const app = express()
app.listen(3000,() => console.log('listening on port 3000'))

app.use(express.urlencoded({extended : true}))
app.use(cors())


app.get('/',controller.display)
app.get('/user/:id',controller.search)
app.get('/delete/:id',controller.remove)

app.post('/add',controller.create)
app.post('/update',controller.update)

