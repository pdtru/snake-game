const canvasBackgroundColour = "white";

const gameCanvas = document.getElementById("gameCanvas");
const ctx = gameCanvas.getContext("2d");

 //  Select the colour to fill the drawing
 ctx.fillStyle = canvasBackgroundColour;

 // Draw a "filled" rectangle to cover the entire canvas
 ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
 // Draw a "border" around the entire canvas
 ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);