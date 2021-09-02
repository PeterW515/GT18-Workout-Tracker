const router = require('express').Router();
const db = require('../../models');

router.get('/', async (req, res) => {
    try {
        //const data = await db.Workout.find({});
        //use aggregate to sum fields for total duration
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
})

module.exports = router;