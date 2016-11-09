function ChaosGame(n, r, q) {

    this.n = n;
    this.r = r;
    this.q = q;

    this.vertices = [];
    this.log = [0, 0];

    this.init = function (width, height, radius) {
        var angle = (2 * Math.PI) / this.n;

        var center = {
            x: width / 2,
            y: height / 2
        };

        var vertex = {};

        for (var i = 0; i < this.n; i++) {

            if (i === 0) {
                vertex = {
                    x: center.x,
                    y: center.y - radius
                };
            }
            else {
                vertex = {
                    x: (vertex.x - center.x) * Math.cos(angle) - (vertex.y - center.y) * Math.sin(angle) + center.x,
                    y: (vertex.x - center.x) * Math.sin(angle) + (vertex.y - center.y) * Math.cos(angle) + center.y
                };
            }

            this.vertices.push(vertex);
        }
    };

    this.getNextPoint = function (x, y) {

        var vertex = this.getVertex();

        return {
            x: vertex.x * (1 - this.r) + x * this.r,
            y: vertex.y * (1 - this.r) + y * this.r
        }
    };

    this.valid = function (v) {

        var enabled = false;

        if (this.q.length > 1 && q[0] !== q[1]) {

            enabled =
                this.log[0] !== ((v + (this.n + this.q[0])) % this.n)
                &&
                this.log[1] !== ((v + (this.n + this.q[1])) % this.n)

                ||

                this.log[0] !== ((v + (this.n + this.q[1])) % this.n)
                &&
                this.log[1] !== ((v + (this.n + this.q[0])) % this.n)
            ;
        }
        else {

            for (var i = 0; i < this.q.length; i++) {
                var c = this.log[i] !== ((v + (this.n + this.q[i])) % this.n);

                if (c === true) {
                    return true;
                }
            }
        }

        return enabled;
    };

    this.getVertex = function () {

        var v = 0;

        do {
            v = Math.floor(Math.random() * 10000) % this.n;
        } while (this.q.length > 0 && !this.valid(v));

        this.log.unshift(v);
        this.log.pop();

        return this.vertices[v];
    };
}
