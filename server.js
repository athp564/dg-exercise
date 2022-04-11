const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const userRouter = require('./routes/users')
const User = require('./models/user')

mongoose.connect('mongodb+srv://DevUser:Kimchi999@cluster0.j1osj.mongodb.net/DataBaste?retryWrites=true&w=majority')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))

app.use('/users', userRouter)

app.get('/', async (req,res) => {
    const users = await User.find().sort({joinDate:-1})
    res.render('index', {users: users})
})

try {
    app.listen(5000)
    console.log('Listening on port 5000')
} catch (error) {
    console.log(error)
}    
