const express = require('express')

const server = express()

server.use(express.json())

require('dotenv').config()

const port = process.env.PORT || 5000

server.get('/api', (req, res) => {

   const message = process.env.MESSAGE

   res.status(200).json({ message })
})


server.listen(port, () => {
   console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
})