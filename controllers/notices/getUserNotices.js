const { Notice } = require('../../models')
const { NotFound } = require('http-errors')

const getUserNotices = async (req, res) => {
  const { _id: owner } = req.user

  const notice = await Notice.find({ owner })
  if (!notice) {
    throw new NotFound('404, This user has no notices')
  }

  res.json({
    code: 200,
    status: 'success',
    message: 'Get all User notices',
    data: notice,
  })
}

module.exports = getUserNotices
