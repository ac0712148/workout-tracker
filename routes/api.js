const router = require("express").Router();

const db = require("../models");

// TODO: and add code to the routes so that the app functions correctly

// Creates a workout using data in the request body.
router.post("/api/workouts", (req, res) => {
    // CODE HERE
    db.Workout.create(req.body)
        .then(dbWorkout => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        }).catch((err) => {
            res.status(400).json(err);
        });
});

// Respond with workout for id url parameter. This should
// respond with the updated workout json
router.put("/api/workouts/:id", (req, res) => {
    // CODE HERE
    console.log("router.put")
    console.log(req.body);
});

// Respond with json for all the workouts in an array.
router.get("/api/workouts", (req, res) => {
    // CODE HERE
    db.Workout.find({})
        .then((dbWorkout) => {
            res.json(dbWorkout)
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// Respond with json array containing the last 7 workouts
router.get("/api/workouts/range", (req, res) => {
    // CODE HERE
    db.Workout.find({}).limit(7).sort({ day: -1 })
        .then((dbWorkout) => {
            res.json(dbWorkout);
            console.log(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

// Delete workout with id matching id in the request body.
router.delete("/api/workouts", (req, res) => {
    // CODE HERE
    console.log("router.delete")
    console.log(req.body);
});

module.exports = router;