import {HouseRenderer} from "./HouseRenderer.js"
import {TreeRenderer, TreeRenderer2} from "./TreeRenderer.js"
import { SnowmanRenderer } from "./SnowmanRenderer.js";
import { UfoRenderer } from "./UfoRenderer.js";


class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId")

        let g = canvas.getContext("2d");

        this.drawRect(g,0,10);
        this.drawField(g, canvas);
        this.drawUfo(g, canvas);
    }

    drawRect(g,x,y)
    {
        g.fillRect(x,y,10,10)
    }

    drawField(g, canvas)
    {
        let num = 100

        let houserenderer = new HouseRenderer();
        let treerenderer = new TreeRenderer();
        let treerenderer2 = new TreeRenderer2();
        let snowmanrenderer = new SnowmanRenderer();

        for (let n = 0; n <= num; n++){
            let objNum = Math.random();

            if (objNum < 0,5) {
                if  (objNum > 0,25) {
                    this.drawObject(treerenderer, g, canvas);
                }if (objNum < 0,25){
                    this.drawObject(treerenderer2, g, canvas);
                }
            }if (objNum > 0,5) {
                this.drawObject(houserenderer, g, canvas);
            }if (objNum > 0.75) {
                this.drawObject(snowmanrenderer, g, canvas)
            }
        }
    }

    drawObject(object, g, canvas)
    {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;

        object.draw(g,x,y)
    }

    drawUfo(g, canvas)
    {
        let uforenderer = new UfoRenderer();

        let y = canvas.width / 2;
        let x = canvas.width / 2;

        uforenderer.draw(g,x,y, canvas)
        print
    }
}


let app = new App();
app.runApplication();