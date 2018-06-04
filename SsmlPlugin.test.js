/**
 * @jest-environment node
 */
const SsmlPlugin = require('./SsmlPlugin');
const { App, util } = require('jovo-framework');
const { getPlatformRequestBuilder } = util;
const [requestBuilder] = getPlatformRequestBuilder();

describe('SsmlPlugin', () => {
  test('properties', () => {
    expect(SsmlPlugin).toHaveProperty('ssml');
    expect(typeof SsmlPlugin.ssml).toBe('function');
  });

  test('functional', done => {
    const app = new App();
    app.register(
      'SsmlPlugin',
      new SsmlPlugin({
        google: { base: 'https://example.com/google/' },
        alexa: { base: 'https://example.com/alexa/' },
      })
    );

    const request = requestBuilder.intent('HelloIntent', { beep: 'boop' });
    const response = {
      json(data) {
        expect(data.speech).toEqual(
          '<speak><audio src="https://example.com/google/hello.mp3"/></speak>'
        );
        done();
      },
    };

    app.handleRequest(request.buildHttpRequest(), response, {
      HelloIntent: function(beep) {
        this.ask(this.speech.audio('hello.mp3'));
      },
    });
  });
});
