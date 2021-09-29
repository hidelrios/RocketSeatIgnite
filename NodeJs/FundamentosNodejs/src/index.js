const { request, response } = require('express');
const express = require('express')
const app = express();
const port = 3000

app.get("/courses",(request,response) =>{
  return response.json(["Curso1","Curso2","Curso3"])
});

app.post("/courses",(request,response) =>{
  return response.json(["Curso1","Curso2","Curso3","Curso4"])
});

app.put("/courses/:id",(request,response) =>{
  return response.json(["Curso5","Curso2","Curso3","Curso4"])
});

app.patch("/courses/:id",(request,response) =>{
  return response.json(["Curso5","Curso6","Curso3","Curso4"])
});

app.delete("/courses/:id",(request,response) =>{
  return response.json(["Curso5","Curso6","Curso4"])
});


app.listen(port,()=>{
  console.log(`Example app listening at http://localhost:${port}`)
})//localhost:3333
