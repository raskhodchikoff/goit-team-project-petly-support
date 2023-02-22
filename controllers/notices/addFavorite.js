const { Notice } = require('../../models')
const { NotFound, Conflict } = require('http-errors')

const addFavorite = async (req, res) => {
  const { user } = req
  const { noticeId } = req.params

  const notice = await Notice.findById({ _id: noticeId })

  if (!notice) {
    throw new NotFound('404, Notice not found')
  } else {
    const isAdded = user.favorite.includes(noticeId)

    if (isAdded) {
      throw new Conflict('409, Notice is already in your favorite list')
    }
    user.favorite.push(noticeId)

    await user.save()

    res.json({
      code: 201,
      status: 'success',
      message: 'The notice have added to favorites',
    })
  }
}

module.exports = addFavorite
