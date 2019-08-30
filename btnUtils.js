module.exports = {
  initBtn(canvas, ctx) {
      this.canvas = canvas;
      this.ctx = ctx;
      let canvasWidth = canvas.width;
      let canvasHeight = canvas.height;

      ctx.fillStyle = 'red';
      ctx.fillRect(0, 0, canvasWidth / 2, canvasHeight / 2);

      ctx.fillStyle = 'blue';
      ctx.fillRect(canvasWidth / 2, 0, canvasHeight / 2, canvasHeight / 2);


      ctx.fillStyle = 'green';
      ctx.fillRect(canvasWidth / 2, canvasHeight / 2, canvasWidth / 2, canvasHeight / 2);


      ctx.fillStyle = 'gray';
      ctx.fillRect(0, canvasHeight / 2, canvasWidth / 2, canvasHeight / 2);

      ctx.font = "13px Arial";
      ctx.fillStyle = 'white';
      ctx.fillText('播放10个音频', canvasWidth/4-50, canvasHeight/4);

      ctx.fillText('停止并销毁所有音频', canvasWidth * .75-50, canvasHeight / 4);

    ctx.fillText('暂停所有音频', canvasWidth / 4 - 50, canvasHeight * .75);
    ctx.fillText('继续播放所有音频', canvasWidth * .75 - 50, canvasHeight * .75);

  },

  registerTouchEvent (res) {
    // 事件监听
    wx.onTouchStart(data => {
      let touch = data.touches[0];
      let x = touch.clientX;
      let y = touch.clientY;


      let halfCanvasWidth = this.canvas.width/2;
      let halfCanvasHeight = this.canvas.height/2;

      if (x < halfCanvasWidth && y < halfCanvasHeight) {
        res.play && res.play();
      }
      else if (x < halfCanvasWidth && y > halfCanvasHeight) {
        res.pause && res.pause();
      }
      else if (x > halfCanvasWidth && y > halfCanvasHeight) {
        res.resume && res.resume();
      }
      else if (x > halfCanvasWidth && y < halfCanvasHeight) {
        res.stop && res.stop();
      }
    })
  }
}