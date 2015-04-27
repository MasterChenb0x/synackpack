/* set some global settings */
_386 = { onePass: true, speedFactor: 1.25 };


jQuery(function() {
  jQuery.getFeed({
    url: 'http://www.synackpack.com/feed',
    success: function(feed) {
      /*
      jQuery('#result').append('<h1>'
        + '<a href="'
        + feed.link
        + '">'
        + feed.title
        + '</a>'
        + '</h1>');
      */

      var html = '';
      for (var i = 0; i < feed.items.length; i++) {
        var item = feed.items[i];
        var title = item.title.split('-');

        html += '<div class="span4">'
          + '<h2>'
          + title[0]
          + '</h2>'
          + '<h3>'
          + title[1]
          + '</h3>'
          + '<p>'
          + item.description
          + '</p>'
          + '<p>'
          + '<a class="btn" href="'
          + item.link
          + '">Play</a>'
          + '</p>'
          + '</div>';
      }

      jQuery('#result').append(html);
    }
  });
});

