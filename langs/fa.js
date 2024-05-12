function initFa() {
    // Get the input element by ID
    const inputElement = e;
  
    // Set the placeholder text
    inputElement.setAttribute("placeholder", "روباه قهوه ای سریع از روی سگ تنبل می پرد.");
  
    // Find the footer element
    const footerElement = document.getElementById("footer");
  
    // Create buttons for Arabic diacritics
    const diacritics = [
        { char: "ّ", title: "tajdid" },
        { char: "َ", title: "fathe" },
        { char: "ِ", title: "kasre" },
        { char: "ُ", title: "zamme" },
        { char: "ً", title: "tanvin fathe" },
        { char: "ٍ", title: "tanvin kasre" },
        { char: "ٌ", title: "tanvin zame" },
        { char: "ْ", title: "sokoon" },
        { char: "«", title: "giyomeh baz" },
        { char: "»", title: "giyomeh baste" },
        { char: "ئ", title: "ye ba hamze" },
        { char: "ؤ", title: "vav ba hamze" },
        { char: "ٓ", title: "kolah" },
        { char: "ٰ", title: "alef koochak" },
        { char: "‌", title: "no-space space" },
        { char: "ٔ", title: "hamze koochak" },
        { char: "ء", title: "hamze" },
        { char: "﷼", title: "rial" },
        { char: "×", title: "zarb" },
        { char: "٪", title: "darsad" },
        { char: "؟", title: "alamate soal" },
    ];
  
    // Build the button HTML dynamically using a loop
    let buttonHtml = "";
    for (const diacritic of diacritics) {
      buttonHtml += `
        <input type="button" onclick="kb('${diacritic.char}')" value="${diacritic.char}" title="${diacritic.title}">
      `;
    }
  
    // Set the footer content
    footerElement.innerHTML = buttonHtml;
  
    // Append the footer to the document body
    document.body.appendChild(footerElement);
  
    // Set the page title
    document.title = "Persian!!";
  }
  
  function tofa(text) {
    // Define a map for character replacements
    const charMap = {
      "0": "۰",
      "0": "۰",
      "1": "١",
      "2": "۲",
      "3": "۳",
      "4": "۴",
      "5": "۵",
      "6": "۶",
      "7": "۷",
      "8": "۸",
      "9": "۹",
  
      "تt": "ط",
      "t": "ت",
  
      "صs": "ث",
      "سs": "ص",
      "s": "س",
  
      "صc": "ث",
      "سc": "ص",
  
      "ضz": "ظ",
      "ذz": "ض",
      "زz": "ذ",
      "z": "ز",
  
      "عa": "اع",
      "اa": "ع",
      "a": "ا",
  
      "عe": "اع",
      "اe": "ع",
      "اe": "ع",
      "e": "ا",
  
      "یi": "ای",
      "i": "ی",
  
      "وo": "او",
      "o": "و",
  
      "زh": "ژ",
      "ذh": "ژ",
      "ضh": "ژ",
      "ظh": "ژ",
  
      "سh": "ش",
      "صh": "ش",
      "ثh": "ش",
  
  
      "کh": "خ",
  
      "قh": "غ",
      "گh": "ق",
  
      "هh": "ح",
      "h": "ه",
  
  
      "A": "آ",
      "b": "ب",
      "p": "پ",
      "j": "ج",
      "c": "چ",
      "d": "د",
      "r": "ر",
      "f": "ف",
      "k": "ک",
      "g": "گ",
      "l": "ل",
      "m": "م",
      "n": "ن",
      "v": "و",
      "w": "و",
      "y": "ی",
  
      ",": "،",
    };
  
    // Replace characters using the map
    let convertedText = text.split("").map((char) => charMap[char] || char).join("");
    
    return convertedText;
  }
  