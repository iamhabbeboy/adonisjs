var sport = {
  init: function() {
    var request = {
      method: 'GET',
      headers: {
        'X-Mashape-Key': 'GLBGrHYYNEmshsv6MLs9fK9vA7Dvp14WW6pjsnqMufPWOuFIRH'
      },
      mode: 'cors',
      cache: 'default'
    };

    fetch('https://scommetix-football-betting-tips-v1.p.mashape.com/betting-tips', request ).then((html) => {
      console.log(html.body);
    }).catch((err) => {
      console.log(err);
    })
  }
}
