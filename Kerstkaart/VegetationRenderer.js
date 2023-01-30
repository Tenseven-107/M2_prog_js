export class RockRenderer
{
    // Running application
    draw(g,x,y)
    {
        console.log("START");

        // Make shapes
        g.beginPath();
        g.fillStyle = "gray";
        g.arc(x, y, 25, 3.1, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();
    }
}


export class Rock2Renderer
{
    // Running application
    draw(g,x,y)
    {
        console.log("START");

        // Make shapes
        g.beginPath();
        g.fillStyle = "gray";
        g.arc(x, y, 25, 3.1, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "gray";
        g.arc(x + 25, y, 30, 3.1, 2 * Math.PI);
        g.closePath();
        g.stroke();
        g.fill();
    }
}


export class GrassRenderer
{
    // Running application
    draw(g,x,y)
    {
        console.log("START");

        let grassTimes = 7

        // Make shapes
        g.beginPath()
        g.fillStyle = "green";

        let grassX = 0;
        for(let i = 0; i < grassTimes; i++)
        {
            if(i % 2 == 0)
            {
                g.lineTo(x + grassX, y + 50);
            }
            else
            {
                g.lineTo(x + grassX, y);
            }
            grassX += 25
        }

        g.closePath();
        g.stroke();
        g.fill()
    }
}