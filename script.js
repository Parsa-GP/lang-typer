// performance test the function: 
/*
    var start = new Date();  // log start timestamp
    for(var i = 0; i < 50000; i++ ){
        tofa("prndh")
    }
    var end = new Date();  // log end timestamp
    console.log(end - start);
*/

const urlParams = new URLSearchParams(window.location.search);
var lang = urlParams.get('lang');
var langs;

window.addEventListener('load', function () {
    e = document.getElementById("input")
    
    langsInit = {"fa": initFa,  "jp": initJp};
    langs =     {"fa": tofa,    "jp": tojp  };

    if (lang in langs) {
        langsInit[lang]();
    } else {
        console.log("invalid language or the lang parametert is not set.");

        document.getElementById("alrt").style.display = "flex";
    }

    e.setAttribute("placeholder", placeholder);

    // Build the button HTML dynamically using a loop
    let buttonHtml = "";
    for (const diacritic of diacritics) {
      buttonHtml += `<input type="button" onclick="kb('${diacritic.char}')" value="${diacritic.char}" title="${diacritic.title}">`;
    }
  
    // Set the footer content
    document.getElementById("footer").innerHTML = buttonHtml;

    // Set the page title
    document.title = title;

})

function kb(item) {
    var input = e;
    if (document.selection) {
        input.focus();
        range = document.selection.createRange();
        range.text = item;
        range.select();
    }
    else if (input.selectionStart || input.selectionStart === '0') {
        var startPos = input.selectionStart;
        var endPos = input.selectionEnd;
        var cursorPos = startPos;
        var scrollTop = input.scrollTop;
        var baselength = 0;
        input.value = input.value.substring(0, startPos)
            + item
            + input.value.substring(endPos, input.value.length);
        cursorPos += item.length;
        input.focus();
        input.selectionStart = cursorPos;
        input.selectionEnd = cursorPos;
        input.scrollTop = scrollTop;
    }
    else {
        input.value += item;
        input.focus();
    }
    transcribe();
}

function transcribe() {
    var position = e.selectionStart;
    e.value = langs[lang](e.value);
    e.selectionEnd = position;
}
