const asyncWrapper = require('express-async-wrapper')

const getGoals = asyncWrapper(async (req, res) => {
    res.status(200).json({message : 'get goals'})
})

const setGoals = asyncWrapper(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message : 'set goals'})
})

const updateGoal = asyncWrapper(async (req, res) => {
    res.status(200).json({message : `Update goal ${req.params.id}`})
})

const deleteGoal = asyncWrapper(async (req, res) => {
    res.status(200).json({message : `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
}