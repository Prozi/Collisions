export default {
	keyIsDown,
	keyPress,
	random,
	render,
}

function random(min, max) {
	return Math.floor(Math.random() * max) + min;
}

function render(context, bodies, player) {
	context.beginPath();

	for(const body of bodies) {
		const radius = body.radius;

		if(radius === undefined) {
			const x      = body.x;
			const y      = body.y;
			const coords = body._coords;

			context.moveTo(x + coords[0], y + coords[1]);

			for(let i = 2; i < coords.length; i += 2) {
				context.lineTo(x + coords[i], y + coords[i + 1]);
			}

			context.lineTo(x + coords[0], y + coords[1]);
		}
		else {
			context.moveTo(body.x + radius, body.y);
			context.arc(body.x, body.y, radius, 0, Math.PI * 2);
		}
	}

	context.fill();
}

// Keyboard
const keys = {};

document.addEventListener('keydown', (e) => {
	keys[e.key] = true;
});

document.addEventListener('keyup', (e) => {
	keys[e.key] = false;
});

function keyIsDown(key) {
	return keys[key];
}

function keyPress(key) {

}