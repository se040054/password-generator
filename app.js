const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false })) 

const js=require('./public/javascript/index.js')


app.get('/', (req, res) => {
  res.redirect('/password-generator')
  
})

app.get('/password-generator',(req,res)=>{
  res.render('index')
})

app.post('/form',(req,res)=>{
  
  const data=req.body
  console.log(data.extent)
  js.generate(data)
  res.render('index')
})

app.listen(port, () => {
  console.log(`Click :http://localhost:3000`)
  
})