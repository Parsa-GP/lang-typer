function initFa() {
    placeholder = "روباه قهوه ای سریع از روی سگ تنبل می پرد."
    title = "Persian!!"
  
    diacritics = [
        { char: "ّ", title: "tajdid" },
        { char: "َ", title: "fathe" },
        { char: "ِ", title: "kasre" },
        { char: "ُ", title: "zamme" },
        { char: "ً", title: "tanvin fathe" },
        { char: "ٍ", title: "tanvin kasre" },
        { char: "ٌ", title: "tanvin zame" },
        { char: "ْ", title: "sokoon" },
        { char: "ٓ", title: "kolah" },
        { char: "ٰ", title: "alef koochak" },
        { char: "ٔ", title: "hamze koochak" },
        { char: "«", title: "giyomeh baz" },
        { char: "»", title: "giyomeh baste" },
        { char: "ئ", title: "ye ba hamze" },
        { char: "ؤ", title: "vav ba hamze" },
        { char: "ء", title: "hamze" },
        { char: "×", title: "zarb" },
        { char: "÷", title: "taqsim" },
        { char: "﷼", title: "rial" },
        { char: "‌", title: "no-space space" },
    ];
}
  

function tofa(text) {

    text = text.replace(/0/g, "۰");
    text = text.replace(/1/g, "١");
    text = text.replace(/2/g, "۲");
    text = text.replace(/3/g, "۳");
    text = text.replace(/4/g, "۴");
    text = text.replace(/5/g, "۵");
    text = text.replace(/6/g, "۶");
    text = text.replace(/7/g, "۷");
    text = text.replace(/8/g, "۸");
    text = text.replace(/9/g, "۹");

    text = text.replace(/تt/g, "ط");
    text = text.replace(/t/g, "ت");

    text = text.replace(/صs/g, "ث");
    text = text.replace(/سs/g, "ص");
    text = text.replace(/s/g, "س");

    text = text.replace(/صc/g, "ث");
    text = text.replace(/سc/g, "ص");

    text = text.replace(/ضz/g, "ظ");
    text = text.replace(/ذz/g, "ض");
    text = text.replace(/زz/g, "ذ");
    text = text.replace(/z/g, "ز");

    text = text.replace(/عa/g, "اع");
    text = text.replace(/اa/g, "ع");
    text = text.replace(/a/g, "ا");

    text = text.replace(/عe/g, "اع");
    text = text.replace(/اe/g, "ع");
    text = text.replace(/اe/g, "ع");
    text = text.replace(/e/g, "ا");

    text = text.replace(/یi/g, "ای");
    text = text.replace(/i/g, "ی");

    text = text.replace(/وo/g, "او");
    text = text.replace(/o/g, "و");

    text = text.replace(/زh/g, "ژ");
    text = text.replace(/ذh/g, "ژ");
    text = text.replace(/ضh/g, "ژ");
    text = text.replace(/ظh/g, "ژ");

    text = text.replace(/سh/g, "ش");
    text = text.replace(/صh/g, "ش");
    text = text.replace(/ثh/g, "ش");


    text = text.replace(/کh/g, "خ");

    text = text.replace(/قh/g, "غ");
    text = text.replace(/گh/g, "ق");
    
    text = text.replace(/قq/g, "غ");
    text = text.replace(/q/g, "ق");

    text = text.replace(/هh/g, "ح");
    text = text.replace(/h/g, "ه");


    text = text.replace(/A/g, "آ");
    text = text.replace(/b/g, "ب");
    text = text.replace(/p/g, "پ");
    text = text.replace(/j/g, "ج");
    text = text.replace(/c/g, "چ");
    text = text.replace(/d/g, "د");
    text = text.replace(/r/g, "ر");
    text = text.replace(/f/g, "ف");
    text = text.replace(/k/g, "ک");
    text = text.replace(/g/g, "گ");
    text = text.replace(/l/g, "ل");
    text = text.replace(/m/g, "م");
    text = text.replace(/n/g, "ن");
    text = text.replace(/v/g, "و");
    text = text.replace(/u/g, "او");
    text = text.replace(/w/g, "و");
    text = text.replace(/y/g, "ی");

    text = text.replace(/,/g, "،");
    text = text.replace(/%/g, "٪");
    text = text.replace(/\?/g, "؟");

    return text;
}
