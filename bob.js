class Bob {
  constructor () {
  }

  hey (string) {
    let length = string.length
    let stringArr = string.split('')

    if (string.endsWith('!')){
      return 'Whatever.'
    } else if (string.endsWith('?')) {
      return 'Sure.'
    } else if (string === '') {
      return 'Fine. Be that way!'
    } else if (typeof string === 'string') {
      return 'Whatever.'
    }

    stringArr.forEach(el => {
      if (el === "?") {
        return 'Whatever.'
      }
    })

    stringArr.forEach(el => {
      if ()
    })



  }


}

module.exports = Bob
