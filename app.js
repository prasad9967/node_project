// console.log(__dirname)
// console.log(__filename)
// setInterval(() => {
//     console.log('hello')
// },2000)

// const sayHi = (name) => {
//     console.log(`Hello there ${name}`)
// }

// sayHi('prasad')
// exports.sayHi = sayHi

//  require('./mygernade')

// Builtin modules
// const os = require('os')

// Info about current user
// const user = os.userInfo()
// console.log(user)

//method returns the system uptime
// console.log(`the system uptime is ${os.uptime()} seconds`)

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem()
// }
// console.log(currentOS)

// Path Module
// const path = require('path')
// // console.log(path.sep)

// const filepath = path.join('/doc','app.js')
// //  console.log(filepath)

// const base = path.basename(filepath)
// // console.log(base)

// const absolute = path.resolve(__dirname,'doc','app')
// console.log(absolute)

// FS Module

// Synchronous Methods
// const {readFileSync, writeFileSync} = require('fs')

// const first = readFileSync('./doc','utf-8')
// console.log(first)

// writeFileSync('./demo1.txt','this is content')
// writeFileSync('./demo1.txt',`This is from doc1 ${first}`)
// writeFileSync('./demo1.txt',' ')

// Non synchronous methods (Asynchronous)
// const {readFile, writeFile}  = require('fs')

// readFile('./doc', 'utf8',(error, result)=>{
//     if (error){
//         console.log(error)
//         return
//     }
//     const first = result
//     console.log(first)
// })

// writeFile('./demo1.txt', 'this is the text given asynchronous methods',(error,result)=>{
//     if(error){
//         console.log(error)
//         return 
//     }
//     else{
//         console.log(result)
//     }
// })

// Http Module

// const http = require('http')

// const server = http.createServer((req,res)=>{
//     if (req.url === '/'){
//         res.end('Welcome Prasad')
//     }
//     if(req.url === '/about'){
//         res.end('This is about')
//     }
//     res.end(`
//     <h1>Oops!</h1>
//     <p>we can't seem to find the page you are lookin for</p>
//     <a href='/' >Back to Home </a>
//     `)
// })

// server.listen(4000)

// Using the dependencies which are downloaded.

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
