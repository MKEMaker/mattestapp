const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'ejs')

app.get('/andrew', (req, res) => {
<<<<<<< HEAD
  res.send('hello!' \
   'Goodbye!!')
=======
  res.send('hello! Goodbye!!')
>>>>>>> 4e5b6b96056146f7a70dc017b212b3d91311b618

})

app.get('/steve', (req, res) => {
	res.send('fuck off')
})

app.get(/guess?('guess=7')

app.get('/guess', (req, res) => {
  if(req.query.guess == '7') {
    res.send('correct!')
  } else {
    res.send('incorrect!')
  }
})

app.get('/', (req, res) => res.render('pages/index'))

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
