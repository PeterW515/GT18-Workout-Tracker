const router = require('express').Router();
// const db = require('');

router.get('/', async (req,res) => {
    try{
        const data = db.Workout.find({});
        res.json(data);
    } catch (err) {
        res.status(500).json(err);
    };
})

module.exports = router;