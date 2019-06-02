window.onload= function() {
    function get(url){
        return new Promise(function(resolve, reject){
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, true);
          xhr.onload = function(){
            if(xhr.status == 200){
              resolve(JSON.parse(xhr.response));
            } else{
              reject(xhr.statusText);
            }
          };
          xhr.onerror = function(){
            reject(xhr.statusText);
          };
          xhr.send();
        });
      }

      var promise = get("data/tweets.json");
      promise.then(function(tweets){
          console.log(tweets);
          return get("data/friends.json");
      }).then(function(friends){
          console.log(friends)
          return get("data/videos.json");
      }).then(function(videos){
          console.log(videos)
      }).catch(function(error){
            console.log(error)
      });

// WITH JQUERY

$.get("data/tweets.json").then(function(tweets){
    console.log(tweets);
    return $.get("data/friends.json")
  }).then(function(friends){
      console.log(friends)
      return $.get("data/videos.json")
  }).then(function(videos){
      console.log(videos)
  })
};