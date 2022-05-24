var posts = document.querySelectorAll(".posts");
var postsArray = Array.from(posts);

function buscarPost() {
  let text = document.getElementById("barra").value;
  let postAchado = postsArray.find((e) => e.textContent.includes(text));
  postAchado.style.backgroundColor = "lightblue";
}
