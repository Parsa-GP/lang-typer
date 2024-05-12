function initJp() {
    placeholder = "素早い茶色のキツネが怠惰な犬を飛び越える。"
    title = "Japanese!!"

    const diacritics = [
        { char: "〜", title: "波ダッシュ nami dasshu" },
        { char: "・", title: "中黒 nakaguro" },
        { char: "ー", title: "長音符 chōonpu" },
        { char: "「", title: "鉤括弧 kagikakko" },
        { char: "」", title: "鉤括弧 kagikakko" },
        { char: "、", title: "読点 tōten" },
        { char: "。", title: "句点 kuten" },
        { char: "々", title: "踊り字 odoriji - repetition mark kanji" },
        { char: "ー", title: "長音符 chōonpu - katakana long sound symbol" },
        { char: "ヽ", title: "iteration mark katakana" },
        { char: "ヾ", title: "iteration mark katakana with dakuten" },
        { char: "ゝ", title: "iteration mark hiragana" },
        { char: "ゞ", title: "iteration mark hiragana with dakuten" },
    ];
}

function tojp(text) {
    text = text.replace(/[ôō]/g, "oう");
    text = text.replace(/[ūû]/g, "uう");
    text = text.replace(/[âā]/g, "aあ");
    text = text.replace(/[îī]/g, "iい");
    text = text.replace(/[êē]/g, "eい");

    text = text.replace(/n/g, "ん");
    text = text.replace(/q/g, "っ");
    text = text.replace(/tsu/g, "つ");
    text = text.replace(/dzu/g, "づ");
    text = text.replace(/dji/g, "ぢ");
    text = text.replace(/kya/g, "きゃ");
    text = text.replace(/kyu/g, "きゅ");
    text = text.replace(/kyo/g, "きょ");
    text = text.replace(/んya/g, "にゃ");
    text = text.replace(/んyu/g, "にゅ");
    text = text.replace(/んyo/g, "にょ");
    text = text.replace(/sha/g, "しゃ");
    text = text.replace(/shi/g, "し");
    text = text.replace(/shu/g, "しゅ");
    text = text.replace(/sho/g, "しょ");
    text = text.replace(/chi/g, "ち");
    text = text.replace(/cha/g, "ちゃ");
    text = text.replace(/chu/g, "ちゅ");
    text = text.replace(/cho/g, "ちょ");
    text = text.replace(/hya/g, "ひゃ");
    text = text.replace(/hyu/g, "ひゅ");
    text = text.replace(/hyo/g, "ひょ");
    text = text.replace(/mya/g, "みゃ");
    text = text.replace(/myu/g, "みゅ");
    text = text.replace(/myo/g, "みょ");
    text = text.replace(/rya/g, "りゃ");
    text = text.replace(/ryu/g, "りゅ");
    text = text.replace(/ryo/g, "りょ");
    text = text.replace(/gya/g, "ぎゃ");
    text = text.replace(/gyu/g, "ぎゅ");
    text = text.replace(/gyo/g, "ぎょ");
    text = text.replace(/bya/g, "びゃ");
    text = text.replace(/byu/g, "びゅ");
    text = text.replace(/byo/g, "びょ");
    text = text.replace(/pya/g, "ぴゃ");
    text = text.replace(/pyu/g, "ぴゅ");
    text = text.replace(/pyo/g, "ぴょ");
    text = text.replace(/ja/g, "じゃ");
    text = text.replace(/ju/g, "じゅ");
    text = text.replace(/jo/g, "じょ");
    text = text.replace(/ba/g, "ば");
    text = text.replace(/da/g, "だ");
    text = text.replace(/ga/g, "が");
    text = text.replace(/ha/g, "は");
    text = text.replace(/ka/g, "か");
    text = text.replace(/ma/g, "ま");
    text = text.replace(/んa/g, "な");
    text = text.replace(/pa/g, "ぱ");
    text = text.replace(/ra/g, "ら");
    text = text.replace(/sa/g, "さ");
    text = text.replace(/ta/g, "た");
    text = text.replace(/wa/g, "わ");
    text = text.replace(/ya/g, "や");
    text = text.replace(/za/g, "ざ");
    text = text.replace(/be/g, "べ");
    text = text.replace(/de/g, "で");
    text = text.replace(/ge/g, "げ");
    text = text.replace(/he/g, "へ");
    text = text.replace(/ke/g, "け");
    text = text.replace(/me/g, "め");
    text = text.replace(/んe/g, "ね");
    text = text.replace(/pe/g, "ぺ");
    text = text.replace(/re/g, "れ");
    text = text.replace(/se/g, "せ");
    text = text.replace(/te/g, "て");
    text = text.replace(/we/g, "ゑ");
    text = text.replace(/ze/g, "ぜ");
    text = text.replace(/bi/g, "び");
    text = text.replace(/gi/g, "ぎ");
    text = text.replace(/hi/g, "ひ");
    text = text.replace(/ki/g, "き");
    text = text.replace(/si/g, "し");
    text = text.replace(/ti/g, "ち");
    text = text.replace(/mi/g, "み");
    text = text.replace(/んi/g, "に");
    text = text.replace(/pi/g, "ぴ");
    text = text.replace(/ri/g, "り");
    text = text.replace(/wi/g, "ゐ");
    text = text.replace(/ji/g, "じ");
    text = text.replace(/zi/g, "じ");
    text = text.replace(/bo/g, "ぼ");
    text = text.replace(/do/g, "ど");
    text = text.replace(/go/g, "ご");
    text = text.replace(/ho/g, "ほ");
    text = text.replace(/ko/g, "こ");
    text = text.replace(/mo/g, "も");
    text = text.replace(/んo/g, "の");
    text = text.replace(/po/g, "ぽ");
    text = text.replace(/ro/g, "ろ");
    text = text.replace(/so/g, "そ");
    text = text.replace(/to/g, "と");
    text = text.replace(/wo/g, "を");
    text = text.replace(/yo/g, "よ");
    text = text.replace(/zo/g, "ぞ");
    text = text.replace(/bu/g, "ぶ");
    text = text.replace(/gu/g, "ぐ");
    text = text.replace(/fu/g, "ふ");
    text = text.replace(/hu/g, "ふ");
    text = text.replace(/ku/g, "く");
    text = text.replace(/mu/g, "む");
    text = text.replace(/んu/g, "ぬ");
    text = text.replace(/pu/g, "ぷ");
    text = text.replace(/ru/g, "る");
    text = text.replace(/su/g, "す");
    text = text.replace(/tu/g, "つ");
    text = text.replace(/yu/g, "ゆ");
    text = text.replace(/zu/g, "ず");

    // cas des doublons
    text = text.replace(/di/g, "ぢ");
    text = text.replace(/じ=/g, "ぢ");
    text = text.replace(/du/g, "づ");
    text = text.replace(/ず=/g, "づ");

    text = text.replace(/a/g, "あ");
    text = text.replace(/[eé]/g, "え");
    text = text.replace(/i/g, "い");
    text = text.replace(/o/g, "お");
    text = text.replace(/u/g, "う");
    text = text.replace(/v/g, "ゔ");

    text = text.replace(/つ=/g, "っ");
    text = text.replace(/あ=/g, "ぁ");
    text = text.replace(/い=/g, "ぃ");
    text = text.replace(/う=/g, "ぅ");
    text = text.replace(/え=/g, "ぇ");
    text = text.replace(/お=/g, "ぉ");
    text = text.replace(/や=/g, "ゃ");
    text = text.replace(/ゆ=/g, "ゅ");
    text = text.replace(/よ=/g, "ょ");

    //kata
    text = text.replace(/[ÔŌ]/g, "Oー");
    text = text.replace(/[ŪÛ]/g, "Uー");
    text = text.replace(/[ÂĀ]/g, "Aー");
    text = text.replace(/[ÎĪ]/g, "Iー");
    text = text.replace(/[ÊĒ]/g, "Eー");
    text = text.replace(/_/g, "ー");

    text = text.replace(/N/g, "ン");
    text = text.replace(/V/g, "ヴ");
    text = text.replace(/Q/g, "ッ");
    text = text.replace(/KYA/g, "キャ");
    text = text.replace(/KYU/g, "キュ");
    text = text.replace(/KYO/g, "キョ");
    text = text.replace(/ンYA/g, "ニャ");
    text = text.replace(/ンYU/g, "ニュ");
    text = text.replace(/ンYO/g, "ニョ");
    text = text.replace(/SHA/g, "シャ");
    text = text.replace(/SHU/g, "シュ");
    text = text.replace(/SHO/g, "ショ");
    text = text.replace(/CHA/g, "チャ");
    text = text.replace(/CHU/g, "チュ");
    text = text.replace(/CHO/g, "チョ");
    text = text.replace(/HYA/g, "ヒャ");
    text = text.replace(/HYU/g, "ヒュ");
    text = text.replace(/HYO/g, "ヒョ");
    text = text.replace(/MYA/g, "ミャ");
    text = text.replace(/MYU/g, "ミュ");
    text = text.replace(/MYO/g, "ミョ");
    text = text.replace(/RYA/g, "リャ");
    text = text.replace(/RYU/g, "リュ");
    text = text.replace(/RYO/g, "リョ");
    text = text.replace(/GYA/g, "ギャ");
    text = text.replace(/GYU/g, "ギュ");
    text = text.replace(/GYO/g, "ギョ");
    text = text.replace(/BYA/g, "ビャ");
    text = text.replace(/BYU/g, "ビュ");
    text = text.replace(/BYO/g, "ビョ");
    text = text.replace(/PYA/g, "ピャ");
    text = text.replace(/PYU/g, "ピュ");
    text = text.replace(/PYO/g, "ピョ");
    text = text.replace(/JA/g, "ジャ");
    text = text.replace(/JU/g, "ジュ");
    text = text.replace(/JO/g, "ジョ");

    text = text.replace(/TSU/g, "ツ");
    text = text.replace(/DZU/g, "ヅ");
    text = text.replace(/DJU/g, "ヅ");
    text = text.replace(/DJI/g, "ヂ");
    text = text.replace(/SHI/g, "シ");
    text = text.replace(/CHI/g, "チ");

    // supplements
    text = text.replace(/JE/g, "ジェ");
    text = text.replace(/TI/g, "ティ");
    text = text.replace(/TU/g, "トゥ");
    text = text.replace(/TYU/g, "テュ");
    text = text.replace(/DI/g, "ディ");
    text = text.replace(/DU/g, "ドゥ");
    text = text.replace(/DYU/g, "デュ");
    text = text.replace(/SI/g, "スィ");
    text = text.replace(/ZI/g, "ズィ");
    text = text.replace(/SHE/g, "ジェ");
    text = text.replace(/CHE/g, "チェ");
    text = text.replace(/TSA/g, "ツァ");
    text = text.replace(/TSI/g, "ツィ");
    text = text.replace(/TSE/g, "ツェ");
    text = text.replace(/TSO/g, "ツォ");
    text = text.replace(/FA/g, "ファ");
    text = text.replace(/FI/g, "フィ");
    text = text.replace(/FE/g, "フェ");
    text = text.replace(/FO/g, "フォ");
    text = text.replace(/FYU/g, "フュ");
    text = text.replace(/HU/g, "ホゥ");
    text = text.replace(/YE/g, "イェ");
    text = text.replace(/YI/g, "イィ");
    text = text.replace(/WU/g, "ウゥ");



    text = text.replace(/BA/g, "バ");
    text = text.replace(/DA/g, "ダ");
    text = text.replace(/GA/g, "ガ");
    text = text.replace(/HA/g, "ハ");
    text = text.replace(/KA/g, "カ");
    text = text.replace(/MA/g, "マ");
    text = text.replace(/ンA/g, "ナ");
    text = text.replace(/PA/g, "パ");
    text = text.replace(/RA/g, "ラ");
    text = text.replace(/SA/g, "サ");
    text = text.replace(/TA/g, "タ");
    text = text.replace(/WA/g, "ワ");
    text = text.replace(/YA/g, "ヤ");
    text = text.replace(/ZA/g, "ザ");
    text = text.replace(/BE/g, "ベ");
    text = text.replace(/DE/g, "デ");
    text = text.replace(/GE/g, "ゲ");
    text = text.replace(/HE/g, "ヘ");
    text = text.replace(/KE/g, "ケ");
    text = text.replace(/ME/g, "メ");
    text = text.replace(/ンE/g, "ネ");
    text = text.replace(/PE/g, "ペ");
    text = text.replace(/RE/g, "レ");
    text = text.replace(/SE/g, "セ");
    text = text.replace(/TE/g, "テ");
    text = text.replace(/WE/g, "ヱ");
    text = text.replace(/ZE/g, "ゼ");
    text = text.replace(/BI/g, "ビ");
    text = text.replace(/GI/g, "ギ");
    text = text.replace(/HI/g, "ヒ");
    text = text.replace(/KI/g, "キ");
    text = text.replace(/MI/g, "ミ");
    text = text.replace(/ンI/g, "ニ");
    text = text.replace(/PI/g, "ピ");
    text = text.replace(/RI/g, "リ");
    text = text.replace(/WI/g, "ヰ");
    text = text.replace(/JI/g, "ジ");
    text = text.replace(/BO/g, "ボ");
    text = text.replace(/DO/g, "ド");
    text = text.replace(/GO/g, "ゴ");
    text = text.replace(/HO/g, "ホ");
    text = text.replace(/KO/g, "コ");
    text = text.replace(/MO/g, "モ");
    text = text.replace(/ンO/g, "ノ");
    text = text.replace(/PO/g, "ポ");
    text = text.replace(/RO/g, "ロ");
    text = text.replace(/SO/g, "ソ");
    text = text.replace(/TO/g, "ト");
    text = text.replace(/WO/g, "ヲ");
    text = text.replace(/YO/g, "ヨ");
    text = text.replace(/ZO/g, "ゾ");
    text = text.replace(/BU/g, "ブ");
    text = text.replace(/GU/g, "グ");
    text = text.replace(/FU/g, "フ");
    text = text.replace(/KU/g, "ク");
    text = text.replace(/MU/g, "ム");
    text = text.replace(/ンU/g, "ヌ");
    text = text.replace(/PU/g, "プ");
    text = text.replace(/RU/g, "ル");
    text = text.replace(/SU/g, "ス");
    text = text.replace(/YU/g, "ユ");
    text = text.replace(/ZU/g, "ズ");


    //archaic
    //text = text.replace(/YE/g, "𛄡");
    //text = text.replace(/YI/g, "𛄠");
    //text = text.replace(/WU/g, "𛄢");

    text = text.replace(/A/g, "ア");
    text = text.replace(/[EÉ]/g, "エ");
    text = text.replace(/I/g, "イ");
    text = text.replace(/O/g, "オ");
    text = text.replace(/U/g, "ウ");

    text = text.replace(/ア=/g, "ァ");
    text = text.replace(/イ=/g, "ィ");
    text = text.replace(/ウ=/g, "ゥ");
    text = text.replace(/エ=/g, "ェ");
    text = text.replace(/オ=/g, "ォ");
    text = text.replace(/ツ=/g, "ッ");
    text = text.replace(/ヤ=/g, "ャ");
    text = text.replace(/ユ=/g, "ュ");
    text = text.replace(/ヨ=/g, "ョ");

    // 2e série
    text = text.replace(/ク=/g, "ㇰ");
    text = text.replace(/シ=/g, "ㇱ");
    text = text.replace(/ス=/g, "ㇲ");
    text = text.replace(/ト=/g, "ㇳ");
    text = text.replace(/ヌ=/g, "ㇴ");
    text = text.replace(/ハ=/g, "ㇵ");
    text = text.replace(/ヒ=/g, "ㇶ");
    text = text.replace(/フ=/g, "ㇷ");
    text = text.replace(/ヘ=/g, "ㇸ");
    text = text.replace(/ホ=/g, "ㇹ");
    text = text.replace(/ム=/g, "ㇺ");
    text = text.replace(/ラ=/g, "ㇻ");
    text = text.replace(/リ=/g, "ㇼ");
    text = text.replace(/ル=/g, "ㇽ");
    text = text.replace(/レ=/g, "ㇾ");
    text = text.replace(/ロ=/g, "ㇿ");

    text = text.replace(/\./g, "。");
    text = text.replace(/\,/g, "、");
    text = text.replace(/\!/g, "！");
    text = text.replace(/\?/g, "？");
    text = text.replace(/\:/g, "：");
    text = text.replace(/\(/g, "（");
    text = text.replace(/\)/g, "）");
    text = text.replace(/\[/g, "［");
    text = text.replace(/\]/g, "］");
    text = text.replace(/\«/g, "「");
    text = text.replace(/\»/g, "」");

    return text;
}
