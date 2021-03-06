var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
    var pacman = Math.random()
    if(pacman < 0.5) {
        makeRect(0, 0, 250, 100, "black", 1)
        makeCircle(40, 50, 15, "yellow", 1)
        makePolygon("60,35 60,65 40,50", "black", 1)
        makeCircle(60, 50, 3, "white", 1)
        makeCircle(80, 50, 3, "white", 1)
        makeCircle(100, 50, 3, "white", 1)
        makeCircle(120, 50, 6, "white", 1)
        makeCircle(140, 50, 3, "white", 1)
        makeCircle(160, 50, 3, "white", 1)
        makeCircle(180, 50, 3, "white", 1)
        makeRect(200, 42.5, 25, 18, "red", 1)
        makeEllipse(210, 42.5, 10, 11, "red", 1)
        makeEllipse(215, 42.5, 10, 11, "red", 1)
        makeRect(210, 31.5, 5, 10, "red", 1)
        makeRect(200, 50, 5, 15, "red", 1)
        makeRect(210, 50, 5, 15, "red", 1)
        makeRect(220, 50, 5, 15, "red", 1)
        makeCircle(206, 45, 5, "white", 1)
        makeCircle(217, 45, 5, "white", 1)
        makeCircle(215, 47, 2, "blue", 1)
        makeCircle(205, 47, 2, "blue", 1)
    } else {
        makeRect(0, 0, 250, 100, "black", 1)
        makeCircle(40, 50, 15, "yellow", 1)
        makePolygon("60,35 60,65 40,50", "black", 1)
        makeCircle(60, 50, 3, "white", 1)
        makeCircle(80, 50, 3, "white", 1)
        makeCircle(100, 50, 3, "white", 1)
        makeCircle(120, 50, 3, "white", 1)
        makeCircle(140, 50, 3, "white", 1)
        makeCircle(160, 50, 3, "white", 1)
        makeCircle(180, 50, 3, "white", 1)
        makeRect(200, 42.5, 25, 18, "blue", 1)
        makeEllipse(210, 42.5, 10, 11, "blue", 1)
        makeEllipse(215, 42.5, 10, 11, "blue", 1)
        makeRect(210, 31.5, 5, 10, "blue", 1)
        makeRect(200, 50, 5, 15, "blue", 1)
        makeRect(210, 50, 5, 15, "blue", 1)
        makeRect(220, 50, 5, 15, "blue", 1)
        makeRect(205, 43, 5, 5, "white", 1)
        makeRect(215, 43, 5, 5, "white", 1)
        makeRect(205, 55, 2, 2, "white", 1)
        makeRect(207, 53, 2, 2, "white", 1)
        makeRect(209, 53, 2, 2, "white", 1)
        makeRect(211, 55, 2, 2, "white", 1)
        makeRect(213, 55, 2, 2, "white", 1)
        makeRect(215, 53, 2, 2, "white", 1)
        makeRect(217, 53, 2, 2, "white", 1)
        makeRect(219, 55, 2, 2, "white", 1)
    }
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
    var flash = Math.random()
    if(flash < 0.5) {
        makeRect(0, 0, 250, 100, "red", 1)
        makeCircle(125, 45, 32, "yellow", 1)
        makeCircle(125, 45, 30, "white",1)
        makePolygon("160,5 115,40 125,40 105,60 115,60 95,90", "yellow", 1)
        makePolygon("145,35 135,35 117,60", "yellow", 1)
        makePolygon("120,55 135,55 90,95", "yellow", 1)
    } else {
        makeRect(0, 0, 250, 100, "yellow", 1)
        makeCircle(125, 45, 32, "red", 1)
        makeCircle(125, 45, 30, "black",1)
        makePolygon("160,5 115,40 125,40 105,60 115,60 95,90", "red", 1)
        makePolygon("145,35 135,35 117,60 ", "red", 1)
        makePolygon("120,55 135,55 90,95", "red", 1)
    }
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
    var batman = Math.random()
    if (batman < 0.5) {
        makeRect(0, 0, 250, 100, "navy", 1)
        makeRect(115.5, 50, 19, 10, "burlywood", 1)
        makePolygon("115,25 115,40 120,40", "black", 1)
        makePolygon("135,25 135,40 130,40", "black", 1)
        makePolygon("115,40 135,40 135,52 115,52", "black", 1)
        makeCircle(125, 40, 7, "black", 1)
        makeRect(115, 49, 5, 17, "black", 1)
        makeRect(115, 60, 20, 6, "black",  1)
        makeRect(130, 49, 5, 17, "black", 1)
    } else {
        makeRect(0, 0, 250, 100, "black", 1)
        makeCircle(125, 50, 30, "white", 1)
        makePolygon("125,15 137.5,20 135,35 115,35 112.5,20", "black", 1)
        makePolygon("135,90 170,50 140,60", "black", 1)
        makePolygon("115,90 110,60 80,50", "black", 1)
        makePolygon("107.5,40 120,50 110,50", "red", 1)
        makePolygon("142,40 140,50 130,50", "red", 1)
    }   
}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    // Generate a random number between 0 and 1, and store it in a variable.
    var number = Math.random()
    // If the number is less than 0.33, call the function to create your first scene.
    if (number<0.33) {
        alert(createFirstScene())
    }
    
    // Else, if the number is less than 0.67, call the function to create your second scene.
    else if (number<0.67){
        alert(createSecondScene())
    }
    
    
    // Else, call the function to create your third scene.
    else {
        alert(createThirdScene())
    }
    
    
}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}