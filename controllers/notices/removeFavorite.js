const { NotFound } = require('http-errors')

const removeFavorite = async (req, res) => {
  const user = req.user
  const { noticeId } = req.params

  const idx = user.favorite.indexOf(noticeId)

  if (idx === -1) {
    throw new NotFound('404, There is not notice in your favorite list')
  }

  user.favorite.splice(idx, 1)
  await user.save()

  res.json({
    code: 200,
    status: 'success',
    message: `The notice removed from favorites`,
    noticeId,
  })
}

module.exports = removeFavorite
