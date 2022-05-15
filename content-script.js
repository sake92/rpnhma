
function mapObj() {
    return {
        auto: "audo",

        bakir: "bagir",
        buket: "buged",
        brokule: "brogule",

        cappuccino: "gabuđino",

        "coca-cola": "goga-gola",
        "coca cola": "goga gola",
        "cocacola": "gogagola",

        ćevap: "đevab",

        čačak: "džadžag",

        dodir: "totir",

        forum: "vorum",

        golub: "kolup",
        gola: "kola",
        gospodo: "gospoto",
        gospodin: "kospotin",

        kapućino: "gabuđino",
        kapučino: "gabudžino",
        komšija: "komžija",
        koronavirus: "goronaviruz",
        korona: "gorona",
        košarka: "gožarga",
        kolač: "goladž",
        kola: "gola",
        križaljka: "grižaljga",
        kultura: "guldura",
        klix: "gligz",

        laku: "lagu",
        leđa: "leća",
        lifestyle: "lajvzdajl",

        muzika: "muziga",

        namještaljka: "namježdaljga",
        nameštaljka: "nameždaljga",
        nastup: "nazdub",
        naš: "naž",
        noga: "noka",
        nogomet: "nogomed",
        noć: "nođ",

        papagaj: "babagaj",
        patka: "badga",
        politika: "bolidiga",
        policija: "bolicija",
        posao: "bozao",
        predstavnik: "bredzdavnig",
        proljeće: "broljeđe",
        proleće: "broleđe",
        prvi: "brvi",

        sa: "za",
        sport: "zbord",
        showbiz: "žoubiz",
        skijanje: "zgijanje",

        šiš: "žiž",

        tanjir: "danjir",
        tenis: "deniz",

        vijesti: "vijezdi",
        vučić: "vudžiđ",

        zakon: "zagon",
        život: "šifot",
    };
}

replaceTextNodes(document.body);

// https://stackoverflow.com/questions/42040730/faster-way-of-replacing-text-in-all-dom-elements
function replaceTextNodes(node) {
    node.childNodes.forEach(function (el) {
        if (el.nodeType === 3) {  // If this is a text node, replace the text
            if (el.nodeValue.trim() !== "") { // Ignore this node it it an empty text node
                const newText = replaceAll(el.nodeValue);
                el.nodeValue = newText;
            }
        } else { // Else recurse on this node
            replaceTextNodes(el);
        }
    });
}

// https://stackoverflow.com/a/15604206/4496364
function replaceAll(str) {
    var re = new RegExp(Object.keys(mapObj()).join("|"), "gi");

    return str.replace(re, function (matched) {
        const replacement = mapObj()[matched.toLowerCase()];

        const firstChar = matched.charAt(0);
        if (firstChar == firstChar.toUpperCase()) {
            return replacement.charAt(0).toUpperCase() + replacement.slice(1);
        } else {
            return replacement;
        }
    });
}
