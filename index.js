function generateMeme() {
    const topText = document.getElementById("top-text").value;
    const bottomText = document.getElementById("bottom-text").value;
    const image = document.getElementById("image-input").files[0];
  
    const reader = new FileReader();
    reader.onload = function() {
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
  }
  