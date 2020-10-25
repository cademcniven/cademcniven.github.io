var km_tokenizer = null

window.onload = function () {
  const textInputBox = document.getElementById('input')
  const resultDisplay = document.getElementById('result-span')

  kuromoji
    .builder({ dicPath: 'kuromoji/dict/' })
    .build(function (err, tokenizer) {
      km_tokenizer = tokenizer
      if (textInputBox.value.length > 0) {
        updateResultDisplay(resultDisplay, this.value)
      } else {
        resultDisplay.innerHTML = 'Ready!'

        var GET = {}
        var query = window.location.search.substring(1).split('&')
        for (var i = 0, max = query.length; i < max; i++) {
          if (query[i] === '')
            // check for trailing & with no param
            continue

          var param = query[i].split('=')
          GET[decodeURIComponent(param[0])] = decodeURIComponent(param[1] || '')
        }

        if (GET.query) textInputBox.value = GET.query
        updateResultDisplay(resultDisplay, GET.query)
      }

      textInputBox.focus()
    })

  textInputBox.addEventListener('input', function (event) {
    if (km_tokenizer != null) {
      updateResultDisplay(resultDisplay, this.value)
    }
  })
}

const verb_searchback = 6
const adjective_searchback = 5
const wordTypeLookup = {
  名詞: ['Noun', 'noun', 0],
  助詞: ['Particle', 'particle', 0],
  動詞: ['Verb', 'verb', verb_searchback],
  助動詞: ['Auxiliary Verb', 'aux-verb', verb_searchback],
  形容詞: ['Adjective', 'adjective', adjective_searchback],
  副詞: ['Adverb', 'adverb', 0],
  接続詞: ['Conjunction', 'particle', 0],
  連体詞: ['Adnominal Adjective', 'adjective', adjective_searchback],
  記号: ['Symbol', 'other', 0],
  感動詞: ['Interjection', 'other', 0],
  接頭詞: ['Prefix', 'adjective', 0],
  フィラー: ['Filler', 'other', 0]
}

// const englishTable = {
// 	"ガル接続": "-garu Setsuzoku",
// 	"仮定形": "Kateikei",
// 	"体言接続": "Taigen Setsuzoku",
// 	"基本形": "Dictionary",
// 	"未然ウ接続": "-u",
// 	"未然レル接続": "-reru",
// 	"未然形": "-nai",
// 	"連用タ接続": "-ta",
// 	"連用形": "-masu",
// 	"連用デ接続": "-de",
// 	"命令ｉ": "Command -i",
// 	"命令ｅ": "Command"
// }

const englishTable = {
  ガル接続: '-garu Setsuzoku',
  仮定形: 'Kateikei',
  体言接続: 'Taigen Setsuzoku',
  基本形: 'Jishokei',
  未然ウ接続: 'Mizenkei -o',
  未然レル接続: 'Mizenkei',
  未然形: 'Mizenkei',
  連用タ接続: "Ren'youkei",
  連用形: "Ren'youkei",
  連用デ接続: "Ren'youkei",
  命令ｉ: 'Meireikei',
  命令ｅ: 'Meireikei'
}

const first3 = function (x) {
  if (x.length > 3) {
    return [x[0], x[1], x[2]]
  } else {
    return x
  }
}

const isOnlyKana = function (str) {
  for (const i in str) {
    const c = str.charCodeAt(i)
    if (c < 0x3040 || c > 0x30ff) return false
  }
  return true
}

const toHiragana = function (str) {
  var result = ''
  for (const i in str) {
    const c = str.charCodeAt(i)
    if (c >= 0x30a1 && c <= 0x30f6) {
      result += String.fromCharCode(c - 0x60)
    } else if (c == 0x30fc && i > 0) {
      result += resolveLongVowel(result[i - 1])
    } else {
      result += str[i]
    }
  }
  return result
}

const resolveLongVowel = function (prevChar) {
  if ('ぁあかがさざただなはばぱまゃやらゎわゕ'.indexOf(prevChar) != -1)
    return 'あ'
  if ('ぃいきぎしじちぢにひびぴみりゐ'.indexOf(prevChar) != -1) return 'い'
  if ('ぅうくぐすずつづぬふぶぷむゅゆる'.indexOf(prevChar) != -1) return 'う'
  if ('ぇえけげせぜてでねへべぺめれゑゖ'.indexOf(prevChar) != -1) return 'え'
  if ('ぉおこごそぞとどのほぼぽもょよろを'.indexOf(prevChar) != -1) return 'う'
  return 'ー'
}

