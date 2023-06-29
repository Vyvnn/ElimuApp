

const express =require ('express');
const elimuRoutes= require('./routes/elimu')

const app =express();

//middleware
app.use(express.json)

app.use((req,res,next)=>{

    console.log(req.path,req.method)
    next()
})


//routes
app.use('/api/elimu',elimuRoutes)
    



app.listen(5555,()=>{
    console.log('listen to port 5555')
})