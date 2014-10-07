google.load("feeds", "1");

function feedLoaded(result) {
  if (!result.error) {

    var container = document.getElementById("news-feed");
    container.innerHTML = '';
    for (var i = 0; i < result.feed.entries.length; i++) {
      var entry = result.feed.entries[i];
      var li = document.createElement("li");
      li.innerHTML = '<a href="' + entry.link + '">' + entry.title + '</a><br>'
         + '<span>'+ new Date(entry.publishedDate) + '</span>';
      container.appendChild(li);
    }
  }
}

function OnLoad() {
  var feed = new google.feeds.Feed("http://blog.imaginativeworld.org/feed/");
  feed.setNumEntries(5);
  feed.load(feedLoaded);
}

google.setOnLoadCallback(OnLoad);