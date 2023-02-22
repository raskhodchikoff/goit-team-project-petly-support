const express = require('express')
const { notices: ctrl } = require('../../controllers')
const { ctrlWrapper, auth, validation, upload } = require('../../middlewares')
const { newNoticeSchema } = require('../../schemas/')

const router = express.Router()

router.get('/getAll/:category', ctrlWrapper(ctrl.getAll))
router.get('/get/:noticeId', ctrlWrapper(ctrl.getbyId))
router.put('/favorite/add/:noticeId', auth, ctrlWrapper(ctrl.addFavorite))
router.get('/favorite/get', auth, ctrlWrapper(ctrl.getFavorites))
router.delete(
  '/favorite/remove/:noticeId',
  auth,
  ctrlWrapper(ctrl.removeFavorite)
)
router.post(
  '/current/add',
  auth,
  upload.single('photo'),
  validation(newNoticeSchema),
  ctrlWrapper(ctrl.addNotice)
)
router.get('/current/get', auth, ctrlWrapper(ctrl.getUserNotices))
router.delete('/current/remove/:noticeId', auth, ctrlWrapper(ctrl.removeNotice))

module.exports = router
