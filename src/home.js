const content = document.getElementById("content");
const headliner = document.createElement("div");
const fitBitesDesc = document.createElement("div");

const homeRender = () => {
headliner.innerHTML = "<h1>Fit Bites</h1><h2>Fuel Your Fitness with Fit Bites: The Perfect Protein Powerhouse!</h2><h3>Since 2023</h3>";
headliner.setAttribute("id", "headliner");
content.appendChild(headliner);

fitBitesDesc.innerHTML = `<p>Packed with high-quality proteins, our delectable bites are designed to support muscle recovery, enhance energy levels, and promote overall well-being. Fit Bites provide a balanced combination of essential nutrients, aiding in weight management and supporting a healthy lifestyle. Whether you're an athlete, a fitness enthusiast, or simply someonelooking for a nutritious snack, Fit Bites delivers the perfect blendof taste and nutrition, empowering you to reach your wellness goals</p></div><img src="/src/assets/content_1.jpg" width="400px" height="350px"/>`;
fitBitesDesc.setAttribute("id", "fitBitesDesc");
content.appendChild(fitBitesDesc);
}

export {homeRender}