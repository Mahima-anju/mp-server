
const JSONserver=require('json-server')

const MPserver=JSONserver.create()

const route=JSONserver.router('db.json')

const middleware=JSONserver.defaults()

const PORT=3000 | process.env.PORT

MPserver.use(middleware)

MPserver.use(route)

MPserver.listen(PORT,()=>{
console.log(`The server is running at:${PORT}`)

})
