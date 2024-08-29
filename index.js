console.log('hello backend')


const express = require('express')
const app = express()

app.use(express.json())
 app.use(express.static("dist"))

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      important: true
    }
  ]

app.get("/",(request,response)=>{
    response.send("<h1>hello word</h1>")
})

app.get("/notes",(request,response)=>{
    response.json(notes)
})

app.get("/api/notes/:id",(request,response)=>{
    const id = Number(request.params.id)
    const note = notes.find((item)=>item.id === id)
    if(note){
        response.json(note)
    }else{
        response.status(404).end()
    }
})

app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)
    response.status(204).end()
  })


  app.post('/api/notes', (request, response) => {

    const generatId = ()=>{
      const maxId = notes.id > 0 ? Match.max(...notes.map((n)=> n.id)) 
      : 0
      return maxId + 1
    }

    if(!body.content){
        return response.status(400).json({
          error: "content missing"
        }

        )
    }


    const note = {
      content: body.content,
      important: Boolean(body.important) || false,
      id: generatId()
    }
  
    notes = notes.concat(note)
    response.json(note)



  })



  
const PORT = 3001


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})

