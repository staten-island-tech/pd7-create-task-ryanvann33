const history = [];

function generateMeme() {
  const topText = document.getElementById("topText").value;
  const bottomText = document.getElementById("bottomText").value;
  const imageURL = document.getElementById("imageURL").value;

  const memeContainer = document.createElement("div");
  memeContainer.style.display = "flex";
  memeContainer.style.alignItems = "center";
  memeContainer.style.justifyContent = "center";
  memeContainer.style.position = "relative";

  const memeImage = document.createElement("img");
  memeImage.src = imageURL;
  memeContainer.appendChild(memeImage);

  const topTextContainer = document.createElement("div");
  topTextContainer.innerHTML = topText;
  topTextContainer.style.position = "absolute";
  topTextContainer.style.top = "10%";
  topTextContainer.style.width = "100%";
  topTextContainer.style.textAlign = "center";
  topTextContainer.style.fontSize = "36px";
  topTextContainer.style.fontWeight = "bold";
  topTextContainer.style.color = "white";
  topTextContainer.style.textShadow = "2px 2px black";
  memeContainer.appendChild(topTextContainer);

  const bottomTextContainer = document.createElement("div");
  bottomTextContainer.innerHTML = bottomText;
  bottomTextContainer.style.position = "absolute";
  bottomTextContainer.style.bottom = "10%";
  bottomTextContainer.style.width = "100%";
  bottomTextContainer.style.textAlign = "center";
  bottomTextContainer.style.fontSize = "36px";
  bottomTextContainer.style.fontWeight = "bold";
  bottomTextContainer.style.color = "white";
  bottomTextContainer.style.textShadow = "2px 2px black";
  memeContainer.appendChild(bottomTextContainer);

  document.body.appendChild(memeContainer);
  history.push(memeContainer);
}  