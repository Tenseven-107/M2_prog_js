class App
{
    runApplication()
    {
        console.log("START");

        // Make shapes
        g.beginPath()
        g.fillStyle = "Red";
        g.moveTo(50, 50);
        g.lineTo(300, 100);
        g.lineTo(250, 300);
        g.lineTo(0, 250);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "Gray";
        g.moveTo(300, 100);
        g.lineTo(250, 300);
        g.lineTo(350, 250);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "Brown";
        g.moveTo(0, 250);
        g.lineTo(0, 400);
        g.lineTo(250, 450);
        g.lineTo(250, 300);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "Brown";
        g.moveTo(350, 250);
        g.lineTo(350, 400);
        g.lineTo(250, 450);
        g.lineTo(250, 300);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "Black";
        g.moveTo(325, 300);
        g.lineTo(325, 412);
        g.lineTo(275, 438);
        g.lineTo(275, 330);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "Blue";
        g.moveTo(303, 150);
        g.lineTo(275, 275);
        g.lineTo(325, 250);
        g.closePath();
        g.stroke();
        g.fill()
    }
}

// Vars
let app = new App();
let canvas = document.getElementById("canvasId");
let g = canvas.getContext("2d");

// Start App
app.runApplication();