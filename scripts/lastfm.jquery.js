/*

simple last.fm jQuery plugin
shows recently played tracks

https://github.com/mmoss/jquery-lastfm

Author: Ringo Rohe
       - with much help from Douglas Neiner


-- lastplayed --

Options:

apikey:         (string) Last.fm API key - get it from here: https://www.lastfm.com/api/account
username:       (string) username
limit:          (int) Number of tracks to load - optional, default is 20
cover:          (bool) show covers - optional, default is true
datetime:       (bool) show date and time - optional, default is true
refresh:        (int) number of seconds to check for new tracks - optional, default is 0 (no refresh)
grow:           (bool) if true new tracks extend the box, if false older tracks will be removed - optional, default is false
shownowplaying: (bool) shows currently playing tracks - optional, default is true


Usage:

$(document).ready(function() {
    $('#lastBox').lastplayed({
        apikey:     'b25b9595...',
        username:   'Username',
        limit:      5,
        cover:      true,
        datetime:   true,
        refresh:    30,
        grow:       true
    });
});



-- nowplaying --

Options

apikey:         (string) Last.fm API key - get it from here: https://www.lastfm.com/api/account
username:       (string) username
refresh:        (int) number of seconds to check for new tracks - optional, default is 0 (no refresh)
icon:           (string) url of a Icon showed beside the text - optional, default is false
hide:           (bool) hides the element when nothing is playing - optional, default is false
notplayingtext: (string) text that is shown when nothing is played - optional, default is 'nothing playing'

Usage:

$('#nowPlayingBox').nowplaying({
    apikey:         'b25b9595...',
    username:       'Username',
    refresh:        30,
    icon:           'https://cdn.last.fm/flatness/global/icon_eq.gif',
    hide:           false,
    notplayingtext: 'some text'
});




############## BUGS ####################
- tell me if you find some



*/

(function ($) {
  /* ######################### Now Playing Class definition ################################# */

  var nowPlayingClass = function (elem, options) {
    var $myDiv = elem,
      refresh = parseInt(options["refresh"], 20),
      timer,
      lastCurrentPlaying = false;

    if (refresh > 0) {
      timer = window.setInterval(function () {
        nowPlayingInterval();
      }, refresh * 1000);
    }

    nowPlayingInterval();

    function nowPlayingInterval() {
      // remove error div if exists
      $myDiv.children(".error").remove();

      //create URL
      var url = "https://ws.audioscrobbler.com/2.0/?callback=?",
        params = {
          method: "user.getrecenttracks",
          format: "json",
          limit: 1,
          user: options.username,
          api_key: options.apikey,
        };

      //sending request
      $.getJSON(url, params, function (data) {
        //check for errors
        if (!data || !data.recenttracks) {
          return error('Username "' + options.username + '" does not exist!');
        } else if (!data.recenttracks.track) {
          return error('"' + options.username + '" has no tracks to show!');
        }

        var track = data.recenttracks.track[0];

        if (track && track["@attr"] && track["@attr"].nowplaying == "true") {
          var html = "";

          if (options.icon) {
            html =
              html +
              '<p class="playingNow"><img src="' +
              options.icon +
              '" class="icon" />' +
              "&nbsp";
          }

          html =
            html +
            "</span>" +
            '<p class="playing-now"><object class="bars"><button class="bar bar1" /><button class="bar bar2" /><button class="bar bar3" /></object><span class="playing-info"><span class="track">' +
            '<a href="https://last.fm/music/' +
            track.artist["#text"] +
            "/" +
            "-" +
            "/" +
            track.name +
            '/" target="_blank">' +
            track.name +
            "</a>" +
            "</span>" +
            '<span class="info-connector"> by </span>' +
            '<span class="artist">' +
            '<a href="https://last.fm/music/' +
            track.artist["#text"] +
            '/" target="_blank">' +
            track.artist["#text"] +
            "</a>" +
            "</span>";

          if (track.album["#text"]) {
            html =
              html +
              '<span class="album"><span class="info-connector"> from </span>' +
              '<a href="https://last.fm/music/' +
              track.artist["#text"] +
              "/" +
              track.album["#text"] +
              '/" target="_blank">' +
              track.album["#text"] +
              "</a>" +
              "</span></p>";
          }

          $myDiv.show();
          update(html);
        } else {
          if (options.hide) {
            $myDiv.hide();
          } else {
            update(options.notplayingtext);
          }
        }
      });
    }

    function error(message) {
      $("<p>", {
        className: "error",
        html: message,
      }).appendTo($myDiv);
      window.clearInterval(timer);
    }

    function update(html) {
      $myDiv.html(html);
    }
  };

  /* ######################## Now Playing Class ends here ################################# */

  /* ##################################### Recent Tracks Function ########################### */

  $.fn.lastplayed = function (options) {
    var opts = $.extend({}, $.fn.lastplayed.defaults, options);

    if (typeof options.username === "undefined") {
      return this;
    }

    if (typeof options.apikey === "undefined") {
      return this;
    }

    return this.each(function () {
      recentTracksClass($(this), opts);
    });
  };

  $.fn.lastplayed.defaults = {
    limit: 20,
    refresh: 0,
    cover: true,
    datetime: true,
    grow: false,
    shownowplaying: true,
  };

  /* ################################# Now Playing Function ################################ */

  $.fn.nowplaying = function (options) {
    var opts = $.extend({}, $.fn.nowplaying.defaults, options);

    if (typeof options.username === "undefined") {
      return this;
    }

    if (typeof options.apikey === "undefined") {
      return this;
    }

    return this.each(function () {
      nowPlayingClass($(this), opts);
    });
  };

  $.fn.nowplaying.defaults = {
    refresh: 0,
    icon: false,
    hide: false,
    notplayingtext: "nothing playing",
  };
})(jQuery);
