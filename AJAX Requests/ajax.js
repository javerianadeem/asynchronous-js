window.onload = function(){
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        console.log(http)
        if(http.readyState == 4 && http.status == 200) {

            console.log(JSON.parse(http.response))
        }
    }
    http.open("GET", "data/tweets.json",true) // if i set it false then it will be synchronus and hello will print after all of the above part
    http.send()
    // console.log("hello");
};
// JQUERY METHODS
// $.get('data/tweets.json', function(data){
//     console.log(data);
//   });
//   console.log('hello');


//  Ready states
// 0 - Request not initialized
// 1 request has been set up
// 2 request has been sent
// 3 request in process
// 4 request complete