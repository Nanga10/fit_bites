const content = document.getElementById("content");
const headliner = document.createElement("div");
const fitBitesDesc = document.createElement("div");

const renderHome = () => {
  headliner.innerHTML =
    "<h1>Fit Bites</h1><h2>Fuel Your Fitness with Fit Bites: The Perfect Protein Powerhouse!</h2><h3>Since 2023</h3>";
  headliner.setAttribute("id", "headliner");
  content.appendChild(headliner);

  fitBitesDesc.innerHTML = `<p>Packed with high-quality proteins, our delectable bites are designed to support muscle recovery, enhance energy levels, and promote overall well-being. Fit Bites provides a balanced combination of essential nutrients, aiding in weight management and supporting a healthy lifestyle. </p></div>`;
  fitBitesDesc.setAttribute("id", "fitBitesDesc");
  content.appendChild(fitBitesDesc);
};

export { renderHome };
