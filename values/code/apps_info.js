const appIcons = document.getElementsByClassName("logo-app-icon");
var lastlastScrollPosition;
var lastScrollPosition;
var movedIcon;

setAppIconsEvents();

function onScroll(){
    currentScrollPosition = document.body.scrollTop;
    if(lastScrollPosition != currentScrollPosition || lastlastScrollPosition != lastScrollPosition){
        for (const icon of appIcons){
            icon.style.top = (lastScrollPosition - currentScrollPosition) * -0.2;
            icon.style.left = 0;
        }
        lastlastScrollPosition = lastScrollPosition;
        lastScrollPosition = currentScrollPosition;
    }
    setTimeout('onScroll()',100);
}

function setAppIconsEvents(){
    for (const icon of appIcons){
        icon.addEventListener("mousedown", onDragIcon);
        icon.addEventListener("mousemove", onMoveIcon);
        icon.addEventListener("mouseleave", onDropIcon);
        icon.addEventListener("mouseup", onDropIcon);
        icon.addEventListener("touchstart", onDragIcon)
        icon.addEventListener("touchmove", onMoveIcon);
        icon.addEventListener("touchend", onDropIcon);
    }
}

function onDragIcon(e){
    var icon = e.target;
    movedIcon = icon;
    goToCursor(icon, e);
}

function onMoveIcon(e){
    var icon = e.target;
    if(movedIcon == icon)
        goToCursor(icon, e);
}

function onDropIcon(e){
    var icon = e.target;
    if(movedIcon == icon){
        movedIcon = null;
        backToCenter(icon);
    }
}

function goToCursor(icon, e){
    var iconRect = icon.getBoundingClientRect();
    var halfLenght = iconRect.width/2;
    var x = getPointX(e) - iconRect.left - halfLenght; //x,y distanse between icon and cursor.
    var y = getPointY(e) - iconRect.top - halfLenght;
    var newLeft = icon.offsetLeft + x; //position icon go to cursor
    var newTop = icon.offsetTop + y;
    var goOutsideBackground = isGoOutsideBackground(newLeft, newTop, halfLenght);
    var goodClick = isGoodClick(icon, newLeft, newTop, halfLenght);
    if(!goOutsideBackground && goodClick){
        icon.style.left = newLeft;
        icon.style.top = newTop;
    } else 
        onDropIcon(e);
}

function getPointX(e){
    if(e.type == "mousemove" || e.type == "mousedown")
        return e.clientX;
    return e.touches[0].clientX;
}

function getPointY(e){
    if(e.type == "mousemove" || e.type == "mousedown")
        return e.clientY;
    return e.touches[0].clientY;
}

function isGoOutsideBackground(left, top, halfLenght){
    if(left < halfLenght && top < halfLenght && left > -1*halfLenght && top > -1*halfLenght)
        return false;
    return true;
}

function isGoodClick(icon, left, top, halfLenght){ /* good click must be (first and near center) or not first */
    if(icon.offsetLeft != 0 || icon.offsetTop != 0) //left,top of icon is set on 0 during first click - this 'if' show not first click
        return true;
    if(left < halfLenght*0.2 && top < halfLenght*0.2) //near is some piece of halfLenght - this 'if' show near click
        return true;
    return false; //so this must be first but not near click;
}

function backToCenter(icon){
    icon.style.left = 0;
    icon.style.top = 0;
}