document.onkeydown = function(e) {
    console.log(e.key);
    switch (e.key) {
        case "a":
            console.log("BRUH")
            document.dispatchEvent(new KeyboardEvent('keydown', {'key':'ArrowLeft'}))
    }
}

document.onclick = function(element) {
    var parent = element.parentNode;
    console.log(parent.element);
    var content = parent.querySelector("div");
    console.log(content.element);
}
