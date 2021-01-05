# Eminent Note Type

A note type for learning Japanese with Anki

[Download](https://mega.nz/folder/3ENBFSwJ#OxUmvGmoY6J46Dn_YFhIMQ)

![](images\notetype\demo.gif)

![](images\notetype\demo2.gif)



## Features

* [Kanji Hover](/kanjihover.html) on the front and back
* [JAGloss](jagloss.html) on the back
* Highlighted target word on front, with the rest of the sentence dimmed to be less distracting
  * If no word is present in the field, the sentence won't be dimmed
* Audio on back with audio icons hidden
* [ichi.moe](https://ichi.moe/) embed to provide extra info if needed
  * By default the embed isn't shown in order to keep the card clean and simple
  * Visibility of the embed can be toggled by either clicking on it or by pressing `tab` on your keyboard.
* Multiple color schemes depending on whether Anki is in night theme or not
* Tested on both desktop and mobile



## How To Use

Once you've used the download link at the top of this page, it should have imported a deck (with 1 card) into Anki. You can immediately delete this deck if you want, but sharing decks is currently the only way to share note types. Now you should have a note type called EminentV1 (or V2, 3, etc., I can't see the future). 

Now all you have to do is add new cards, or convert existing cards to this note type.



## Explanation of Fields

```
word
```

This is the target word you're trying to learn. Assuming you're learning an i+1 sentence, there should be exactly 1 unknown word, and that word should go in this field. The word in this field will be highlighted within the sentence. 

It's totally fine to leave this field blank, but the highlighting functionality won't work if you do.

**Note:** if you want the highlighting functionality to work properly, the word in this field must **exactly** match the form the word is in in the sentence. 

For example, if the `word` field contains the dictionary form of the word, but the sentence contains the te-form of the word, it won't highlight.

```
reading
```

This is for any pitch accent info you might use on your cards. If you're curious, I use https://ankiweb.net/shared/info/932119536. This field is added to the very bottom of the card.

```
definition
```

The definition of `word`

```
sentence
```

The Japanese sentence

```
sentenceMeaning
```

The native-language meaning of `sentence`. This field is optional.

```
wordAudio
```

Audio that corresponds to `word`

```
sentenceAudio
```

Audio that corresponds to `sentence`

```
picture
```

A picture

```
sort
```

Optional field to sort by in the browser.

```
Focus_Morph
```

Optional field for use with Morphman

```
MorphMan_Unknowns
```

Optional field for use with Morphman

