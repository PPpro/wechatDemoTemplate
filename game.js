let canvas = wx.createCanvas();
let ctx = canvas.getContext('2d');

let btnUtils = require('./btnUtils.js');
btnUtils.initBtn(canvas, ctx);

let audios = [];

btnUtils.registerTouchEvent({
  play() {
    this.stop();
    
    for (let i = 0; i < 10; ++i) {
      let a = wx.createInnerAudioContext();
      a.src = 'audio.mp3';
      a.onCanplay(() => {
        a.play();
      })
      audios.push(a);
    }
  },

  stop() {
    audios.forEach(item => {
      item.pause();
      item.destroy();
    });
    audios.length = 0;
  },

  pause() {
    audios.forEach(item => {
      item.pause();
    });
  },

  resume() {
    audios.forEach(item => {
      item.play();
    });
  },
})