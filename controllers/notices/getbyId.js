const { Notice } = require('../../models')
const { NotFound } = require('http-errors')

const getbyId = async (req, res) => {
  const { noticeId } = req.params

  const notice = await Notice.findById(noticeId).populate(
    'owner',
    'email phone'
  )

  if (!notice) {
    throw new NotFound('404, No such notice ')
  }

  res.json({
    code: 200,
    status: 'success',
    message: 'Get notices by ID',
    data: {
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
      email: notice.owner.email,
      phone: notice.owner.phone,
    },
  })
}

module.exports = getbyId
