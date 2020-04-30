const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        required: true
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Select a type"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter the name of the workout"
        },
        duration: {
            type: Number,
            required: "Enter a valid duration"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        },
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;