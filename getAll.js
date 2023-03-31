require('dotenv').config()
const { Sequelize, QueryTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL)


const main = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connection established')
        const blogs = await sequelize.query("SELECT * FROM blogs", { type: QueryTypes.SELECT })
        blogs.forEach(blog => {
            console.log(`${blog.author}: '${blog.title}', ${blog.likes} likes`)
        })
        sequelize.close()
    } catch (error) {
        console.log('Could not establish the connection.')
        console.log(error)
    }
}

main()