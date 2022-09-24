setAppBar();
setRipple();
disableCopyImageByDragg();

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
        case "http://guzooo.github.io":
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