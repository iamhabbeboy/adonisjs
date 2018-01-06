'use strict'

class HomeController {
  dashboard({request, view }) {
    return view.render('dashboard')
  }

  feed({ request, view}) {
    return view.render('home')
  }
}

module.exports = HomeController
