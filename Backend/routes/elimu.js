const express=require('express');

const router=express.Router();

//GET ALL
router.get('/',(req,res)=>{

res.json({message:'GET teacher,parent and student'})

})

//GET SINGLE
router.get('/:id',(req,res)=>{
    res.json({message:'GET a single'})
})




//POST
router.post('',(req,res)=>{
   
    res.json({message:'POST new student grade'})
})

//DELETE
router.delete('/:id',(req,res)=>{
    res.json({message:'DELETE a student grade'})
})

//UPDATE
//DELETE
router.patch('/:id',(req,res)=>{
    res.json({message:'UPDATE a student grade'})
})




module.exports=router