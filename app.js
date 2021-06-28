import * as THREE from 'three';

let camera, scene, renderer, group, geometry, material;

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
	camera.position.set(0, -5, 100)
	scene.add(camera);

	// Draw
	group = new THREE.Group()

	const pointArray = [
		[
		{ x: 0, y: 25, z: 0 }
		],

		[
		{ x: 1.5307337045669556, y: 15, z: -3.6955180168151855 },
		{ x: -1.5307337045669556, y: 15, z: 3.6955180168151855 },
		],

		[
		{ x: 7.391036033630371, y: 5, z: 3.061467409133911 },
		{ x: 3.061467409133911, y: 5, z: -7.391036033630371 },
		{ x: -7.391036033630371, y: 5, z: -3.061467409133911 },
		{ x: -3.061467409133911, y: 5, z: 7.391036033630371 },
		],

		[
		{ x: 4.592201232910156, y: -5, z: 11.086554527282715 },
		{ x: 11.086554527282715, y: -5, z: 4.592201232910156 },
		{ x: 11.086554527282715, y: -5, z: -4.592201232910156 },
		{ x: 4.592201232910156, y: -5, z: -11.086554527282715 },
		{ x: -4.592201232910156, y: -5, z: -11.086554527282715 },
		{ x: -11.086554527282715, y: -5, z: -4.592201232910156 },
		{ x: -11.086554527282715, y: -5, z: 4.592201232910156 },
		{ x: -4.592201232910156, y: -5, z: 11.086554527282715 },
		],

		[
		{ x: 0, y: -15, z: 16 },
		{ x: 6.122934818267822, y: -15, z: 14.782072067260742 },
		{ x: 11.313708305358887, y: -15, z: 11.313708305358887 },
		{ x: 14.782072067260742, y: -15, z: 6.122934818267822 },
		{ x: 16, y: -15, z: 9.797174820681343e-16 },
		{ x: 14.782072067260742, y: -15, z: -6.122934818267822 },
		{ x: 11.313708305358887, y: -15, z: -11.313708305358887 },
		{ x: 6.122934818267822, y: -15, z: -14.782072067260742 },
		{ x: 1.9594349641362686e-15, y: -15, z: -16 },
		{ x: -6.122934818267822, y: -15, z: -14.782072067260742 },
		{ x: -11.313708305358887, y: -15, z: -11.313708305358887 },
		{ x: -14.782072067260742, y: -15, z: -6.122934818267822 },
		{ x: -16, y: -15, z: -2.939152234446166e-15 },
		{ x: -14.782072067260742, y: -15, z: 6.122934818267822 },
		{ x: -11.313708305358887, y: -15, z: 11.313708305358887 },
		{ x: -6.122934818267822, y: -15, z: 14.782072067260742 },
		],

		[
		{ x: 0, y: -25, z: 20 },
		{ x: 3.901806354522705, y: -25, z: 19.615705490112305 },
		{ x: 7.6536688804626465, y: -25, z: 18.477590560913086 },
		{ x: 11.111404418945312, y: -25, z: 16.629392623901367 },
		{ x: 14.142135620117188, y: -25, z: 14.142135620117188 },
		{ x: 16.629392623901367, y: -25, z: 11.111404418945312 },
		{ x: 18.477590560913086, y: -25, z: 7.6536688804626465 },
		{ x: 19.615705490112305, y: -25, z: 3.901806354522705 },
		{ x: 20, y: -25, z: 1.2246467996456087e-15 },
		{ x: 19.615705490112305, y: -25, z: -3.901806354522705 },
		{ x: 18.477590560913086, y: -25, z: -7.6536688804626465 },
		{ x: 16.629392623901367, y: -25, z: -11.111404418945312 },
		{ x: 14.142135620117188, y: -25, z: -14.142135620117188 },
		{ x: 11.111404418945312, y: -25, z: -16.629392623901367 },
		{ x: 7.6536688804626465, y: -25, z: -18.477590560913086 },
		{ x: 3.901806354522705, y: -25, z: -19.615705490112305 },
		{ x: 2.4492935992912173e-15, y: -25, z: -20 },
		{ x: -3.901806354522705, y: -25, z: -19.615705490112305 },
		{ x: -7.6536688804626465, y: -25, z: -18.477590560913086 },
		{ x: -11.111404418945312, y: -25, z: -16.629392623901367 },
		{ x: -14.142135620117188, y: -25, z: -14.142135620117188 },
		{ x: -16.629392623901367, y: -25, z: -11.111404418945312 },
		{ x: -18.477590560913086, y: -25, z: -7.6536688804626465 },
		{ x: -19.615705490112305, y: -25, z: -3.901806354522705 },
		{ x: -20, y: -25, z: -3.673940187178589e-15 },
		{ x: -19.615705490112305, y: -25, z: 3.901806354522705 },
		{ x: -18.477590560913086, y: -25, z: 7.6536688804626465 },
		{ x: -16.629392623901367, y: -25, z: 11.111404418945312 },
		{ x: -14.142135620117188, y: -25, z: 14.142135620117188 },
		{ x: -11.111404418945312, y: -25, z: 16.629392623901367 },
		{ x: -7.6536688804626465, y: -25, z: 18.477590560913086 },
		{ x: -3.901806354522705, y: -25, z: 19.615705490112305 },
		],
	]

	const vertices = []
	for (let i = 1; i < pointArray.flat().length; i++) {
		const {x, y, z} = pointArray.flat()[i]
		vertices.push(x, y, z)
	}

    // TOP
    geometry = new THREE.BufferGeometry();
	geometry.setAttribute('position', new THREE.Float32BufferAttribute([0, 25, 0], 3));
    const disc = new THREE.TextureLoader().load('https://threejs.org/examples/textures/sprites/disc.png');
	material = new THREE.PointsMaterial({ color: '#44fbea', size: 8, sizeAttenuation: true, map: disc, alphaTest: 0.5, transparent: true });
	const top = new THREE.Points(geometry, material);
    group.add(top);

	// Points
    geometry = new THREE.BufferGeometry();
	geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
	const sprite = new THREE.TextureLoader().load('https://threejs.org/examples/textures/sprites/disc.png');
	material = new THREE.PointsMaterial({ color: '#44fbea', size: 5, sizeAttenuation: true, map: sprite, alphaTest: 0.5, transparent: true });
	const points = new THREE.Points(geometry, material);

	group.add(points);

	// Lines
	let lines;
	material = new THREE.LineBasicMaterial({ color: 'white', transparent: true, opacity: 0.5 });

	{
		const curve = new THREE.EllipseCurve(
			0,  0,       
			3.65, 3.65,
			0,  2 * Math.PI,
			true,
			0
		)
		
		const points = curve.getPoints(50);
		geometry = new THREE.BufferGeometry().setFromPoints(points);
		geometry.rotateX(Math.PI / 2)
		lines = new THREE.Line(geometry, material);
		lines.translateY(15)
		group.add(lines);
	}

	{
		const curve = new THREE.EllipseCurve(
			0,  0,
			7.65, 7.65,
			0,  2 * Math.PI,
			true,
			0
		)
		
		const points = curve.getPoints(50);
		geometry = new THREE.BufferGeometry().setFromPoints(points);
		geometry.rotateX(Math.PI / 2)
		lines = new THREE.Line(geometry, material);
		lines.translateY(5)
		group.add(lines);
	}

	{
		const curve = new THREE.EllipseCurve(
			0,  0,            // ax, aY
			12, 12,           // xRadius, yRadius
			0,  2 * Math.PI,  // aStartAngle, aEndAngle
			true,            // aClockwise
			0                // aRotation
		)
		const points = curve.getPoints(50);
		geometry = new THREE.BufferGeometry().setFromPoints(points);
		geometry.rotateX(Math.PI / 2)
		lines = new THREE.Line(geometry, material);
		lines.translateY(-5)
		group.add(lines);
	}

	for (let i = 3; i < 5; i++) {
		const points = pointArray[i + 1].flat().map(p => [p.x, p.y, p.z]).flat()
		geometry = new THREE.BufferGeometry();
		geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
		lines = new THREE.LineLoop(geometry, material);
		group.add(lines);
	}

    
    let ps = [
        ...pointArray[0].flat().map(p => [p.x, p.y, p.z]).flat(),
        ...pointArray[1].flat().map(p => [p.x, p.y, p.z]).flat(),
    ]
    geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(ps, 3));
    lines = new THREE.LineLoop( geometry, material);
	group.add(lines);
    
    for (let i = 1; i < 5; i++) {
        for (let j = 0; j < pointArray[i].length; j++) {
            let p0 = [
                ...normalize(pointArray[i][j]),
                ...normalize(pointArray[i + 1][2 * j]),
            ]
            let p1 = [
                ...normalize(pointArray[i][j]),
                ...normalize(pointArray[i + 1][2 * j + 1]),
            ]
            geometry = new THREE.BufferGeometry();
            geometry.setAttribute('position', new THREE.Float32BufferAttribute(p0, 3));
            lines = new THREE.Line(geometry, material);
            group.add(lines);

            geometry = new THREE.BufferGeometry();
            geometry.setAttribute('position', new THREE.Float32BufferAttribute(p1, 3));
            lines = new THREE.Line(geometry, material);
            group.add(lines);
        }
    }

    function normalize(p) {
        return [p.x, p.y, p.z]
    }

	scene.add(group);
}


function animate() {
	requestAnimationFrame(animate);

	// Rote
	group.rotation.y -= 0.01

	render();
}

function render() {
	renderer.render(scene, camera);
}
