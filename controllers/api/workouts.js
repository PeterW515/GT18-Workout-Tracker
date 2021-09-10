const router = require('express').Router();
const db = require('../../models');

//this route gets the latest exercises
router.get('/', async (req, res) => {
    try {
        const data = await db.Workout.aggregate([
            {
                $addFields: {
                    totalDuration: { $sum: "$exercises.duration" }
                }
            }
        ]);
        res.json(data);
    } catch (err) {
        res.status(500).json(err);
    };
});


//this route adds a new workout
router.post('/', async (req, res) => {
    try {
        const data = await db.Workout.create(req.body);
        res.json(data);
    } catch (err) {
        res.status(500).json(err);
    };
});

//this route adds a new exercise to a workout
router.put('/', async (req, res) => {
    try {
        const data = await db.Workout.create(req.body);
        res.json(data);
    } catch (err) {
        res.status(500).json(err);
    };
});

//this route gets workouts in a range
router.get('/range', async (req, res) => {
    try {
        const data = await db.Workout.aggregate([
            {
                $addFields: {
                    totalDuration: { $sum: "$exercises.duration" }
                }
            }
        ]);
        res.json(data);
    } catch (err) {
        res.status(500).json(err);
    };
});


module.exports = router;