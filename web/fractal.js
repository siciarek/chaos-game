function Fractal(game, times, canvas, bgcolor, fgcolor) {
    this.game = game;
    this.canvas = canvas;
    this.times = times;
    this.fgcolor = fgcolor;
    this.bgcolor = bgcolor;

    this.render = function (x, y) {

        var context = this.canvas.getContext('2d');
        context.fillStyle = this.bgcolor;
        context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        context.fillStyle = this.fgcolor;

        for (var i = 0; i < this.times; i++) {

            context.fillRect(x, y, 1, 1);

            var point = this.game.getNextPoint(x, y);

            x = point.x;
            y = point.y;
        }
    };
}
