const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

// const me = new User({
//     name: '        Martin       ',
//     email: '         MARTIN@GMAIL.COM        ',
//     password: '        Password@122           '
// })

// me.save().then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })


// const task = new Tasks({
//     description: '    complete nodejs         '
// })

// task.save().then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

