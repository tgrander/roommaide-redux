export function styleLogo(color){
  var title = document.getElementById('title');

  document.body.addEventListener(
  "mousemove",
  function(e) {

  var width = window.innerWidth;
  var height = window.innerHeight;

  var x = -(e.clientX - (width / 2)) / (width / 30);

  var y = -(e.clientY - (height / 2)) / (height / 30);

  title.style["text-shadow"] =
    x +
    "px" + " " +
    y +
    "px" +
    " " + color;
  });
}
