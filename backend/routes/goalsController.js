const asyncHandler = require('express-async-handler');

//@ GET GOALS
//@ ROUTE '/api/goals/'
//@ access Private

const getGoals = asyncHandler( async (req,res)=>{

    
    res.status(200).json(
        {
            message:"this is an interesting way to work with routes."
        })
})

//@ POST GOALS
//@ ROUTE '/api/goals/'
//@ access Private

const setGoal = asyncHandler(async (req,res)=>{
    console.log(req.body)  
    if(!req.body.text){
        res.status(401)
        throw new Error("no text sent")
    }  
    res.status(200).json(
        {
            message:"this is an interesting way to work with routes."
        })
})

//@ DELETE GOALS
//@ ROUTE '/api/goals/:id'
//@ access Private

const deleteGoal = asyncHandler(async (req,res)=>{
    res.status(200).json(
        {
            message:`delete goals with id ${req.params.id}`
        })
})

//@ DELETE GOALS
//@ ROUTE '/api/goals/:id'
//@ access Private

const updateGoal =asyncHandler(async (req,res)=>{
    res.status(200).json(
        {
            message:`Update goals with id ${req.params.id}`
        })
})
module.exports = {
    getGoals,
    setGoal,
    deleteGoal,
    updateGoal
}