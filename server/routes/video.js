const express = require('express')
const router = express.Router()

const { stream, upload, getAllVideos } = require('../controllers/video')

router.get('/upload/:filename/:imagename', upload)
router.get('/stream/:videoid', stream)
router.get('/', getAllVideos)


// router.route('/:id').get(getJob).delete(deleteJob).patch(updateJob)

module.exports = router 
