const { Notice } = require('../../models')
const fs = require('fs/promises')
const { uploadImg } = require('../../helpers')

const addNotice = async (req, res) => {
  const { _id: owner } = req.user

  const [city, region] = req.body.location.split(', ')

  if (!req.file) {
    const notice = await Notice.create({ ...req.body, owner, city, region })
    res.status(201).json({
      code: 201,
      status: 'success',
      message: 'Add user notice',
      data: {
        _id: notice._id,
        category: notice.category,
        title: notice.title,
        birthday: notice.birthday,
        breed: notice.breed,
        city: notice.city,
        imageURL: notice.imageURL,
        price: notice.price,
      },
    })
  } else {
    const { path: tempUpload } = req.file
    const result = await uploadImg(tempUpload)
    const { url: imageURL, secure_url } = result

    const notice = await Notice.create({
      ...req.body,
      owner,
      city,
      region,
      imageURL: imageURL,
    })
    fs.unlink(tempUpload)

    res.status(201).json({
      code: 201,
      status: 'success',
      message: 'Add user notice',
      data: {
        _id: notice._id,
        category: notice.category,
        title: notice.title,
        birthday: notice.birthday,
        breed: notice.breed,
        city: notice.city,
        imageURL: notice.imageURL,
        price: notice.price,
      },
    })
  }
}

module.exports = addNotice
