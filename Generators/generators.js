window.onload = function(){
    // function* gen()
    // {
    //     var x = yield 10;
    //     console.log(x)
    // }
    // var myGen = gen();
    // console.log(myGen.next())
    // console.log(myGen.next(20))

    genWrap(function*(){
        var tweets = yield $.get("data/tweets.json");
        console.log(tweets);
        
        var friends = yield $.get("data/friends.json");
        console.log(friends);
       
        var videos = yield $.get("data/videos.json");
        console.log(videos);
     });
     function genWrap(generator){
       var gen = generator();
       function handle(yielded){
         if(!yielded.done){
           yielded.value.then(function(data){
             return handle(gen.next(data));
           });
         }
       }
       return handle(gen.next());
     }
}