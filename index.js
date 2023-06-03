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

app.post('/api/blogs', async (req, res) => {
    const blog = await Blog.create(req.body)
    res.json(blog)
})

app.delete('/api/blogs/:id', async (req, res) => {
    const id = req.params.id
    const blog = await Blog.findByPk(id)
    if (blog) {
        await blog.destroy()
        res.status(201)
    } else {
        res.status(400).json({ error: 'Did not find with such a key.'})
    }
})

app.get('/test', async (req, res) => {
    res.send('Testing endpoint')
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})