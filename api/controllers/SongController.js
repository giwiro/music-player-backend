/**
 * SongController
 *
 * @description :: Server-side logic for managing songs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 import _ from 'underscore';

let lastId = 2;

let songs = [
  {
    _id: 1,
    title: "Falso patriotismo Comite Pokoflo(Canibal beats) El fin de los tiempos",
    url: 'https://www.youtube.com/watch?v=MXLzOKN2xts'
  }
]

module.exports = {
	getAll : (req, res) => {
    return res.status(200).json(songs)
  },
  delete: (req, res) => {
    const _id = req.param('_id');

    if (!_id) {
      return res.status(400).json({
        status: 400,
        error: 'ID not specified'
      })
    }

    songs = _.without(songs, _.findWhere(songs, {
      _id
    }));

    return res.status(200).json({
      msg: 'ok'
    })

  },
  add: (req, res) => {
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

