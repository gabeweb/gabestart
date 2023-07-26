# GABEstart - A Simple Responsive Startpage

![Gif](asset/gabestart-demo.gif)

**GABEstart** is a simple, clean startpage which can be used on any device like phone, pad, desktop, etc.

It has dark ([Dracula](https://draculatheme.com/contribute)-est theme) and website links are customizable.

🎉**Plus:** Match _GABEstart_ with `Dracula X GABE` theme for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/dracula-x-gabe/) 🦊 and [Vivaldi](https://themes.vivaldi.net/themes/P9Xvx24q7Op) 🎻.

## Customizations

See `config.js` file for customization.

### Last.fm Now Playing widget

You must edit (in `index.html` file) the following strings:

```javascript
<script type="text/javascript">
            /*<![CDATA[*/ $(document).ready(function () {
                $("#lastBox").lastplayed({
                    apikey: "[YOU NEED TO GENERATE YOUR OWN LAST.FM API KEY]",
                    username: "[YOUR LAST.FM USER NAME]",
                    limit: 5,
                    refresh: 30,
                });
                $("#playingInfo").nowplaying({
                    apikey: "[YOUR LAST.FM API KEY]", username: "[YOUR LAST.FM USERNAME]", refresh: 60, notplayingtext: '<p class="playing-not">See recently played tracks on: <a href="https://last.fm/user/[USERNAME]" target="_blank">last.fm/user/[USERNAME]</a></p>'
                })
            }); /*]]>*/
  </script>
```

`YOUR LAST.FM API KEY` ==> You must generate a Last.fm API Key from: https://www.last.fm/api **VERY IMPORTANT**

`YOUR LAST.FM USERNAME` ==> Your Last.fm username.

<em>Advice:</em>

> If you're using an adblocker or script blocker you must give permission to access to https://ws.audioscrobbler.com in your personal filters, otherwise the Last.fm widget can't work properly.

### Weather widget

You must edit the `weather.js` file the following strings:

```javascript
/* OPEN WEATHER MAP */
xhr.open(
  "GET",
  "https://api.openweathermap.org/data/2.5/weather?q=[CITY ID]&appid=[YOUR API ID]&units=metric"
);
```

`YOUR CITY NAME OR CITY ID` ==> You can use the name of your city or the ID city. For example: If you're living on London (Great Britain), you must put the ID `2643743` (this ID number is geting from the URL `https://openweathermap.org/city/2643743` when you search on OpenWeatherMap.org).

`YOUR API ID` ==> You must generate an OpenWeatherMap API Key from https://home.openweathermap.org/api_keys **VERY IMPORTANT**.

### Colors

In the `style.css` you can set an accent color (global) for `username`, `scrollbar` and `parallax` (`waveforms` decoration). Just change the `--accentColor` with a predefined color variable or standard HTML/CSS code color.

Predefined color availables (all of them according to the `Dracula` color palette):

```javascript
var(--black)    // or #282a36
var(--blue)     // or rgb(98, 114, 164)
var(--green)    // or #50fa7b
var(--orange)   // or #ffb86c
var(--purple)   // or #9580ff
var(--red)      // or #ff5555
var(--white)    // or #f8f8f2
var(--yellow)   // or #f1fa8c
```

## Credits

This page is made possible thanks to:

- [MrAlpha786](https://github.com/MrAlpha786) for the original [GetStarted](https://github.com/MrAlpha786/getstarted) startpage.
- [RowanFeely](https://github.com/RowanFeely) for [StarterPage](https://github.com/RowanFeely/StarterPage).
- [Andy Fitzsimon](https://codepen.io/andyfitz) for [the deep blue (waves)](https://codepen.io/andyfitz/pen/aZrKdV) animation.
- [LentoLen](https://github.com/LentoLen) for [Suggestions](https://github.com/LentoLen/suggestions) script (under testing).
- [FrankFan](https://github.com/FrankFan) for [jQuery.scrollText.js](href="https://github.com/FrankFan/jQuery.scrollText.js) script.
- [mmoss](https://github.com/mmoss) for [Last.fm jQuery Plugin](https://github.com/mmoss/jquery-lastfm) (refactored).
- [OpenWeatherMap](https://openweathermap.org) for weather info. 
- [IBM](https://github.com/IBM) for [IBM Plex](https://github.com/IBM/plex) font and [IBM's Carbon Design System](https://carbondesignsystem.com/guidelines/icons/contribute/) icons.
- [IdreesInc](https://github.com/IdreesInc) for [Monocraft](https://github.com/IdreesInc/Monocraft) font.

---

[more stuff from [GABEweb @ GitHub](https://gabeweb.github.io)]
