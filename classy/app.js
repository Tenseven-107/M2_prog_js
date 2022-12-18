
// Dino
class Dino
{
    constructor(naam, vleeseter, leeftijd)
    {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
        this.leeft = true;
        this.honger = true;
    }

    eetDino(d)
    {
        d.leeft = false;
        this.honger = false;
        console.log(this.naam, "eet de dino", d.naam)
    }

    eetPlant(plant)
    {
        this.honger = false;
        console.log(this.naam, "eet de plant", plant.naam)
    }
}

// Plant
class Plant
{
    constructor(naam)
    {
        this.naam = naam;
    }
}



// Run
class App
{
    constructor()
    {
        this.plants = [];
        this.dinos = [];
    }

    runApplication()
    {
        let grass = new Plant("Grass");
        let bessen = new Plant("Bessen");

        let trex = new Dino("Trex", true, 10);
        let dodo = new Dino("Dodo", false, 5);
        let brachiosaurus = new Dino("Brachiosaurus", false, 20);

        this.plants.push(grass, bessen);
        this.dinos.push(trex, dodo, brachiosaurus);

        console.log(this.dinos, this.plants);

        dodo.eetPlant(grass);
        trex.eetDino(dodo);
        brachiosaurus.eetPlant(bessen);

        console.log(this.dinos, this.plants);
    }
}

let app = new App();
app.runApplication();