
const reactSkill = 65;
const phpSkill = 45;
const cSkill = 50;
const reduxSkill = 55;

function move() {

    console.log(window.inner)

    if(window.scrollY > 200 || window.innerWidth < 900){
        var reactElem = document.getElementById("reactProgress");
        var phpElem = document.getElementById("phpProgress");
        var cElem = document.getElementById("cProgress");
        var reduxElem = document.getElementById("reduxProgress");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {

            if (width >= 100) {
                clearInterval(id);
            } else {

                width++;

                if(width < reactSkill){
                    reactElem.style.width = width + '%';
                }

                if(width < phpSkill){
                    phpElem.style.width = width + '%';
                }

                if(width < cSkill){
                    cElem.style.width = width + '%';
                }

                if(width < reduxSkill){
                    reduxElem.style.width = width + '%';
                }
            }
        }


        document.removeEventListener("scroll", move);
    }
}

function responsiveNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


document.addEventListener("scroll", move);