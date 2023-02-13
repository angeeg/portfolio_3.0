let h1 = document.getElementById("h1");

const toggleFontColor = () => {
  console.log(h1);
  if (h1.getAttribute("style") === "color:blue") {
    h1.setAttribute("style", "color:black");
  } else {
    h1.setAttribute("style", "color:blue");
  }
};

// h1.onclick = toggleFontColor()
