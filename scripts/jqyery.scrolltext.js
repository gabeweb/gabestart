      /**
       *-------------------------------------------------------------------
       * jQuery scrollText - Text scrolling plugin
       *-------------------------------------------------------------------
       * @version    1.0
       * @update     2015.11.02
       * @author     FrankFan
       * @github     https://github.com/FrankFan/jQuery.scrollText.js/
       *-------------------------------------------------------------------
       */

       (function ($) {
        var defaults = {
          container: ".box", // container
          sections: "li", // child container
          duration: 1000, // each animation execution time
          loop: true, // whether to loop
          currentClass: "current",
          direction: "up", // switch direction up | down
        };

        var opts = {},
          container,
          sections,
          iIndex = 0,
          content,
          contentHeight,
          contentChildHeight,
          temp,
          currentClass,
          arrElements = [],
          intervalID,
          duration;

        var ST = ($.fn.scrollText = function (options) {
          opts = $.extend({}, defaults, options || {});

          (container = $(opts.container)),
            (sections = container.find(opts.sections));

          sections.each(function (index, item) {
            arrElements.push(item);
          });

          this.children("ul").addClass("ulzone");
          content = $(".ulzone").eq(0);

          console.log(content);

          contentHeight = content.height();
          contentChildHeight = content.children().eq(0).height();
          temp = contentChildHeight;
          duration = opts.duration;
          currentClass = opts.currentClass;

          // Chained calls return this object
          return this.each(function () {
            _initLayout(this);
          });
        });

        ST.up = function () {
          console.log("UP");
          content.animate({
            marginTop: "-" + contentChildHeight,
          });
          arrElements.removeClass(currentClass);
          iIndex += 1;
          $(arrElements[iIndex]).addClass(currentClass);

          if (contentHeight === contentChildHeight) {
            content.animate(
              {
                marginTop: "-" + contentChildHeight,
              },
              "normal",
              ST.over
            );
          } else {
            contentChildHeight += temp;
          }
        };

        ST.over = function () {
          content.attr("style", "margin-top:0");
          contentChildHeight = temp;
          iIndex = 0;
          arrElements.removeClass(currentClass);
          $(arrElements[iIndex]).addClass(currentClass);
        };

        function _initLayout(t) {
          var that = t;

          content.clone().insertAfter(content);

          _handleStyle(that);

          _scroll();

          _hover($(t));
        }

        function _handleStyle(t) {
          arrElements = $(t).find("li");
          var liCount = arrElements.length;
          arrElements.eq(iIndex).addClass(currentClass);
        }

        function _scroll() {
          intervalID = setInterval(ST.up, duration);
        }

        function _hover(t) {
          t.hover(
            function () {
              // over
              console.log("over the li");
              clearInterval(intervalID);
            },
            function () {
              // out
              _scroll();
            }
          );
        }
      })(jQuery);
