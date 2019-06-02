window.onload = function () {

    // var fruits = ['banana', 'apple', 'peach', 'mango']
    // fruits.forEach(function (val) {
    //     console.log(val)
    // })

    // // OR WE CAN DO
    // function callback(val) {
    //     console.log(val)
    // }
    // var bodyparts = ['fingers', 'nose', 'face']
    // bodyparts.forEach(callback)
    // console.log("done")


    // $.get('data/tweets.json',function(data){
    //     console.log(data)
    // });
    // console.log("test")

    // //  OR WE CAN DO

    // function cb (data)
    // {
    //     console.log(data)
    // }
    // $.get('data/friends.json',cb)
    function handleError(jqXHR, textStatus, error) {
        console.log(error)
    }
    $.ajax({
        type: "GET",
        url: "data/tweets.json",
        success: cbTweets,
        error: handleError
    });
    function cbTweets(data) {
        console.log(data)
        $.ajax({
            type: "GET",
            url: "data/friends.json",
            success: cbFriends,
            error: handleError,
        })
    }
    function cbFriends(data) {
        console.log(data)

        $.ajax({
            type: "GET",
            url: "data/videos.json",
            success: function (data) {
                console.log(data)
            },
            error: handleError
        })
    }

};