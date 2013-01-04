// Circles 1K
// by Evan Hahn (evanhahn.com)

// This code is licensed under the Unlicense. For more information, refer to
// <http://unlicense.org/>.

// Enjoy!

////////////////////////////////////////////////////////////////////////////////

// Globals are lowercase.
// Temporary variables are uppercase.

// Here's the list of globals:

// b = <body>
// c = <canvas>
// a = canvas context

// x, y = coordinates of circle
// r = radius of circle
// f = boolean, whether it's filled
// s = how often to draw a new circle

// d = function, draw the circle

// m = Math
// t = setTimeout

////////////////////////////////////////////////////////////////////////////////

// Initial drawing setup.
x = y = r = -1;
s = 50;

// Shorthands.
m = Math;
t = setTimeout;

// Style the <body>.
B = b.style;
B.margin = f = 0;  // fill status is also set here.
B.background = '#000';
B.fontFamily = 'sans-serif';
B.overflow = 'hidden';

// Make the canvas fill the window. Call it right now, but also bind it to the
// window's resize event. Also, focus the canvas.
(onresize = function() {
	w = c.width = innerWidth;
	h = c.height = innerHeight;
	c.focus();
})();

// Start drawing the circle.
(d = function() {

	// Go again!
	t(d, s);

	// Don't draw at the start if we shouldn't.
	if (r == -1) return;

	// What color? This is a shorthand for the following:
	// Math.floor(Math.random() * parseInt('FFFFFF', 16)).toString(16);
	C = '#' + ((m.random() * 16777215)|0).toString(16);

	// Draw it!
	// We ALWAYS draw the stroke and only sometimes fill. This is just to save
	// bytes.
	a.beginPath();
	a.arc(x, y, r, 0, 2 * m.PI);
	a.fillStyle = a.strokeStyle = C;
	a.stroke();
	if (f)
		a.fill();

})();

// Move the figure.
// Make the radius's size proportional to how far away it was.
onmousemove = function(E) {
	X = E.clientX - x;
	Y = E.clientY - y;
	r = m.sqrt(X*X + Y*Y) * 2;
	x += X;
	y += Y;
};

// Toggle whether it's a solid dot.
onclick = function() {
	f = !f;
};

// Deal with keyboard stuff.
onkeyup = function(E) {

	// Spacebar clears everything.
	// We're also assigning the keycode to K here.
	if ((K = E.keyCode) == 32)
		a.clearRect(0, 0, w, h);

	// Change refresh speed.
	if (K == 38)
		s -= 25;
	if (K == 40)
		s += 25;

	// s must be within [5, 150].
	s = m.min(m.max(s, 5), 150);

};

// Make start the notification and put it in the DOM.
(S = (L = document.createElement('div')).style).position = 'fixed';
S.top = S.right = S.padding = '20px';
S.background = '#fff';
S.textAlign = 'right';
L.innerHTML = '<b>circles!</b><br>mouse = draw<br>click = toggle solid<br>up = faster<br>down = slower<br>space = clear';
b.appendChild(L);

// Fade the start notification away.
t(function() {
	for (I = 0; I < 1E3; I += 10) {
		t(function(O) {
			S.opacity = O;
		}, I, 1 - (I / 1E3));
	}
	t(function() {
		S.display = 'none';
	}, 1E3);
}, 8E3);
