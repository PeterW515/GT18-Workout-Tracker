const router = require('express').Router();
const db = require('../../models');

router.get('/', async (req,res) => {
    try{
        const data = await db.Workout.find({});
        res.json(data);
    } catch (err) {
        res.status(500).json(err);
    };
})

module.exports = router;