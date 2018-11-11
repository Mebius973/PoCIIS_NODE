const express = require('express')
const app = express()

var virtualDirPath = "/" + process.env.virtualDirPath || '';

app.get(virtualDirPath + '/', function (req, res) {
  res.send('Hello World! ' + virtualDirPath)
})

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port " + process.env.PORT +"!')
})