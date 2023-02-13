const express = require('express')
const router = express.Router()

const { stream, upload, getAllVideos } = require('../controllers/video')

router.get('/upload/:filename/:imagename', upload)
router.get('/stream/:videoid/:token', stream)
router.get('/', getAllVideos)

// /stream/abc-def/tok-en       ['',stream,abc-def,tok-en]

// router.route('/:id').get(getJob).delete(deleteJob).patch(updateJob)

module.exports = router 
