# Racka - Language Learning Tool
(/rɑːtskɑː/ - some cool sheep @https://en.wikipedia.org/wiki/Racka)

![Racka Logo](./icons/racka_logo.png)

## What is This?
Racka is a Firefox Plugin written in [Preact](https://preactjs.com/) with some features useful for learning a new Foreign Languge

### Things it should eventually do:
- [] Provide an in-browser  [LWT](https://hugofara.github.io/lwt/)-like EPUB Reader:
    - [] POS-tag sentences visually 
    - [] Give translations via e.g. [Wiktionary](https://en.wiktionary.org/wiki/Wiktionary:Main_Page) or [MRDs](https://en.wikipedia.org/wiki/Machine-readable_dictionary)
    - [] Some form of exporting marked vocabulary, if desired
- [] Provide the same experience for webpages in target language, ideally
- [] [Toucan](https://jointoucan.com/)-like setting, where every few words are translated

### How to Run it
#### Development
Generate static pages via [Webpack](https://webpack.js.org/):

```bash
$ yarn run build
```
Navigate to `about:debugging` and load it in as a Temporary Add-On:

![Add-On](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension/beastify_icon.png)

Alternatively, if you're not stuck on a Container or VM, just do this via web-ext after building:

```bash
$ yarn run web-ext
```
Or if you just want a hot-reloadable preview of the main App:

```bash
$ yarn run dev
```

### Notice
This project came to life, because modern language-learning tools are mostly lackluster. They either need to gamify the whole ordeal and you gain no insight into how your target language actually works, or (something every language-learning tool suffers under) they are only usable for languages that are studied en mase, like French, Spanish, Japanese. This is why this project aims to focus more on suppporting languages that are studied less frequently (e.g Hungarian, Romanian, Slovak, ..., and many more)

### Contributing
As this isn't targetted to be commercially viable and aims to be a tool for everyone who is interested, feel free to contribute freely :D