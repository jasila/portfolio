window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);



}

function toggleMenu() {
    console.log("toggleMenu");

    //hvordan er toggle ift. add og remove??? HELP
    document.querySelector("#menu").classList.toggle("hidden");

    // let erskjult er lig med navmuligheder når den indeholder class'en hidden
    let erSkjult = document.querySelector("#menu").classList.contains("hidden");
    // hvis navmuligheder er skjult, så skal man se en burgermenu
    if (erSkjult == true) {
        document.getElementById("menuknap").src = "startside/ui/menu.svg"
    }

    //hvis i navmuligheder er skjult skal man se et kryds
    else {
        document.getElementById("menuknap").src = "startside/ui/.svg"
    }
}
