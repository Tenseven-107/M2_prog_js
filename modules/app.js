import {HouseRenderer} from "./HouseRenderer.js"
import {TreeRenderer, TreeRenderer2} from "./TreeRenderer.js"



class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId")

        let g = canvas.getContext("2d");

        this.drawRect(g,0,10);

        this.drawField(g);
    }

    drawRect(g,x,y)
    {
        g.fillRect(x,y,10,10)
    }

    drawField(g)
    {
        let num = 100

        let houserenderer = new HouseRenderer();
        let treerenderer = new TreeRenderer();
        let treerenderer2 = new TreeRenderer2();

        for (let n = 0; n <= num; n++){
            let objNum = Math.random();

            if (objNum < 0,5) {
                if  (objNum > 0,25) {
                    this.drawObject(treerenderer, g);
                }if (objNum < 0,25){
                    this.drawObject(treerenderer2, g);
                }
            }if (objNum > 0,5){
                this.drawObject(houserenderer, g);
            }
            console.log(objNum);
        }
    }

    drawObject(object, g)
    {
        let x = Math.random() * 10000;
        let y = Math.random() * 10000;

        object.draw(g,x,y)
    }
}


let app = new App();
app.runApplication();