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
    for (let i = 1; i <= 5; i++) {
        const geometry = new THREE.ConeGeometry(i * 2, i * 10, Math.pow(2, i));
        const material = new THREE.PointsMaterial({ color: 'blue' });
        const points = new THREE.Points(geometry, material);
        group.add(points)
    }

    scene.add(group);
}


function animate() {
    requestAnimationFrame(animate);

    // rote
    group.rotation.y -= 0.005

    render();
}

function render() {
    renderer.render(scene, camera);
}