const romajiTable = [
  undefined,
  'xa',
  'a',
  'xi',
  'i',
  'xu',
  'u',
  'xe',
  'e',
  'xo',
  'o',
  'ka',
  'ga',
  'ki',
  'gi',
  'ku',
  'gu',
  'ke',
  'ge',
  'ko',
  'go',
  'sa',
  'za',
  'shi',
  'ji',
  'su',
  'zu',
  'se',
  'ze',
  'so',
  'zo',
  'ta',
  'da',
  'chi',
  'dzi',
  'xtu',
  'tsu',
  'dzu',
  'te',
  'de',
  'to',
  'do',
  'na',
  'ni',
  'nu',
  'ne',
  'no',
  'ha',
  'ba',
  'pa',
  'hi',
  'bi',
  'pi',
  'fu',
  'bu',
  'pu',
  'he',
  'be',
  'pe',
  'ho',
  'bo',
  'po',
  'ma',
  'mi',
  'mu',
  'me',
  'mo',
  'xya',
  'ya',
  'xyu',
  'yu',
  'xyo',
  'yo',
  'ra',
  'ri',
  'ru',
  're',
  'ro',
  'xwa',
  'wa',
  'wi',
  'we',
  'wo',
  'n',
  'vu',
  'xka',
  'xke',
  'va',
  'vi',
  've',
  'vo',
  undefined,
  undefined,
  undefined,
  undefined,
  undefined
]

const toRomajiFromCharCode = function (kanaCharCode) {
  const c = kanaCharCode
  if (c >= 0x30a1 && c <= 0x30fa) return romajiTable[c - 0x30a0]
  else if (c >= 0x3041 && c <= 0x3096) return romajiTable[c - 0x3040]
  else return String.fromCharCode(c)
}

const toRomaji = function (str) {
  var result = ''
  var doubleNext = false
  for (const i in str) {
    const c = str.charCodeAt(i)
    const rom = toRomajiFromCharCode(c)
    if (doubleNext) {
      result += rom[0]
      doubleNext = false
    }
    if (c == 0x30fc) {
      if (result.length > 0) {
        const lastVowel = 'aiueo'.indexOf(result[result.length - 1])
        if (lastVowel != -1) {
          result += 'aiueu'[lastVowel]
        }
      } else {
        result += '-'
      }
    } else if (c == 0x3063 || c == 0x30c3) {
      doubleNext = true
    } else if (
      result.length > 0 &&
      result[result.length - 1] == 'n' &&
      'aiueo'.indexOf(rom[0]) != -1
    ) {
      result += "'" + rom
    } else if (
      result.length > 0 &&
      result[result.length - 1] == 'i' &&
      rom[0] == 'x' &&
      rom[1] == 'y'
    ) {
      if (
        (result.length > 1 && result[result.length - 2] == 'j') ||
        (result.length > 2 &&
          result[result.length - 2] == 'h' &&
          (result[result.length - 3] == 'c' ||
            result[result.length - 3] == 's'))
      )
        result =
          result.substring(0, result.length - 1) + rom.substring(2, rom.length)
      else
        result =
          result.substring(0, result.length - 1) + rom.substring(1, rom.length)
    } else {
      result += rom
    }
  }
  return result
}

const lookupKanji = function (kanji) {
  return kanjidic2[kanji]
}

const wrapKanji = function (kanji) {
  const k = lookupKanji(kanji)
  var builtString = '<div class="kanji">' + kanji
  builtString +=
    '<div class="popup2"><div class="primary"><div class="top"><span class="character">' +
    kanji +
    '</span><span class="meaning">' +
    k.meaning.join(', ') +
    '</span><span class="frequency">#' +
    k.freq +
    '</span></div><div class="bottom"><div class="onyomi"><h5>On\'yomi</h5>' +
    k.on +
    '</div><div class="kunyomi"><h5>Kun\'yomi</h5>' +
    k.kun +
    '</div></div></div>'
  builtString += '</div></div>'
  builtString += '</div>'

  return builtString
}

const wrapKanjiInString = function (str) {
  var builtString = ''

  for (index in str) {
    const code = str.charCodeAt(index)
    const char = str.charAt(index)
    if (code >= 0x4e00 && code <= 0x9fff) {
      // is kanji
      builtString += wrapKanji(char)
    } else {
      builtString += char
    }
  }

  return builtString
}

