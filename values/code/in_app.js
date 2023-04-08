/*
    Use url's parameters:
    left; top; right; bottom;

    Use css's class:
    insetsMarginLeft; insetsMarginTop; insetsMarginRight; insetsMarginBottom;
    insetsPaddingLeft; insetsPaddingTop; insetsPaddingRight; insetsPaddingBottom;
    invisibleInApp; clearInApp;

    Do:
    if (have specific direcion)     ->  document.getElementsByClassName("insetsMargin" + direction).style["margin-" + direction] = [*currentMargin* + getUrl'sParams(direction)] + "px";
    if (have specific direcion)     ->  documtnt.getElementsByClassName("insetsPadding" + direction).style["padding-" + direction] = [*currentPadding* + getUrl'sParams(direction)] + "px";
    if (have anyone direction)      ->  document.getElementsByClassName("invisibleInApp").style.display = "none";
    if (have anyone direction)      ->  document.getElementsByClassName("clearInApp").classList = [];
*/

const InAppModule = (function(){
    const urlParams = getParamsFromUrl();

    if(isInApp()){
        setMargin("left");
        setMargin("top");
        setMargin("right");
        setMargin("bottom");
        setPadding("left");
        setPadding("top");
        setPadding("right");
        setPadding("bottom");
        setInvisible();
        setClearClassList();
    }


    document.getElementsByClassName("invisibleInApp")

    function getParamsFromUrl(){
        const queryString = window.location.search;
        return new URLSearchParams(queryString);
    }

    function isInApp(){
        if(urlParams.get("left") != null)
            return true;
        if(urlParams.get("top") != null) 
            return true;
        if(urlParams.get("right") != null) 
            return true;
        if(urlParams.get("bottom") != null) 
            return true;
        return false;
    }

    function setMargin(direction){
        setDimension("margin", direction);
    }

    function setPadding(direction){
        setDimension("padding", direction);
    }

    function setDimension(type, direction){
        const length = parseInt(urlParams.get(direction));
        if(length == null)
            return;
        const directionWithBigLetter = direction.charAt(0).toUpperCase() + direction.slice(1);
        const typeWithBigLetter = type.charAt(0).toUpperCase() + type.slice(1);
        console.log("insets" + typeWithBigLetter + directionWithBigLetter);
        const elements = document.getElementsByClassName("insets" + typeWithBigLetter + directionWithBigLetter);
        console.log(elements.length);
        Array.from(elements).forEach(element => {
            const prev = parseInt(getComputedStyle(element).getPropertyValue(type + "-" + direction)) || 0;
            const current = prev + length;
            element.style.setProperty(type + "-" + direction, current + "px");
        });
    }

    function setInvisible(){
        const elements = document.getElementsByClassName("invisibleInApp");
        Array.from(elements).forEach(element => {
            element.style.display = "none";
        });
    }
    
    function setClearClassList(){
        const elements = document.getElementsByClassName("clearInApp");
        Array.from(elements).forEach(element => {
            element.classList = [];
        });
    }
})();

