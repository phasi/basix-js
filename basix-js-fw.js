/* Basix JS Framework
*  Author: Pasi Talvitie
*  Created on: 24.10.2016
*
*/

/*
** --------------- SETTING AND GETTING ELEMENTS -------------------------
*/


/* GET ELEMENT, ELEMENT INNER HTML OR ELEMENT INNER TEXT
** (use BXGetElement(id) instead of document.getElementById(id))
*/

// BXGetElement(id)
function BXGetElement(id) {
    return document.getElementById(id);
}
// BXGetElementHTML(id)
function BXGetElementHTML(id) {
    return BXGetElement(id).innerHTML;
}
// BXGetElementText(id)
function BXGetElementText(id) {
    return BXGetElement(id).innerText;
}


/* SET ELEMENT INNER HTML OR INNER TEXT */

// BXSetElementHTML(id, value)
function BXSetElementHTML(id, value) {
    BXGetElement(id).innerHTML = value;
}

// BXSetElementText(id, value)
function BXSetElementText(id, value) {
    BXGetElement(id).innerText = value;
}



/* -------------------- METHODS --------------------------- */


/** BOXES */

// BXCreateBox(settings)
/**
 * ## SETTINGS ##
 * settings.parentId (required)
 * settings.boxId (required)
 * settings.width (required)
 * settings.height (required)
 * settings.className (optional)
 * settings.position (optional)
 * settings.text (optional) # parent element div (not paragraph) as created with BXCreateElement()
 * settings.border (optional)
 * settings.boxShadow (optional)
 * settings.borderRadius (optional)
 * 
 */
function BXCreateBox(settings) {
    BXCreateElement(settings.parentId, "div", settings.text, settings.boxId);
    BXGetElement(settings.boxId).style.width = settings.width;
    BXGetElement(settings.boxId).style.height = settings.height;
    if (settings.className != null) {
    BXSetClass(settings.boxId, settings.className);
    }
    if (settings.position != null) {
    BXSetElementPosition(settings.boxId, settings.position);
    }
    if (settings.border != null) {
    BXSetBorder(settings.boxId, settings.border);
    }
    if (settings.boxShadow != null) {
    BXSetBoxShadow(settings.boxId, settings.boxShadow);
    }
    if (settings.borderRadius != null) {
    BXSetBorderRadius(settings.boxId, settings.borderRadius);
    }
}


/** TEXT AND BACKGROUND COLORS */

// BXSetColor(id, value)
function BXSetColor(id, value) {
    BXGetElement(id).style.color = value;
}
// BXSetBGColor(id, value)
function BXSetBGColor(id, value) {
    BXGetElement(id).style.backgroundColor = value;
}
// BXSetBGImage(id, value)
function BXSetBGImage(id, value) {
    BXGetElement(id).style.backgroundImage = value;
}


/** BORDERS, SHADOWS AND RADIUSES */

// BXSetBorder(id, value)
function BXSetBorder(id, value) {
    BXGetElement(id).style.border = value;
}
// BXSetBoxShadow(id, value)
function BXSetBoxShadow(id, value) {
    BXGetElement(id).style.boxShadow = value;
}
// BXSetBorderRadius(id, value)
function BXSetBorderRadius(id, value) {
    BXGetElement(id).style.borderRadius = value;
}

/** MARGINS, PADDINGS, POSITIONS */

// BXSetElementPosition(id, value)
function BXSetElementPosition(id, value) {
    BXGetElement(id).style.position = value;
}

/** SIZES */

// BXFollowSize(id, followId)
function BXFollowSize(id, followId) {
    var bxElement = BXGetElement(id);
    var bxFollowedElement = BXGetElement(followId);
    bxElement.style.height = bxFollowedElement.clientHeight + "px";
    bxElement.style.width = bxFollowedElement.clientWidth + "px";
}

// BXFollowWidth(id, followId)
function BXFollowWidth(id, followId) {
    var bxElement = BXGetElement(id);
    var bxFollowedElement = BXGetElement(followId);
    bxElement.style.width = bxFollowedElement.clientWidth + "px";
}

// BXFollowHeight(id, followId)
function BXFollowHeight(id, followId) {
    var bxElement = BXGetElement(id);
    var bxFollowedElement = BXGetElement(followId);
    bxElement.style.height = bxFollowedElement.clientHeight + "px";
}


/** VISIBILITY */

// BXSetVisibility(id, visibility) (manual: user needs to input visibility setting)
function BXSetVisibility(id, visibility) {
    BXGetElement(id).style.visibility = visibility;
}
// BXChangeVisibility(id) (automatic: change from visible to hidden and vice versa)
function BXChangeVisibility(id) {
    var bxElement = BXGetElement(id);
    switch (bxElement.style.visibility) {
        case "":
            bxElement.style.visibility = "hidden";
            break;
        case null:
            bxElement.style.visibility = "hidden";
            break;
        case "initial":
            bxElement.style.visibility = "hidden";
            break;
        case "inherit":
            bxElement.style.visibility = "hidden";
            break;
        case "collapse":
            bxElement.style.visibility = "hidden";
            break;
        case "visible":
            bxElement.style.visibility = "hidden";
            break;
        case "hidden":
            bxElement.style.visibility = "visible";
            break;
    }
}


/** CLASSES */

function BXGetClass(className) {
    return document.getElementsByClassName(className);
}

// BXSetClass(id)
function BXSetClass(id, className) {
    BXGetElement(id).className = className;
}
// BXAddClass(id)
function BXAddClass(id, className) {
    BXGetElement(id).className += " " + className;
}


