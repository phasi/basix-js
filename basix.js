var basixJS = function() {

};


/* Getting elements by ID, and by their inner HTMLs and Texts */


// getID(id)
basixJS.prototype.getID = function(id) {
	return document.getElementById(id);
};
// getInnerHTML(id)
basixJS.prototype.getInnerHTML = function(id) {
    return this.getID(id).innerHTML;
};
// getInnerText(id)
basixJS.prototype.getInnerText = function(id) {
    return this.getID(id).innerText;
};


/* Setting inner HTML or Text */


// setInnerHTML(id, value)
basixJS.prototype.setInnerHTML = function(id, value) {
    this.getID(id).innerHTML = value;
};

// setInnerText(id, value)
basixJS.prototype.setInnerText = function(id, value) {
    this.getID(id).innerText = value;
};

/* Creating, modifying, replacing and deleting elements */

// this.initElement(type, text, newElementId) // text is optional
// will be used by bx.createElement and bx.replaceElement
basixJS.prototype.initElement = function(type, text, newElementId) {
    var bxElement = document.createElement(type);
    bxElement.id = newElementId;
    if (text != undefined) {
        bxElementTextNode = document.createTextNode(text);
        bxElement.appendChild(bxElementTextNode);
    }
    return bxElement;
};

// createElement(parentId, type, text, newElementId)
basixJS.prototype.createElement = function(parentId, type, text, newElementId) {
    if (text != undefined || text != null || text != "") {
    var bxElement = this.initElement(type, text, newElementId);
    } else {
    var bxElement = this.initElement(type, undefined, newElementId);
    }

    this.getID(parentId).appendChild(bxElement); 
};

// removeElement(parentId, childId)
basixJS.prototype.removeElement = function(parentId, childId) {
    var bxElement = this.getID(id);
    bxElement.removeChild(this.getID(childId));
};

// replaceElement(id, childId, type, text, newElementId) 
basixJS.prototype.replaceElement = function(parentId, childId, type, text, newElementId) {
    if (text == undefined && newElementId == undefined) {
        var bxElement = this.initElement(type);
    } else if (text == undefined) {
        var bxElement = this.initElement(type, undefined, newElementId);
    } else if (newElementId == undefined) {
        var bxElement = this.initElement(type, text, childId)
    } else {
        var bxElement = this.initElement(type, text, newElementId);
    }
    var bxChildElement = this.getID(childId);
    this.getID(id).replaceChild(bxElement, bxChildElement);
}

/** Classes */

basixJS.prototype.getClass = function(className) {
    return document.getElementsByClassName(className);
}

// setClass(id)
basixJS.prototype.setClass = function(id, className) {
    this.getID(id).className = className;
}
// addClass(id)
basixJS.prototype.addClass = function(id, className) {
    this.getID(id).className += " " + className;
}

/** Text and background colors */

// setColor(id, value)
basixJS.prototype.setColor = function(id, value) {
    this.getID(id).style.color = value;
}
// setBGColor(id, value)
basixJS.prototype.setBGColor = function(id, value) {
    this.getID(id).style.backgroundColor = value;
}
// setBGImage(id, value)
basixJS.prototype.setBGImage = function(id, value) {
    this.getID(id).style.backgroundImage = value;
}


/** Borders, shadows and radiuses */

// setBorder(id, value)
basixJS.prototype.setBorder = function(id, value) {
    this.getID(id).style.border = value;
}
// setBoxShadow(id, value)
basixJS.prototype.setBoxShadow = function(id, value) {
    this.getID(id).style.boxShadow = value;
}
// setBorderRadius(id, value)
basixJS.prototype.setBorderRadius = function(id, value) {
    this.getID(id).style.borderRadius = value;
}

/** Margins, paddings, positions */

// setElementPosition(id, value)
basixJS.prototype.setElementPosition = function(id, value) {
    this.getID(id).style.position = value;
}

/** Sizes */

// followSize(id, followId)
basixJS.prototype.followSize = function(id, followId) {
    var bxElement = this.getID(id);
    var bxFollowedElement = this.getID(followId);
    bxElement.style.height = bxFollowedElement.clientHeight + "px";
    bxElement.style.width = bxFollowedElement.clientWidth + "px";
}

