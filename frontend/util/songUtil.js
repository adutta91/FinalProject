var SongActions = require('../actions/songActions');

SongUtil = {

  fetchSongs: function() {
    $.get('api/songs', {}, function(songs) {
      SongActions.receiveAll(songs);
    });
  },

  createSong: function(song) {
    $.ajax({
      url: 'api/songs',
      method: 'POST',
      data: song,
      success: function(song) {
        SongActions.uploadSong(song);
      },
      error: function(song, error) {
        debugger;
        alert(error);
      }
    });
  },

  playSong: function(songId) {
    SongActions.playSong(songId);
  },

  pauseSong: function() {
    SongActions.pauseSong();
  },

  endSong: function() {
    SongActions.endSong();
  }
}

module.exports = SongUtil;
