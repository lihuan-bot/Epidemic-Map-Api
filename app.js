const express = require('express')
const axios = require('axios')
const app = express()


app.get('/', (req, res) => res.send('Hello World!'))
app.get('/api/newsdata',async (req,res) =>{
  // 解决ajax跨域问题
  res.append("Access-Control-Allow-Origin", "*")
  res.append("Access-Control-Allow-content-type", "*")
// 请求头条数据
  let result = await axios.get('https://i.snssdk.com/forum/home/v1/info/?activeWidget=1&forum_id=1656784762444839')
  let data = result.data  
  

  res.send(data)
})

app.listen(8009, () => console.log('Example app listening on port 8009!'))