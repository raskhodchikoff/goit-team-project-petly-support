const getAll = require('./getAll')
const getbyId = require('./getbyId')
const addFavorite = require('./addFavorite')
const getFavorites = require('./getFavorites')
const removeFavorite = require('./removeFavorite')
const addNotice = require('./addNotice')
const getUserNotices = require('./getUserNotices')
const removeNotice = require('./removeNotice')

module.exports = {
  getAll,
  getbyId,
  addFavorite,
  getFavorites,
  removeFavorite,
  addNotice,
  getUserNotices,
  removeNotice,
}
