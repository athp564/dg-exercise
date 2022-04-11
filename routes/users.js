const express = require('express')
const router = express.Router()
const User = require('./../models/user')

router.get('/new', (req,res) => {
    res.render('new')
})

router.post('/', async (req,res) =>{
    const user = new User({
        name: req.body.name,
        email: req.body.email
    })
    try {
        user = await user.save()
    } catch (error) {
        res.render('new', {user:user})
    }
})

router.delete('/:id', async (req,res) => {
    await User.findByIdAndDelete(req.params.id)
    res.redirect('/')
})

module.exports = router