function ChaosGame(n, r, q) {

    // Private variables

    this.n = n;
    this.r = r;
    this.q = q;

    this.vertices = [];
    this.log = [0, 0];

    // Public interface

    /**
     * Creates the list of polygon vertices
     *
     * @param width - image width
     * @param height - image height
     * @param radius - radius of the circle where the polygon is "wpisany"
     */
    this.init = function (width, height, radius) {

        var angle = (2 * Math.PI) / this.n;

        this.vertices = [];

        // Image center point
        var c = {
            x: width / 2,
            y: height / 2
        };

        // Create the first vertex
        var v = {
            x: c.x,
            y: c.y - radius
        };

        // and add it to the vertices list
        this.vertices.push(v);

        // Create other vertices and add them to the vertices list.
        // New vertices are created by rotating the previous point about an image center point.
        for (var i = 1; i < this.n; i++) {

            v = {
                x: (v.x - c.x) * Math.cos(angle) - (v.y - c.y) * Math.sin(angle) + c.x,
                y: (v.x - c.x) * Math.sin(angle) + (v.y - c.y) * Math.cos(angle) + c.y
            };

            this.vertices.push(v);
        }
    };

    /**
     * Returns the point calculated from given (x, y) coordinates
     *
     * @param x
     * @param y
     * @returns {{x: number, y: number}} new point
     */
    this.getNextPoint = function (x, y) {

        // Chose the vertex
        var v = this.getVertex();

        // and return new active point distant from the chosen vertex this.r * distance
        // between the chosen vertex and the point generated previously.
        return {
            x: v.x * (1 - this.r) + x * this.r,
            y: v.y * (1 - this.r) + y * this.r
        };
    };

    // Private methods

    /**
     * Validates chosen vertex
     *
     * @param v
     * @returns {boolean}
     */
    this.valid = function (v) {

        // If limitations list is empty every vertices index is valid
        var enabled = this.q.length === 0;

        // Check vertice index against every limitations list element
        for (var i = 0; i < this.q.length; i++) {

            if (this.q.length > 1 && this.q[0] !== this.q[1]) {
                enabled =
                    this.log[0] !== ((v + (this.n + this.q[i])) % this.n)
                    &&
                    this.log[1] !== ((v + (this.n + this.q[(1 + i) % this.q.length])) % this.n);
            }
            else {
                enabled = this.log[i] !== ((v + (this.n + this.q[i])) % this.n);
            }

            if (enabled === true) {
                return true;
            }
        }

        return enabled;
    };

    /**
     * Returns vertex as a point and records its index in the log
     *
     * @returns {*}
     */
    this.getVertex = function () {

        var i = 0;

        // Choose the vertice index and validate it
        do {
            i = Math.floor(Math.random() * 10000) % this.n;
        } while (!this.valid(i));

        this.log.unshift(i);
        this.log.pop();

        return this.vertices[i];
    };
}
