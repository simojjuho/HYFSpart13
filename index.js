require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

//DB code in separate module.
const { Blog } = require('./models/blogs')



app.get('/api/blogs', async (req, res) => {
    const blogs = await Blog.findAll()
    res.json(blogs)
})

app.get('/test', async (req, res) => {
    res.send('Testing endpoint')
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})