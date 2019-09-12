let canvas = wx.createCanvas();
let ctx = canvas.getContext('2d');
ctx.fillSyle = 'red';
ctx.fillText('testset', 0, 0);

let a = wx.createInnerAudioContext();
a.src = 'audio.mp3';

a.onCanplay(() => {
  
  let a1 = wx.createInnerAudioContext();
  a1.src = 'audio.mp3';

  a1.onCanplay(() => {
    a1.play();

    wx.onHide(() => {
      a1.pause();
    })
    wx.onShow(() => {
      a1.play()
    })
  });
})