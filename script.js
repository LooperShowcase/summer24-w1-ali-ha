const imagesDiv = document.getElementById("images");
console.log(imagesDiv);
const resultDiv = document.getElementById("result");

const rnd = Math.random() > 0.5;
const arr = [rnd, !rnd];

let id = (Math.random() * 6 + 1) * 10000;
id = Math.floor(id);
const fake = "https://thispersondoesnotexist.com/";
const real = `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;

const again = document.createElement("button");
again.innertext = "play again ";
again.onclick = function() {
  location.reload();
};

for (const x of arr) {
  const i = document.createElement("img");
  i.src = x ? real : fake;
  imagesDiv.append(i);

  i.onclick = function () {
    resultDiv.innerText = x ? "correct" : "not correct";
    imagesDiv.style.pointerEvents = "none";
    resultDiv.append(again);
  };
}
