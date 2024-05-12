function initFa() {
    e = document.getElementById("input")
    e.setAttribute("placeholder", "روباه قهوه ای سریع از روی سگ تنبل می پرد.")

    document.getElementById("footer").innerHTML = `
        <input type="button" onclick="kb('ّ')" value="ّ " title="tajdid">
        <input type="button" onclick="kb('َ')" value="َ " title="fathe">
        <input type="button" onclick="kb('ِ')" value="ِ " title="kasre">
        <input type="button" onclick="kb('ُ')" value="ُ " title="zamme">
        <input type="button" onclick="kb('ً')" value="ً " title="tanvin fathe">
        <input type="button" onclick="kb('ٍ')" value="ٍ " title="tanvin kasre">
        <input type="button" onclick="kb('ٌ')" value="ٌ " title="tanvin zame">
        <input type="button" onclick="kb('ْ')" value="ْ " title="sokoon">
        <input type="button" onclick="kb('«')" value="«" title="giyomeh baz">
        <input type="button" onclick="kb('»')" value="»" title="giyomeh baste">
        <input type="button" onclick="kb('ئ')" value="ئ" title="ye ba hamze">
        <input type="button" onclick="kb('ؤ')" value="ؤ" title="vav ba hamze">
        <input type="button" onclick="kb('ٓ')" value="ٓ " title="kolah">
        <input type="button" onclick="kb('ٰ')" value="ٰ " title="alef koochak">
        <input type="button" onclick="kb('‌')" value="‌ " title="no-space space">
        <input type="button" onclick="kb('ٔ')" value="ٔ " title="hamze koochak">
        <input type="button" onclick="kb('ء')" value="ء" title="hamze">
        <input type="button" onclick="kb('﷼')" value="﷼" title="rial">
        <input type="button" onclick="kb('×')" value="×" title="zarb">
        <input type="button" onclick="kb('٪')" value="٪" title="darsad">
        <input type="button" onclick="kb('؟')" value="؟" title="alamate soal">`

    t=document.createElement("title")
    t.innerHTML = "Persian!!"
    document.head.appendChild(t)
}


function tofa(car) {

    car = car.replace(/0/g, "۰");
    car = car.replace(/1/g, "١");
    car = car.replace(/2/g, "۲");
    car = car.replace(/3/g, "۳");
    car = car.replace(/4/g, "۴");
    car = car.replace(/5/g, "۵");
    car = car.replace(/6/g, "۶");
    car = car.replace(/7/g, "۷");
    car = car.replace(/8/g, "۸");
    car = car.replace(/9/g, "۹");

    car = car.replace(/تt/g, "ط");
    car = car.replace(/t/g, "ت");

    car = car.replace(/صs/g, "ث");
    car = car.replace(/سs/g, "ص");
    car = car.replace(/s/g, "س");

    car = car.replace(/صc/g, "ث");
    car = car.replace(/سc/g, "ص");

    car = car.replace(/ضz/g, "ظ");
    car = car.replace(/ذz/g, "ض");
    car = car.replace(/زz/g, "ذ");
    car = car.replace(/z/g, "ز");

    car = car.replace(/عa/g, "اع");
    car = car.replace(/اa/g, "ع");
    car = car.replace(/a/g, "ا");

    car = car.replace(/عe/g, "اع");
    car = car.replace(/اe/g, "ع");
    car = car.replace(/اe/g, "ع");
    car = car.replace(/e/g, "ا");

    car = car.replace(/یi/g, "ای");
    car = car.replace(/i/g, "ی");

    car = car.replace(/وo/g, "او");
    car = car.replace(/o/g, "و");

    car = car.replace(/زh/g, "ژ");
    car = car.replace(/ذh/g, "ژ");
    car = car.replace(/ضh/g, "ژ");
    car = car.replace(/ظh/g, "ژ");

    car = car.replace(/سh/g, "ش");
    car = car.replace(/صh/g, "ش");
    car = car.replace(/ثh/g, "ش");


    car = car.replace(/کh/g, "خ");

    car = car.replace(/قh/g, "غ");
    car = car.replace(/گh/g, "ق");

    car = car.replace(/هh/g, "ح");
    car = car.replace(/h/g, "ه");


    car = car.replace(/A/g, "آ");
    car = car.replace(/b/g, "ب");
    car = car.replace(/p/g, "پ");
    car = car.replace(/j/g, "ج");
    car = car.replace(/c/g, "چ");
    car = car.replace(/d/g, "د");
    car = car.replace(/r/g, "ر");
    car = car.replace(/f/g, "ف");
    car = car.replace(/k/g, "ک");
    car = car.replace(/g/g, "گ");
    car = car.replace(/l/g, "ل");
    car = car.replace(/m/g, "م");
    car = car.replace(/n/g, "ن");
    car = car.replace(/v/g, "و");
    car = car.replace(/w/g, "و");
    car = car.replace(/y/g, "ی");

    car = car.replace(/,/g, "،");


    return car;
}
