const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'ejs')

app.get('/andrew', (req, res) => {
  res.send('hello! Goodbye!!')
})

app.get('/steve', (req, res) => {
	res.send('fuck off')
})

// https://mattestapp.herokuapp.com/guess?guess=7
app.get('/guess', (req, res) => {
  if(req.query.guess == '7') {
    res.send('correct!')
  } else {
    res.send('incorrect!')
  }
})

app.get('/', (req, res) => res.render('pages/index'))

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
