export class UfoRenderer
{
    // Running application
    draw(g,x,y, canvas)
    {
        console.log("START");

        // Make shapes
        g.beginPath()
        g.fillStyle = "gray";
        g.arc(x+180, y+175, 200, 0, Math.PI * 1 * 2)
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "#cbc6c1";
        g.arc(x+180, y+100, 70, 0, Math.PI * 2 * 2)
        g.closePath();
        g.stroke();
        g.fill()
    }
}