// followWidth(id, followId)
basixJS.prototype.followWidth = function(id, followId) {
    var bxElement = this.getID(id);
    var bxFollowedElement = this.getID(followId);
    bxElement.style.width = bxFollowedElement.clientWidth + "px";
}

// followHeight(id, followId)
basixJS.prototype.followHeight = function(id, followId) {
    var bxElement = this.getID(id);
    var bxFollowedElement = this.getID(followId);
    bxElement.style.height = bxFollowedElement.clientHeight + "px";
}


/** Visibility */

// setVisibility(id, visibility) (manual: user needs to input visibility setting)
basixJS.prototype.setVisibility = function(id, visibility) {
    this.getID(id).style.visibility = visibility;
}
// changeVisibility(id) (automatic: change from visible to hidden and vice versa)
basixJS.prototype.changeVisibility = function(id) {
    var bxElement = this.getID(id);
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



/** Events */

// addEventListener(id, event, CustomFunction, useCapture) (if id is "$doc" then addEventListener to whole document)
basixJS.prototype.addEventListener = function(id, event, CustomFunction, useCapture) {
    if (id != "$doc" && (useCapture == undefined || useCapture == null || useCapture == ""))
    {
        this.getID(id).addEventListener(event, CustomFunction);
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
        this.getID(id).addEventListener(event, CustomFunction, useCapture);
    } 
}

// removeEventListener(id, event, CustomFunction)
basixJS.prototype.removeEventListener = function(id, event, CustomFunction, useCapture) {
    if (useCapture == undefined && id != "$doc") {
        this.getID(id).removeEventListener(event, CustomFunction);
    } else if (useCapture != undefined && id != "$doc") {
        this.getID(id).removeEventListener(event, CustomFunction, useCapture);
    } else if (useCapture == undefined && id == "$doc") {
        document.removeEventListener(event, CustomFunction);
    } else if (useCapture != undefined && id == "$doc") {
        document.removeEventListener(event, CustomFunction, useCapture);
    }
}



/** Math */

// sortIntArray(direction) (asc / desc)
basixJS.prototype.sortIntArray = function(array, direction) {
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
// checkVisible(id) // Check whether the element is visible in the viewport or not
basixJS.prototype.checkVisible = function(id) {
  var bxElement = this.getID(id);
  var rect = bxElement.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}


/** Animations */

// animateFadeIn(id, length)
basixJS.prototype.animateFadeIn = function(id, length) {

        bxElement = this.getID(id);
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
// animateFadeOut(id, length)
basixJS.prototype.animateFadeOut = function(id, length) {

        bxElement = this.getID(id);
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


/** HTTP Requests */

// httpGet(url, function) returns JSON object or array
basixJS.prototype.httpGet = function(url, successFunction) {
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
// httpPost(url, function) returns JSON object or array
basixJS.prototype.httpPost = function(url, data, successFunction) {
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

/* Miscellaneous */

// createBox(settings)
/**
 * ## SETTINGS ##
 * s.id (required)
 * s.boxId (required)
 * s.width (required)
 * s.height (required)
 * s.className (optional)
 * s.position (optional)
 * s.text (optional) # parent element div (not paragraph) as created with bx.createElement()
 * s.border (optional)
 * s.boxShadow (optional)
 * s.borderRadius (optional)
 * 
 */
basixJS.prototype.createBox = function(settings) {
    this.createElement(settings.id, "div", settings.text, settings.boxId);
    this.getID(settings.boxId).style.width = settings.width;
    this.getID(settings.boxId).style.height = settings.height;
    if (settings.className != null) {
    setClass(settings.boxId, settings.className);
    }
    if (settings.position != null) {
    setElementPosition(settings.boxId, settings.position);
    }
    if (settings.border != null) {
    setBorder(settings.boxId, settings.border);
    }
    if (settings.boxShadow != null) {
    setBoxShadow(settings.boxId, settings.boxShadow);
    }
    if (settings.borderRadius != null) {
    setBorderRadius(settings.boxId, settings.borderRadius);
    }
}

/** Popups */

// createPopup() (beta)
basixJS.prototype.createPopup = function(url, name, specs, content) {
    var w = window.open(url, name, specs);
    w.document.write(content);
}
