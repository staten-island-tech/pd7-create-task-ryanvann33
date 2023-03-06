function generateMeme() {
  const topText = document.getElementById("topText").value;
  const bottomText = document.getElementById("bottomText").value;
  const imageURL = document.getElementById("imageURL").value;

  const memeContainer = document.getElementById("memeContainer");
  const memeImage = document.getElementById("memeImage");
  const topTextContainer = document.getElementById("topTextContainer");
  const bottomTextContainer = document.getElementById("bottomTextContainer");

  memeImage.src = imageURL;
  topTextContainer.innerHTML = topText;
  bottomTextContainer.innerHTML = bottomText;

  memeContainer.style.display = "flex";
  memeContainer.style.alignItems = "center";
  memeContainer.style.justifyContent = "center";
  memeContainer.style.position = "relative";

  topTextContainer.style.position = "absolute";
  topTextContainer.style.top = "10%";
  topTextContainer.style.width = "100%";
  topTextContainer.style.textAlign = "center";
  topTextContainer.style.fontSize = "36px";
  topTextContainer.style.fontWeight = "bold";
  topTextContainer.style.color = "white";
  topTextContainer.style.textShadow = "2px 2px black";

  bottomTextContainer.style.position = "absolute";
  bottomTextContainer.style.bottom = "10%";
  bottomTextContainer.style.width = "100%";
  bottomTextContainer.style.textAlign = "center";
  bottomTextContainer.style.fontSize = "36px";
  bottomTextContainer.style.fontWeight = "bold";
  bottomTextContainer.style.color = "white";
  bottomTextContainer.style.textShadow = "2px 2px black";

  memeContainer.appendChild(topTextContainer);
  memeContainer.appendChild(bottomTextContainer);
}
