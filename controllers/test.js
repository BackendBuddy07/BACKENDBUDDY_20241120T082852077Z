// Generated controllers based on user input
const mongoose = require("mongoose"); 
const express = require("express"); 
const Test = require('../models/testSchema');

// CRUD operations for Test
// Create Controller 
const createTest = async (req, res) => { 
    const { name, field2 } = req.body;
    try {
        const test = await Test.create({ name, field2 }) 
        await test.save();
        res.status(201).json(test);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        res.status(500).json({'Server Error ': error.message});
    }
};

// Update Controller 
const updateTest = async (req, res) => { 
    const _id=req.params.id;
    const { name, field2 } = req.body;
    try {
        const test = await Test.findByIdAndUpdate( _id, { name, field2 },{new:true}) 
        if (!test) {
            return res.status(404).send('test not found');
        }
        await test.save();
        res.status(201).json(test);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// Delete Controller 
const deleteTest = async (req, res) => { 
    const _id=req.params.id;
    try {
        const test = await Test.findById(_id)
        if (!test) {
            return res.status(404).send('test not found');
        }
        await Test.deleteOne({_id: _id})
        await test.save();
        res.status(201).json({message: "Deleted Successfully"});
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// get by Id Controller 
const getTest = async (req, res) => { 
    const _id=req.params.id;
    try {
        const test = await Test.findById(_id)
        if (!test) {
            return res.status(404).send('test not found');
        }
        res.status(201).json(test);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// getAll Controller 
const getAllTest = async (req, res) => { 
    try {
        const test = await Test.find({})
        if (!test) {
            return res.status(404).send('Nothing found !!');
        }
        res.status(201).json(test);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

module.exports = {
    createTest,
    updateTest,
    deleteTest,
    getTest,
    getAllTest
}