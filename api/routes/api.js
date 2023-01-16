const router = require('express').Router();

const apiSentencesRouter = require('./api/sentences');

router.use('/sentences', apiSentencesRouter);

module.exports = router;