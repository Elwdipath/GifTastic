//TODO: BUILD HTML FIRST THIS TIME!

//use ajax to make giphy api calls
//Create an array of planes to use as first buttons rendered on the page
let planes = ["FA/18", "Boeing 737","A-10 Warthog", "Cessna 172"]

//Giphy endpoint with search and api key
// var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=eOM4nHx6sSiT0ZOcb2ef3EpD6Ck10PmQ"

//for loop to generate first buttons

function renB(){
    $("#button-view").empty()
    for (var i = 0; i < planes.length; i++){
        var pB = $("<button>");
        pB.addClass("plane");
        pB.attr("data-name",planes[i]);
        pB.text(planes[i]);
        $("#button-view").append(pB)

}
}

//Add on click function to add to plane array
$("#addPlane").on("click", function(event){
    event.preventDefault();

    var aP = $("#plane-input").val().trim()
    console.log(aP)

    planes.push(aP);

    renB();

})
//call giphy for gifs on button click and append to 
$("body").on("click", function() {

    var plane = $(this).attr("data-name");
    console.log(plane)

    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + plane + "&api_key=eOM4nHx6sSiT0ZOcb2ef3EpD6Ck10PmQ"
    console.log(queryUrl)
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response){
        var results = response.data
        console.log(results)
    })
})


renB()

