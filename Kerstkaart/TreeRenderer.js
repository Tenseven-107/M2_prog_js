export class TreeRenderer
{
    // Running application
    draw(g,x,y)
    {
        console.log("START");

        // Make shapes
        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(x+160, y+30);
        g.lineTo(x+160, y+250);
        g.lineTo(x+190, y+250);
        g.lineTo(x+190, y+30);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "green";
        g.arc(x+180, y+100, 90, 0, 2 * Math.PI)
        g.closePath();
        g.stroke();
        g.fill()
    }
}

export class TreeRenderer2
{
    draw(g,x,y)
    {
        console.log("START");

        // Make shapes
        g.beginPath()
        g.fillStyle = "brown";
        g.moveTo(x+160,y+30);
        g.lineTo(x+160, y+250);
        g.lineTo(x+190, y+250);
        g.lineTo(x+190, y+30);
        g.closePath();
        g.stroke();
        g.fill()

        g.beginPath()
        g.fillStyle = "green";
        g.moveTo(x+80, y+30);
        g.lineTo(x+80, y+200);
        g.lineTo(x+270, y+200);
        g.lineTo(x+270, y+30);
        g.closePath();
        g.stroke();
        g.fill()
    }
}