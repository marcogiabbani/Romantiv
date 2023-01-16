const router = require('express').Router();
// api/sentences

const { Sentence } = require('../../db');

router.get('/', async (req, res) => {
    try {
        const sentences = await Sentence.findAll()
        res.json(sentences)
    } catch (error) {
        res.send({error})
    }
})

router.post('/', async (req, res) => {
    try {
        const sentence = await Sentence.create(req.body)
        res.json(sentence)
    } catch (error) {
        res.send({error})
    }
})

router.delete('/', async (req, res) => {
    try {
        await Sentence.destroy({
            where: {},
            truncate: true
        })
        res.json("All table records destroyed")
    } catch (error) {
        res.send({error})
    }
})


module.exports = router;