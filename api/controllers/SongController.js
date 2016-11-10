/**
 * SongController
 *
 * @description :: Server-side logic for managing songs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

let lastId = 2;

let songs = [
  {
    _id: 1,
    title: "Test 1",
    description: "asdjhasoidnyas"
  },
  {
    _id: 2,
    title: "Test 2",
    description: "asdjhasoidnyas2"
  }
]

module.exports = {
	getAll : (req, res) => {
    return res.status(200).json(songs)
  },
  add: (req, res) => {
    console.log(req.body);
    const url = req.param('url');

    if (!url) {
      return res.status(400).json({
        status: 400,
        error: 'URL not specified'
      })
    }

    oembetter.default.fetch(url, function(err, data) {
      if (err) {
        console.log(err);
        return res.status(500).json({
          status: 500,
          error: 'Error fetching youtube'
        }) 
      }

      let song = {
        _id: ++lastId,
        title: data.title,
        url: url,
        thumbnail_url: data.thumbnail_url
      }

      console.log('adding song', song);

      songs.push(song)

      return res.status(200).json(song);
      
    });



    

  }
};

