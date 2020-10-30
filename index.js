require('dotenv').config()

const express = require('express')

const server = express()

server.use(express.json())

server.get('/api', (req, res) => {

   const message = process.env.MESSAGE

   res.status(201).json({ message })
})

const port = process.env.PORT || 5000

server.listen(port, () => {
   console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
})