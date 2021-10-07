const router = require('express').Router();
const user = require('../controllers/login');

router.get('/test',(req,res)=>{
    res.json({msg: 'Testing login'});
});

module.exports = router;



