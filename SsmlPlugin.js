const { ssml } = require('speech-builder');
const { Plugin } = require('jovo-framework');

class SsmlPlugin extends Plugin {
  init() {
    const { app, options } = this;
    const { alexa, google, ...common } = options;

    const config = {
      AlexaSkill: { features: 'alexa', ...common, ...alexa },
      GoogleAction: { features: 'google', ...common, ...google },
    };

    app.on('request', jovo => {
      const type = jovo.getType();
      jovo.speechBuilder = () => ssml(config[type]);
    });
  }
}

module.exports = SsmlPlugin;
