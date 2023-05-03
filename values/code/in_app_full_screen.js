/*
    Use css's class:
        insetsMarginLeft; insetsMarginTop; insetsMarginRight; insetsMarginBottom;
        insetsPaddingLeft; insetsPaddingTop; insetsPaddingRight; insetsPaddingBottom;
        invisibleInApp; clearInApp;

    Use js:
        InAppFullScreenModule.initialization();
        InAppFullScreenModule.addInsets(left, top, right, bottom);

    Do:
        initialization();
            document.getElementsByClassName("invisibleInApp").style.display = "none";
            document.getElementsByClassName("clearInApp").classList = [];

        addInsets(left, top, right, bottom);
            document.getElementsByClassName("insetsMargin" + direction).style["margin-" + direction] = [*currentMargin* + direction_value] + "px";
            documtnt.getElementsByClassName("insetsPadding" + direction).style["padding-" + direction] = [*currentPadding* + direction_value] + "px";
*/

const InAppFullScreenModule = (function(){
    let insets;

    function initialization(){
        setInvisible();
        setClearClassList();
    }

    function addInsets(left, top, right, bottom){
        insets = {left, top, right, bottom};
        
        setMargin("left");
        setMargin("top");
        setMargin("right");
        setMargin("bottom");
        setPadding("left");
        setPadding("top");
        setPadding("right");
        setPadding("bottom");
    }

    return {
        initialization,
        addInsets
    };

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

    function setMargin(direction){
        setDimension("margin", direction);
    }

    function setPadding(direction){
        setDimension("padding", direction);
    }

    function setDimension(type, direction){
        const length = parseInt(getInset(direction));
        if(length == null)
            return;
        const directionWithBigLetter = direction.charAt(0).toUpperCase() + direction.slice(1);
        const typeWithBigLetter = type.charAt(0).toUpperCase() + type.slice(1);
        const elements = document.getElementsByClassName("insets" + typeWithBigLetter + directionWithBigLetter);
        Array.from(elements).forEach(element => {
            const prev = parseInt(getComputedStyle(element).getPropertyValue(type + "-" + direction)) || 0;
            const current = prev + length;
            element.style.setProperty(type + "-" + direction, current + "px");
        });
    }

    function getInset(direction){
        switch (direction){
            case "left":
                return insets[0];
            case "top":
                return insets[1];
            case "right":
                return insets[2];
            case "bottom":
                return insets[3];
        }
    }
})();

