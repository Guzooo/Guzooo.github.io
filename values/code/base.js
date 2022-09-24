setAppBar();
setRipple();
disableCopyImageByDragg();
centerAppsWhenHaveSpace();

/* links on app bar */
function openGooglePlay(){
    open("https://play.google.com/store/apps/dev?id=6989903521291385498");
}

function openMessenger(){
    open("https://www.messenger.com/t/GuzoooApps");
}

function openFacebook(){
    open("https://www.facebook.com/GuzoooApps");
}

function goToHomePage(){
    switch (location.href) {
        case "https://guzooo.github.io/":
        case "http://127.0.0.1/Guzooo/":
            scrollTo({top: 0, behavior: 'smooth'});
            break;
        default:
            location.href = "http://guzooo.github.io";
            break;
    }
}
/*  */

function setAppBar(){
    const topAppBarElement = document.querySelector('.mdc-top-app-bar');
    const appBar =  new mdc.topAppBar.MDCTopAppBar(topAppBarElement);
}

function setRipple(){
    mdc.ripple.MDCRipple.attachTo(document.querySelector('.mdc-icon-button')).unbounded = true;
// mdc.ripple.MDCRipple.attachTo(document.querySelector('.mdc-button'));
}

function disableCopyImageByDragg(){
    const imgs = document.getElementsByTagName('img')
    for (const img of imgs)
        img.setAttribute("draggable", false);
}

function centerAppsWhenHaveSpace(){
    switch (location.href){
        case "https://guzooo.github.io/":
        case "http://127.0.0.1/Guzooo/":
            var appBarBelow = document.getElementById("below_app_bar");
            var footer = document.getElementById("footer");
            var grid = document.getElementsByClassName("mdc-layout-grid")[0];
            var appBarHeight = appBarBelow.offsetHeight + appBarBelow.offsetTop;
            var footerHeight = footer.offsetHeight;
            var gridHeight = grid.offsetHeight + 30;
            var windowHeight = innerHeight;
            console.log(appBarHeight *2 + gridHeight);
            console.log(  innerHeight);
            if((appBarHeight + footerHeight + gridHeight) < windowHeight){
                console.log("B");
                var centerCells = document.getElementsByClassName("center-cell");
                centerCellHeight = (windowHeight - appBarHeight - footerHeight - gridHeight)/2;
                centerCells[0].style.height = centerCellHeight;
                centerCells[1].style.height = centerCellHeight;
            }
        default:
            break;
    }
}