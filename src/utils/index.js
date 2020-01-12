// 30 Seconds of JavaScript - shuffle
export const shuffleArray = ([...array]) => {
	let m = array.length;

	while(m) {
		const i = Math.floor((Math.random() * m--));
		[array[m], array[i]] = [array[i], array[m]];
	}
	return array;
}