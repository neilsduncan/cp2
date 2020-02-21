document.getElementById("catagorySubmit").addEventListener("click", function(event){
//console.log("did a thingy");
document.getElementById("results").innerHTML = "";
fetch("https://api.chucknorris.io/jokes/categories")
.then(function(response) {
     return response.json();
   })
   .then(function(json) {
      let results = "";
      results += '<p class="killMe"> Available Catagories are: '
      for (let i=0; i < json.length -1; i++){
         results += json[i]+', ';
      }
      results += json[json.length-1]
      results += '</p>';
      document.getElementById("results").innerHTML = results;
   });
});

document.getElementById("Submit").addEventListener("click", function(event){
//console.log("did a thingy");
document.getElementById("results").innerHTML = "";
let url = "https://api.chucknorris.io/jokes/random";

let cat = document.getElementById('catagoryInput').value;

if (!(cat === "")){
   url += '?category=' + cat;
}
console.log(url);
fetch(url)
.then(function(response) {
     return response.json();
   })
   .then(function(json) {
      let results = "";
      results += '<div id="temp"><div id="pict">'
      results += '<img src="'+json.icon_url+'" alt="" class="responsive">'
      results += '</div><div id="resText">'
      results += '<p class="killMe"> '
      results += json.value
      results += '</p>'
      results += '</div></div>'
      document.getElementById("results").innerHTML = results;
   });

});
