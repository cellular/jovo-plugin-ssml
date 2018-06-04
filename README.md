# Advanced SSML features for the Jovo Framework

[![Build Status](https://travis-ci.org/cellular/jovo-plugin-ssml.svg?branch=master)](https://travis-ci.org/cellular/jovo-plugin-ssml)

[Jovo](https://www.jovo.tech/) [Plugin](https://www.jovo.tech/docs/advanced#plugins) to [supercharge](http://github.com/cellular/speech-builder) the SpeechBuilder:

* Lexicon to automatically insert `<phoneme>` or `<sub>` tags.
* Different base URI per platform to load audio files in different formats.
* Proper XML escaping.

⚠️ __NOTE__: The API is not backwards compatible (though very similar) to Jovo's built-in SpeechBuilder. Please refer to the [API docs](http://github.com/cellular/speech-builder#api) for details.

## Usage

```js
const { App } = require('jovo-framework');
const SsmlPlugin = require('jovo-plugin-ssml');

const app = new App();
app.register('SsmlPlugin', new SsmlPlugin());

app.setHandler({
  LAUNCH() {
    this.tell(
      this.speech.add('You say potato, I say patata.')
    );
  }
```

## Advanced Options

See: https://github.com/cellular/speech-builder#advanced-options

```js
new SsmlPlugin({
  lexicon: {
    potato: {
      ipa: 'pəˈteɪtəʊ',
      sub: 'poteytoh'
    }
  },
  alexa: {
    base: 'https://example.com/audio/16k/'
  },
  google: {
    base: 'https://example.com/audio/24k/'
  }
});
```

# License

MIT