// // var collection = document.getElementsByClassName("posts");
// var posts = document.getElementsByClassName("posts");
// Array.prototype.forEach.call(posts, function (e) {
//   console.log(e);
// });

// function buscarPost() {
//   let text = document.getElementById("barra").value;
//   console.log(posts);
//   let postAchado = posts.find((e) => e.textContent.contains(text));
//   console.log(postAchado);
//   postAchado.style.backgroundColor = "red";
// }
Array.from(document.getElementsByClassName("posts")).forEach(function (
  element,
  index,
  array
) {
  console.log(element);
});
