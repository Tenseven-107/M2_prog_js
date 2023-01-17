export class HouseRenderer
{
    // Running application
    draw(g,x,y)
    {
        console.log("START");

        // Make shapes
        g.beginPath()
        g.fillStyle = "Red";
        g.moveTo(x+50, y+50);
        g.lineTo(x+300, y+100);
        g.lineTo(x+250, y+300);
        g.lineTo(x+0, y+250);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "Gray";
        g.moveTo(x+300, y+100);
        g.lineTo(x+250, y+300);
        g.lineTo(x+350, y+250);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "Brown";
        g.moveTo(x+0, y+250);
        g.lineTo(x+0, y+400);
        g.lineTo(x+250, y+450);
        g.lineTo(x+250, y+300);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "Brown";
        g.moveTo(x+350, y+250);
        g.lineTo(x+350, y+400);
        g.lineTo(x+250, y+450);
        g.lineTo(x+250, y+300);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()

        let randnumber = Math.random(); // rand number
        if (randnumber <= 0.5) {
            g.fillStyle = "Black";
        } else {
            g.fillStyle = "Yellow";
        }

        g.moveTo(x+325, y+300);
        g.lineTo(x+325, y+412);
        g.lineTo(x+275, y+438);
        g.lineTo(x+275, y+330);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()

        let randnumber2 = Math.random(); // rand number
        if (randnumber2 <= 0.5) {
            g.fillStyle = "Blue";
        } else {
            g.fillStyle = "Yellow";
        }

        g.moveTo(x+303, y+150);
        g.lineTo(x+275, y+275);
        g.lineTo(x+325, y+250);
        g.closePath();
        g.stroke();
        g.fill()
    }
}