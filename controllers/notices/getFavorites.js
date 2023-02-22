const { User } = require('../../models')
const { NotFound } = require('http-errors')

const getFavorites = async (req, res) => {
  const { _id: owner } = req.user

  const user = await User.findById(owner)
    .select({ favorite: 1, _id: 0 })
    .populate('favorite')

  if (!user) {
    throw new NotFound('404, No such user')
  }

  const notices = user.favorite.map((notice) => {
    return {
      _id: notice._id,
      category: notice.category,
      title: notice.title,
      name: notice.name,
      birthday: notice.birthday,
      breed: notice.breed,
      sex: notice.sex,
      city: notice.city,
      price: notice.price,
      imageURL: notice.imageURL,
      comments: notice.comments,
      owner: notice.owner,
    }
  })

  res.json({
    code: 200,
    status: 'success',
    message: 'Get User Favorite notices',
    favorite: notices,
  })
}

module.exports = getFavorites
