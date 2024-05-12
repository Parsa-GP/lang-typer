function initJp() {
    e = document.getElementById("input")
    e.setAttribute("placeholder", "素早い茶色のキツネが怠惰な犬を飛び越える。")

    document.getElementById("footer").innerHTML = `
        <input type="button" onclick="kb('〜')" value="〜" title="波ダッシュ nami dasshu">
        <input type="button" onclick="kb('・')" value="・" title="中黒 nakaguro">
        <input type="button" onclick="kb('ー')" value="ー" title="長音符 chōonpu">
        <input type="button" onclick="kb('「')" value="「" title="鉤括弧 kagikakko">
        <input type="button" onclick="kb('」')" value="」" title="鉤括弧 kagikakko">
        <input type="button" onclick="kb('、')" value="、" title="読点 tōten">
        <input type="button" onclick="kb('。')" value="。" title="句点 kuten">
        <input type="button" onclick="kb('々')" value="々" title="踊り字 odoriji - repetition mark kanji">
        <input type="button" onclick="kb('ー')" value="ー" title="長音符 chōonpu - katakana long sound symbol">
        <input type="button" onclick="kb('ヽ')" value="ヽ" title="iteration mark katakana">
        <input type="button" onclick="kb('ヾ')" value="ヾ" title="iteration mark katakana with dakuten">
        <input type="button" onclick="kb('ゝ')" value="ゝ" title="iteration mark hiragana">
        <input type="button" onclick="kb('ゞ')" value="ゞ" title="iteration mark hiragana with dakuten">`

    t=document.createElement("title")
    t.innerHTML = "Japanese!!"
    document.head.appendChild(t)
}


