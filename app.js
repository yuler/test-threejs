import * as THREE from 'three';

let camera, scene, renderer, group;

init();
animate();

function init() {
	// Scene
	scene = new THREE.Scene();

	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	// Camera
	camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1000);
	camera.position.set(0, -10, 100)
	scene.add(camera);
	
	// Draw
	group = new THREE.Group()

	const geometry = new THREE.ConeGeometry(20, 50, 32, 5, true);

	geometry.vertices = geometry.vertices.filter((_, i) => {
		if (i === 0) {
			return true
		} else if (i < 32) {
			return (i + 1) % 16 === 0
		} else if (i < 64) {
			return (i + 1) % 8 === 0
		} else if (i < 96) {
			return (i + 1) % 4 === 0
		} else if (i < 128) {
			return (i + 1) % 2 === 0
		}
		return true
	})

	console.log(geometry.vertices)


	const sprite = new THREE.TextureLoader().load('./textures/disc.png');
	const material = new THREE.PointsMaterial({ color: 'blue', size: 3, sizeAttenuation: true, alphaTest: 0.5, transparent: true });

	const points = new THREE.Points(geometry, material);
	group.add(points);

	const lines = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 'white' }))
	group.add(lines)
	
	

	// for (let i = 1; i <= 5; i++) {
	// 	const geometry = new THREE.ConeGeometry(i * 2, i * 10, Math.pow(2, i), 1, true);

	// 	const sprite = new THREE.TextureLoader().load('https://threejs.org/examples/textures/sprites/disc.png');
	// 	const material = new THREE.PointsMaterial({ color: 'blue', size: 3, sizeAttenuation: true, map: sprite, alphaTest: 0.5, transparent: true });

	// 	const points = new THREE.Points(geometry, material);
	// 	const lines = new THREE.Line(points, new THREE.LineBasicMaterial({ color: 'white' }))
	// 	group.add(points, lines);
	// }

	

	scene.add(group);

	// for (let i = 1; i <= 1; i++) {
	// 	const geometry = new THREE.ConeGeometry(i * 2, i * 10, Math.pow(2, i),);
	// 	const material = new THREE.PointsMaterial({ color: 'blue', size: 3, sizeAttenuation: true, map: sprite, alphaTest: 0.5, transparent: true } );
	// 	const points = new THREE.Points(geometry, material);
	// 	group.add(points)
	// }

	// console.log(group)
	// scene.add(group);

	// -----

	// const vertices = [
	// 	// 1
	// 	0, 0, 0, 0,
	// 	// 2
	// 	1, 0, 0, 0, 
	// 	-1, 0, 0, 0,
	// 	// 3
	// 	// 2, 1, 4, 0, 
	// 	// -2, 1, 5, 0,

	// ];
	// const geometry = new THREE.BufferGeometry();
	// geometry.setAttribute( 'position', new THREE.Float32BufferAttribute(vertices.flat(Infinity), 4));

	// const sprite = new THREE.TextureLoader().load('https://threejs.org/examples/textures/sprites/disc.png');
	// const material = new THREE.PointsMaterial({ color: 'blue', size: 3, sizeAttenuation: true, map: sprite, alphaTest: 0.5, transparent: true });

	// const points = new THREE.Points(geometry, material);

	// group.add(points);

	// scene.add(group);
}


function animate() {
	requestAnimationFrame(animate);

	// rote
	group.rotation.y -= 0.01

	render();
}

function render() {
	renderer.render(scene, camera);
}
