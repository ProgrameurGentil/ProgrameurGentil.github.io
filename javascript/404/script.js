console.log("script chargé");

function retourMaison() {
  window.location.replace("https://www.henzo-renet.fr");
}

document.addEventListener("DOMContentLoaded", () => {
  const point = document.getElementById("point");

  const makeSVG = () => {
    const NS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("width", "100");
    svg.setAttribute("height", "100");

    const circle = document.createElementNS(NS, "circle");
    circle.setAttribute("cx", "50");
    circle.setAttribute("cy", "50");
    circle.setAttribute("r", "40");
    circle.setAttribute("stroke-width", "4");
    circle.setAttribute("fill", "#303030");

    svg.appendChild(circle);
    return svg;
  };

  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      point.appendChild(makeSVG());
    }, i * 1000);
  }
});