function tojp(car) {
    car = car.replace(/[ôō]/g, "oう");
    car = car.replace(/[ūû]/g, "uう");
    car = car.replace(/[âā]/g, "aあ");
    car = car.replace(/[îī]/g, "iい");
    car = car.replace(/[êē]/g, "eい");

    car = car.replace(/n/g, "ん");
    car = car.replace(/q/g, "っ");
    car = car.replace(/tsu/g, "つ");
    car = car.replace(/dzu/g, "づ");
    car = car.replace(/dji/g, "ぢ");
    car = car.replace(/kya/g, "きゃ");
    car = car.replace(/kyu/g, "きゅ");
    car = car.replace(/kyo/g, "きょ");
    car = car.replace(/んya/g, "にゃ");
    car = car.replace(/んyu/g, "にゅ");
    car = car.replace(/んyo/g, "にょ");
    car = car.replace(/sha/g, "しゃ");
    car = car.replace(/shi/g, "し");
    car = car.replace(/shu/g, "しゅ");
    car = car.replace(/sho/g, "しょ");
    car = car.replace(/chi/g, "ち");
    car = car.replace(/cha/g, "ちゃ");
    car = car.replace(/chu/g, "ちゅ");
    car = car.replace(/cho/g, "ちょ");
    car = car.replace(/hya/g, "ひゃ");
    car = car.replace(/hyu/g, "ひゅ");
    car = car.replace(/hyo/g, "ひょ");
    car = car.replace(/mya/g, "みゃ");
    car = car.replace(/myu/g, "みゅ");
    car = car.replace(/myo/g, "みょ");
    car = car.replace(/rya/g, "りゃ");
    car = car.replace(/ryu/g, "りゅ");
    car = car.replace(/ryo/g, "りょ");
    car = car.replace(/gya/g, "ぎゃ");
    car = car.replace(/gyu/g, "ぎゅ");
    car = car.replace(/gyo/g, "ぎょ");
    car = car.replace(/bya/g, "びゃ");
    car = car.replace(/byu/g, "びゅ");
    car = car.replace(/byo/g, "びょ");
    car = car.replace(/pya/g, "ぴゃ");
    car = car.replace(/pyu/g, "ぴゅ");
    car = car.replace(/pyo/g, "ぴょ");
    car = car.replace(/ja/g, "じゃ");
    car = car.replace(/ju/g, "じゅ");
    car = car.replace(/jo/g, "じょ");
    car = car.replace(/ba/g, "ば");
    car = car.replace(/da/g, "だ");
    car = car.replace(/ga/g, "が");
    car = car.replace(/ha/g, "は");
    car = car.replace(/ka/g, "か");
    car = car.replace(/ma/g, "ま");
    car = car.replace(/んa/g, "な");
    car = car.replace(/pa/g, "ぱ");
    car = car.replace(/ra/g, "ら");
    car = car.replace(/sa/g, "さ");
    car = car.replace(/ta/g, "た");
    car = car.replace(/wa/g, "わ");
    car = car.replace(/ya/g, "や");
    car = car.replace(/za/g, "ざ");
    car = car.replace(/be/g, "べ");
    car = car.replace(/de/g, "で");
    car = car.replace(/ge/g, "げ");
    car = car.replace(/he/g, "へ");
    car = car.replace(/ke/g, "け");
    car = car.replace(/me/g, "め");
    car = car.replace(/んe/g, "ね");
    car = car.replace(/pe/g, "ぺ");
    car = car.replace(/re/g, "れ");
    car = car.replace(/se/g, "せ");
    car = car.replace(/te/g, "て");
    car = car.replace(/we/g, "ゑ");
    car = car.replace(/ze/g, "ぜ");
    car = car.replace(/bi/g, "び");
    car = car.replace(/gi/g, "ぎ");
    car = car.replace(/hi/g, "ひ");
    car = car.replace(/ki/g, "き");
    car = car.replace(/si/g, "し");
    car = car.replace(/ti/g, "ち");
    car = car.replace(/mi/g, "み");
    car = car.replace(/んi/g, "に");
    car = car.replace(/pi/g, "ぴ");
    car = car.replace(/ri/g, "り");
    car = car.replace(/wi/g, "ゐ");
    car = car.replace(/ji/g, "じ");
    car = car.replace(/zi/g, "じ");
    car = car.replace(/bo/g, "ぼ");
    car = car.replace(/do/g, "ど");
    car = car.replace(/go/g, "ご");
    car = car.replace(/ho/g, "ほ");
    car = car.replace(/ko/g, "こ");
    car = car.replace(/mo/g, "も");
    car = car.replace(/んo/g, "の");
    car = car.replace(/po/g, "ぽ");
    car = car.replace(/ro/g, "ろ");
    car = car.replace(/so/g, "そ");
    car = car.replace(/to/g, "と");
    car = car.replace(/wo/g, "を");
    car = car.replace(/yo/g, "よ");
    car = car.replace(/zo/g, "ぞ");
    car = car.replace(/bu/g, "ぶ");
    car = car.replace(/gu/g, "ぐ");
    car = car.replace(/fu/g, "ふ");
    car = car.replace(/hu/g, "ふ");
    car = car.replace(/ku/g, "く");
    car = car.replace(/mu/g, "む");
    car = car.replace(/んu/g, "ぬ");
    car = car.replace(/pu/g, "ぷ");
    car = car.replace(/ru/g, "る");
    car = car.replace(/su/g, "す");
    car = car.replace(/tu/g, "つ");
    car = car.replace(/yu/g, "ゆ");
    car = car.replace(/zu/g, "ず");

    // cas des doublons
    car = car.replace(/di/g, "ぢ");
    car = car.replace(/じ=/g, "ぢ");
    car = car.replace(/du/g, "づ");
    car = car.replace(/ず=/g, "づ");

    car = car.replace(/a/g, "あ");
    car = car.replace(/[eé]/g, "え");
    car = car.replace(/i/g, "い");
    car = car.replace(/o/g, "お");
    car = car.replace(/u/g, "う");
    car = car.replace(/v/g, "ゔ");

    car = car.replace(/つ=/g, "っ");
    car = car.replace(/あ=/g, "ぁ");
    car = car.replace(/い=/g, "ぃ");
    car = car.replace(/う=/g, "ぅ");
    car = car.replace(/え=/g, "ぇ");
    car = car.replace(/お=/g, "ぉ");
    car = car.replace(/や=/g, "ゃ");
    car = car.replace(/ゆ=/g, "ゅ");
    car = car.replace(/よ=/g, "ょ");

    //kata
    car = car.replace(/[ÔŌ]/g, "Oー");
    car = car.replace(/[ŪÛ]/g, "Uー");
    car = car.replace(/[ÂĀ]/g, "Aー");
    car = car.replace(/[ÎĪ]/g, "Iー");
    car = car.replace(/[ÊĒ]/g, "Eー");
    car = car.replace(/_/g, "ー");

    car = car.replace(/N/g, "ン");
    car = car.replace(/V/g, "ヴ");
    car = car.replace(/Q/g, "ッ");
    car = car.replace(/KYA/g, "キャ");
    car = car.replace(/KYU/g, "キュ");
    car = car.replace(/KYO/g, "キョ");
    car = car.replace(/ンYA/g, "ニャ");
    car = car.replace(/ンYU/g, "ニュ");
    car = car.replace(/ンYO/g, "ニョ");
    car = car.replace(/SHA/g, "シャ");
    car = car.replace(/SHU/g, "シュ");
    car = car.replace(/SHO/g, "ショ");
    car = car.replace(/CHA/g, "チャ");
    car = car.replace(/CHU/g, "チュ");
    car = car.replace(/CHO/g, "チョ");
    car = car.replace(/HYA/g, "ヒャ");
    car = car.replace(/HYU/g, "ヒュ");
    car = car.replace(/HYO/g, "ヒョ");
    car = car.replace(/MYA/g, "ミャ");
    car = car.replace(/MYU/g, "ミュ");
    car = car.replace(/MYO/g, "ミョ");
    car = car.replace(/RYA/g, "リャ");
    car = car.replace(/RYU/g, "リュ");
    car = car.replace(/RYO/g, "リョ");
    car = car.replace(/GYA/g, "ギャ");
    car = car.replace(/GYU/g, "ギュ");
    car = car.replace(/GYO/g, "ギョ");
    car = car.replace(/BYA/g, "ビャ");
    car = car.replace(/BYU/g, "ビュ");
    car = car.replace(/BYO/g, "ビョ");
    car = car.replace(/PYA/g, "ピャ");
    car = car.replace(/PYU/g, "ピュ");
    car = car.replace(/PYO/g, "ピョ");
    car = car.replace(/JA/g, "ジャ");
    car = car.replace(/JU/g, "ジュ");
    car = car.replace(/JO/g, "ジョ");

    car = car.replace(/TSU/g, "ツ");
    car = car.replace(/DZU/g, "ヅ");
    car = car.replace(/DJU/g, "ヅ");
    car = car.replace(/DJI/g, "ヂ");
    car = car.replace(/SHI/g, "シ");
    car = car.replace(/CHI/g, "チ");

    // supplements
    car = car.replace(/JE/g, "ジェ");
    car = car.replace(/TI/g, "ティ");
    car = car.replace(/TU/g, "トゥ");
    car = car.replace(/TYU/g, "テュ");
    car = car.replace(/DI/g, "ディ");
    car = car.replace(/DU/g, "ドゥ");
    car = car.replace(/DYU/g, "デュ");
    car = car.replace(/SI/g, "スィ");
    car = car.replace(/ZI/g, "ズィ");
    car = car.replace(/SHE/g, "ジェ");
    car = car.replace(/CHE/g, "チェ");
    car = car.replace(/TSA/g, "ツァ");
    car = car.replace(/TSI/g, "ツィ");
    car = car.replace(/TSE/g, "ツェ");
    car = car.replace(/TSO/g, "ツォ");
    car = car.replace(/FA/g, "ファ");
    car = car.replace(/FI/g, "フィ");
    car = car.replace(/FE/g, "フェ");
    car = car.replace(/FO/g, "フォ");
    car = car.replace(/FYU/g, "フュ");
    car = car.replace(/HU/g, "ホゥ");
    car = car.replace(/YE/g, "イェ");
    car = car.replace(/YI/g, "イィ");
    car = car.replace(/WU/g, "ウゥ");



    car = car.replace(/BA/g, "バ");
    car = car.replace(/DA/g, "ダ");
    car = car.replace(/GA/g, "ガ");
    car = car.replace(/HA/g, "ハ");
    car = car.replace(/KA/g, "カ");
    car = car.replace(/MA/g, "マ");
    car = car.replace(/ンA/g, "ナ");
    car = car.replace(/PA/g, "パ");
    car = car.replace(/RA/g, "ラ");
    car = car.replace(/SA/g, "サ");
    car = car.replace(/TA/g, "タ");
    car = car.replace(/WA/g, "ワ");
    car = car.replace(/YA/g, "ヤ");
    car = car.replace(/ZA/g, "ザ");
    car = car.replace(/BE/g, "ベ");
    car = car.replace(/DE/g, "デ");
    car = car.replace(/GE/g, "ゲ");
    car = car.replace(/HE/g, "ヘ");
    car = car.replace(/KE/g, "ケ");
    car = car.replace(/ME/g, "メ");
    car = car.replace(/ンE/g, "ネ");
    car = car.replace(/PE/g, "ペ");
    car = car.replace(/RE/g, "レ");
    car = car.replace(/SE/g, "セ");
    car = car.replace(/TE/g, "テ");
    car = car.replace(/WE/g, "ヱ");
    car = car.replace(/ZE/g, "ゼ");
    car = car.replace(/BI/g, "ビ");
    car = car.replace(/GI/g, "ギ");
    car = car.replace(/HI/g, "ヒ");
    car = car.replace(/KI/g, "キ");
    car = car.replace(/MI/g, "ミ");
    car = car.replace(/ンI/g, "ニ");
    car = car.replace(/PI/g, "ピ");
    car = car.replace(/RI/g, "リ");
    car = car.replace(/WI/g, "ヰ");
    car = car.replace(/JI/g, "ジ");
    car = car.replace(/BO/g, "ボ");
    car = car.replace(/DO/g, "ド");
    car = car.replace(/GO/g, "ゴ");
    car = car.replace(/HO/g, "ホ");
    car = car.replace(/KO/g, "コ");
    car = car.replace(/MO/g, "モ");
    car = car.replace(/ンO/g, "ノ");
    car = car.replace(/PO/g, "ポ");
    car = car.replace(/RO/g, "ロ");
    car = car.replace(/SO/g, "ソ");
    car = car.replace(/TO/g, "ト");
    car = car.replace(/WO/g, "ヲ");
    car = car.replace(/YO/g, "ヨ");
    car = car.replace(/ZO/g, "ゾ");
    car = car.replace(/BU/g, "ブ");
    car = car.replace(/GU/g, "グ");
    car = car.replace(/FU/g, "フ");
    car = car.replace(/KU/g, "ク");
    car = car.replace(/MU/g, "ム");
    car = car.replace(/ンU/g, "ヌ");
    car = car.replace(/PU/g, "プ");
    car = car.replace(/RU/g, "ル");
    car = car.replace(/SU/g, "ス");
    car = car.replace(/YU/g, "ユ");
    car = car.replace(/ZU/g, "ズ");


    //archaic
    //car = car.replace(/YE/g, "𛄡");
    //car = car.replace(/YI/g, "𛄠");
    //car = car.replace(/WU/g, "𛄢");

    car = car.replace(/A/g, "ア");
    car = car.replace(/[EÉ]/g, "エ");
    car = car.replace(/I/g, "イ");
    car = car.replace(/O/g, "オ");
    car = car.replace(/U/g, "ウ");

    car = car.replace(/ア=/g, "ァ");
    car = car.replace(/イ=/g, "ィ");
    car = car.replace(/ウ=/g, "ゥ");
    car = car.replace(/エ=/g, "ェ");
    car = car.replace(/オ=/g, "ォ");
    car = car.replace(/ツ=/g, "ッ");
    car = car.replace(/ヤ=/g, "ャ");
    car = car.replace(/ユ=/g, "ュ");
    car = car.replace(/ヨ=/g, "ョ");

    // 2e série
    car = car.replace(/ク=/g, "ㇰ");
    car = car.replace(/シ=/g, "ㇱ");
    car = car.replace(/ス=/g, "ㇲ");
    car = car.replace(/ト=/g, "ㇳ");
    car = car.replace(/ヌ=/g, "ㇴ");
    car = car.replace(/ハ=/g, "ㇵ");
    car = car.replace(/ヒ=/g, "ㇶ");
    car = car.replace(/フ=/g, "ㇷ");
    car = car.replace(/ヘ=/g, "ㇸ");
    car = car.replace(/ホ=/g, "ㇹ");
    car = car.replace(/ム=/g, "ㇺ");
    car = car.replace(/ラ=/g, "ㇻ");
    car = car.replace(/リ=/g, "ㇼ");
    car = car.replace(/ル=/g, "ㇽ");
    car = car.replace(/レ=/g, "ㇾ");
    car = car.replace(/ロ=/g, "ㇿ");

    car = car.replace(/\./g, "。");
    car = car.replace(/\,/g, "、");
    car = car.replace(/\!/g, "！");
    car = car.replace(/\?/g, "？");
    car = car.replace(/\:/g, "：");
    car = car.replace(/\(/g, "（");
    car = car.replace(/\)/g, "）");
    car = car.replace(/\[/g, "［");
    car = car.replace(/\]/g, "］");
    car = car.replace(/\«/g, "「");
    car = car.replace(/\»/g, "」");

    return car;
}
