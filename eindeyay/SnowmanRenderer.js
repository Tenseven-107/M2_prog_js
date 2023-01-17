export class SnowmanRenderer
{
    // Running application
    draw(g,x,y)
    {
        console.log("START");

        // Make shapes
        let circle_1 = 

        g.beginPath()
        g.fillStyle = "#cbc6c1";
        g.arc(x+180, y+175, 90, 0, 2 * Math.PI)
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "#cbc6c1";
        g.arc(x+180, y+100, 70, 0, 2 * Math.PI)
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "#cbc6c1";
        g.arc(x+180, y+25, 40, 0, 2 * Math.PI)
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "black";
        g.arc(x+200, y+25, 10, 0, 2 * Math.PI)
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "black";
        g.arc(x+160, y+25, 10, 0, 2 * Math.PI)
        g.closePath();
        g.stroke();
        g.fill()
    }
}
