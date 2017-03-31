'use strict'

const onSuccess = function (data) {
  if (!data) {
    console.warn('You deleted a book!')
  } else if (data.book) {
    console.log(data.book)
  } else {
    console.table(data.books)
  }
}

const onError = function (response) {
  console.error(response)
}

module.exports = {
  onSuccess,
  onError
}