/** CREATING AND DELETING ELEMENTS */

// BXSetNewElement(type, text, newElementId) // text is optional
// will be used by BXCreateElement and BXReplaceElement
function BXSetNewElement(type, text, newElementId) {
    var bxElement = document.createElement(type);
    bxElement.id = newElementId;
    if (text != undefined) {
        bxElementTextNode = document.createTextNode(text);
        bxElement.appendChild(bxElementTextNode);
    }
    return bxElement;
}

// BXCreateElement(id, type, text, newElementId)
function BXCreateElement(id, type, text, newElementId) {
    if (text != undefined || text != null || text != "") {
    var bxElement = BXSetNewElement(type, text, newElementId);
    } else {
    var bxElement = BXSetNewElement(type, undefined, newElementId);
    }

    BXGetElement(id).appendChild(bxElement); 
}

// BXRemoveElement(id, childId)
function BXRemoveElement(id, childId) {
    var bxElement = BXGetElement(id);
    bxElement.removeChild(BXGetElement(childId));
}

// BXReplaceElement(id, childId, type, text, newElementId) text and newElementId are optional
function BXReplaceElement(id, childId, type, text, newElementId) {
    if (text == undefined && newElementId == undefined) {
        var bxElement = BXSetNewElement(type);
    } else if (text == undefined) {
        var bxElement = BXSetNewElement(type, undefined, newElementId);
    } else if (newElementId == undefined) {
        var bxElement = BXSetNewElement(type, text, childId)
    } else {
        var bxElement = BXSetNewElement(type, text, newElementId);
    }
    var bxChildElement = BXGetElement(childId);
    BXGetElement(id).replaceChild(bxElement, bxChildElement);
}

/** POPUPS */

// BXCreatePopup() (beta)
function BXCreatePopup(url, name, specs, content) {
    var w = window.open(url, name, specs);
    w.document.write(content);
}

/** EVENTS */

// BXAddEventListener(id, event, CustomFunction, useCapture) (if id is "$doc" then addEventListener to whole document)
function BXAddEventListener(id, event, CustomFunction, useCapture) {
    if (id != "$doc" && (useCapture == undefined || useCapture == null || useCapture == ""))
    {
        BXGetElement(id).addEventListener(event, CustomFunction);
    }
    else if (id == "$doc" && (useCapture == undefined || useCapture == null || useCapture == ""))
    {
        document.addEventListener(event, CustomFunction);
    }
    else if (id == "$doc" && useCapture != null) 
    {
        document.addEventListener(event, CustomFunction, useCapture);
    }
    else
    {
        BXGetElement(id).addEventListener(event, CustomFunction, useCapture);
    } 
}

// BXRemoveEventListener(id, event, CustomFunction)
function BXRemoveEventListener(id, event, CustomFunction, useCapture) {
    if (useCapture == undefined && id != "$doc") {
        BXGetElement(id).removeEventListener(event, CustomFunction);
    } else if (useCapture != undefined && id != "$doc") {
        BXGetElement(id).removeEventListener(event, CustomFunction, useCapture);
    } else if (useCapture == undefined && id == "$doc") {
        document.removeEventListener(event, CustomFunction);
    } else if (useCapture != undefined && id == "$doc") {
        document.removeEventListener(event, CustomFunction, useCapture);
    }
}



/** MATH */

// BXSortIntArray(direction) (asc / desc)
function BXSortIntArray(array, direction) {
    if (direction == "asc")
    {
        array.sort(function(a, b){return a - b});
        return array;
    }
    else if (direction == "desc")
    {
        array.sort(function(a, b){return b - a});
        return array;
    }
}
// BXCheckVisible(id) // Check whether the element is visible in the viewport or not
function BXCheckVisible(id) {
  var bxElement = BXGetElement(id);
  var rect = bxElement.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}


/** ANIMATIONS */

// BXAnimateFadeIn(id, length)
function BXAnimateFadeIn(id, length) {

        bxElement = BXGetElement(id);
        var count = 0;
        var interval = setInterval(frame, length);
        function frame() {
            if (count == 100) {
                clearInterval(interval);
            } else  {
                count++;
                var bxOpacity = (count / 100);
                bxElement.style.opacity = bxOpacity;
            }
        }
}
// BXAnimateFadeOut(id, length)
function BXAnimateFadeOut(id, length) {

        bxElement = BXGetElement(id);
        var count = 100;
        var interval = setInterval(frame, length);
        function frame() {
            if (count == 0) {
                clearInterval(interval);
            } else  {
                count--;
                var bxOpacity = (count / 100);
                bxElement.style.opacity = bxOpacity;
            }
        }
}


/** HTTP REQUESTS */

// BXHttpGet(url, function) returns JSON object or array
function BXHttpGet(url, successFunction) {
    try {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = processRequest;
        function processRequest(e) {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var bxResponse = JSON.parse(xhr.responseText); //xhr.responseText;
                successFunction(bxResponse);
            }
        }
        xhr.send(null);
    } catch (e) {
        console.log(e);
    }
}
// BXHttpPost(url, function) returns JSON object or array
function BXHttpPost(url, data, successFunction) {
    try {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.onreadystatechange = processRequest;
        function processRequest(e) {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var bxResponse = JSON.parse(xhr.responseText); //xhr.responseText;
                successFunction(bxResponse);
            }
        }
        xhr.send(data);
    } catch (e) {
        console.log(e);
    }
}