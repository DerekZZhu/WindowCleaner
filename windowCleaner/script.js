let getSiblings = function (e) {
    let siblings = [];
    let sibling = e;
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
}

function removeSiblings() {
    let sybil = getSiblings(document.body)
    for (var i = 0; i < sybil.length; i++) {
        sybil[i].remove();
    }
}

function huntScripts() {
    var i, sybil
    sybil = document.body.getElementsByTagName("script")
    for (i = 0; i < sybil.length; i++) {
        if(sybil[i].hasAttribute('defer')) {
            sybil[i].remove()
        }
    }
}

function headHunt() {
    var i, sybil
    sybil = document.head.getElementsByTagName("script")
    for (i = 0; i < sybil.length; i++) {
        sybil[i].remove()
    }
}


function launchScripts() {
    huntScripts();
    headHunt();
    removeSiblings();
    console.log("running");
}


setInterval(function() {launchScripts()}, 1000)