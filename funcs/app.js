class App
{
    runApplication()
    {
        console.log("Hello world?");

        app.Mario();
        app.Bowser();
        console.log(app.numbers())
        app.bruh();
    }

    Mario()
    {
        console.log("MARIO!!");
    }

    Bowser()
    {
        console.log("BWAHAHA!!!");
    }

    numbers()
    {
        let a = 1;
        let b = 2;

        let ab = a + b;
        return ab
    }

    bruh()
    {
        let c = "Br";
        let d = "uh";

        let cd = "Ok " + c + d
        console.log(cd)
    }
}

let app = new App();

app.runApplication();
