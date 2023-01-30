import {HouseRenderer} from "./HouseRenderer.js"
import {TreeRenderer, TreeRenderer2} from "./TreeRenderer.js"
import { SnowmanRenderer } from "./SnowmanRenderer.js";
import { RockRenderer, Rock2Renderer, GrassRenderer } from "./VegetationRenderer.js";


class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId")

        let g = canvas.getContext("2d");

        this.drawCard(g, canvas);
        
    }

    drawCard(g, canvas)
    {
        let num = 1

        let houserenderer = new HouseRenderer();
        let treerenderer = new TreeRenderer();
        let treerenderer2 = new TreeRenderer2();
        let snowmanrenderer = new SnowmanRenderer();
        let rockrenderer = new RockRenderer();
        let rock2renderer = new Rock2Renderer();
        let grassrenderer = new GrassRenderer();

        let width = canvas.clientWidth;
        let height = canvas.clientHeight;

        this.drawBackground(width, height, g);

        this.drawObject(64, 64, snowmanrenderer, g);
        this.drawObject(560, 275, treerenderer, g);
        this.drawObject(890, 200, treerenderer2, g);

        this.drawObject(125, height / 4, houserenderer, g);
        this.drawObject(575, height / 3, houserenderer, g);
        this.drawObject(1025, height / 2, houserenderer, g);

        this.drawObject(120, 360, rockrenderer, g);
        this.drawObject(360, 380, rock2renderer, g);
        this.drawObject(360, 380, grassrenderer, g);
        this.drawObject(1000, 450, grassrenderer, g);
        this.drawObject(800, 210, grassrenderer, g);
        this.drawObject(1500, 900, rock2renderer, g);
        this.drawObject(1425, 820, rockrenderer, g);

        this.drawText(width, height, g);
    }

    drawBackground(width, height, g)
    {
        g.beginPath();
        g.fillStyle = "AntiqueWhite";
        g.moveTo(0, 0);
        g.lineTo(width, 0);
        g.lineTo(width, height);
        g.lineTo(0, height);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "DarkGray";
        g.moveTo(0, height / 2 - 50);
        g.lineTo(width, height);
        g.lineTo(0, height);
        g.moveTo(width, height / 2 - 50);
        g.closePath();
        g.stroke();
        g.fill();
    }

    drawObject(x, y, object, g)
    {
        object.draw(g,x,y)
    }

    drawText(width, height, g)
    {
        g.font = "100px Verdana"
        g.fillStyle = "#000000"
        g.fillText("MERRY CHRISTMAS!", width / 6, height / 6);
        g.fillText("_______________", width / 6, (height / 6) + 25);
    }
}

let app = new App();
app.runApplication();