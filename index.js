function generateMeme() {
<<<<<<< HEAD
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
=======
  const topText = document.getElementById("top-text").value;
  const bottomText = document.getElementById("bottom-text").value;
  const image = document.getElementById("image-input").files[0];

  const reader = new FileReader();
  reader.onload = function () {
    const memeContainer = document.createElement("div");
    const memeImage = document.createElement("img");
    const topTextDiv = document.createElement("div");
    const bottomTextDiv = document.createElement("div");

    memeImage.src = reader.result;
    topTextDiv.textContent = topText;
    bottomTextDiv.textContent = bottomText;

    memeContainer.appendChild(memeImage);
    memeContainer.appendChild(topTextDiv);
    memeContainer.appendChild(bottomTextDiv);

    memeContainer.style.display = "flex";
    memeContainer.style.flexDirection = "column";
    memeContainer.style.alignItems = "center";
    memeContainer.style.marginTop = "20px";

    document.body.appendChild(memeContainer);
  };
  reader.readAsDataURL(image);
>>>>>>> f7ab059f76204c8a263b07aadedb213684471bf7
}