const updateResultDisplay = function (resultDisplay, inputText) {
  const tokens = km_tokenizer.tokenize(inputText)

  const characterCount = inputText.length
  if (characterCount > screen.width / 42) {
    resultDisplay.setAttribute('style', 'font-size: 16pt;')
  } else {
    resultDisplay.setAttribute('style', 'font-size: 24pt;')
  }

  var builtOutput = ''
  var usedRuby = false

  for (const i in tokens) {
    // get token info
    const token = tokens[i]

    // syntax highlighting
    const purpose = wordTypeLookup[token.pos]
    var clazz = purpose ? ' ' + purpose[1] : ''
    var clazz_back = purpose ? ' ' + purpose[1] + '-back' : ''

    var meaning_index
    var isKnown = token.word_type === 'KNOWN'

    if (isKnown) {
      meaning_index = meaning_indices[token.word_id / 10]
      var j = 1
      while (meaning_index == -2)
        meaning_index = meaning_indices[token.word_id / 10 - j++]
    } else {
      clazz = ' other'
      clazz_back = ' other-back'
    }

    var wordDisplay = token.surface_form

    if (
      token.pronunciation != undefined &&
      !isOnlyKana(wordDisplay) &&
      token.pronunciation.length > 0
    ) {
      // contains non-kana elements
      const reading = toHiragana(token.pronunciation)
      const display = token.surface_form
      const displayHiragana = toHiragana(display)
      if (!(reading === wordDisplay)) {
        var beginIndex = 0
        while (true) {
          if (reading[beginIndex] !== displayHiragana[beginIndex]) break
          beginIndex++
        }
        var endIndex = 1
        while (true) {
          if (
            reading[reading.length - endIndex] !==
            displayHiragana[displayHiragana.length - endIndex]
          )
            break
          endIndex++
        }
        displayEndIndex = display.length - endIndex + 1
        readingEndIndex = reading.length - endIndex + 1
        wordDisplay =
          display.substring(0, beginIndex) +
          '<ruby>' +
          wrapKanjiInString(display.substring(beginIndex, displayEndIndex)) +
          '<rt>' +
          reading.substring(beginIndex, readingEndIndex) +
          '</rt></ruby>' +
          display.substring(displayEndIndex, display.length)
        usedRuby = true
      }
    }

    const symbols = '｛｝（）［］【】、，…‥。・「」『』〝〟　：！？'
    const isPunctuation = symbols.indexOf(token.surface_form) != -1

    if (!isPunctuation) {
      builtOutput += '<span class="word' + clazz + '">' + wordDisplay
      builtOutput +=
        '<div class="popup">\n【' +
        (isKnown ? token.basic_form : token.surface_form) +
        '】<span class="reading">' +
        toRomaji(
          token.pronunciation != undefined && token.pronunciation.length > 0
            ? token.pronunciation
            : token.surface_form
        ) +
        '</span>'
      builtOutput += purpose
        ? '<span class="purpose' + clazz_back + '">' + purpose[0] + '</span>'
        : ''
      // builtOutput += (token.conjugated_form != '*' ? '<span class="purpose' + clazz_back + '">' + englishTable[token.conjugated_form] + '</span>' : '')
      if (isKnown || meaning_index < 0)
        builtOutput +=
          '<br/><ul>' +
          first3(meaning_strings[meaning_index].split(';'))
            .map(function (x) {
              return '<li>- ' + x + '</li>'
            })
            .join('') +
          '</ul>'
      else builtOutput += '<br/><span class="unknown">Unknown</span>'
      builtOutput +=
        '<span class="note"><a href="http://jisho.org/search/' +
        token.surface_form +
        '">Jisho</a>'
      if (isKnown) builtOutput += ' #' + token.word_id
      builtOutput += '</span>'
      builtOutput += '</div>'
      builtOutput += '</span>'
    } else {
      builtOutput +=
        '<span class="punctuation other">' + wordDisplay + '</span>'
    }
  }

  resultDisplay.innerHTML = builtOutput

  if (usedRuby) {
    const oldStyle = resultDisplay.getAttribute('style')
    resultDisplay.setAttribute('style', oldStyle + 'margin-top: -72px;') // 72 = 42 * 1.5
  }
}
