const renderer = new THREE.WebGLRenderer({
    antialias: true 
});
const scene = new THREE.Scene();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set ( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );
let controls = new THREE.OrbitControls(camera, renderer.domElement);

    controls.addEventListener("change", renderer);

const LineMaterial = new THREE.LineBasicMaterial( { color: 0x00ffff } );
// const points = [];
// points.push( new THREE.Vector3( -10, 0, 0 ) );
// points.push( new THREE.Vector3( 0, 10, 0 ) );
// points.push( new THREE.Vector3( 0, -10, 0 ) );

// // for (var i=1 ; i<15;i++){
// // points.push( new THREE.Vector3( -5*i, -2*i, 0 ) );
// // points.push( new THREE.Vector3( 3*i, 3*i, 0 ) );
// // }

// const lineGeometry = new THREE.BufferGeometry().setFromPoints( points );
// const line = new THREE.Line( lineGeometry, LineMaterial );
// scene.add( line );


const lightl = new THREE.PointLight({color: 0x0fff00});
scene.add( lightl );
lightl.position.x = 50
lightl.position.y = -20
lightl.position.z = 10

const light2 = new THREE.PointLight({color: 0x0fff00})
scene.add( light2 );
light2.position.set(-50,50,20);

//FOG
const near = 50;
const far = 150;
const color = 'pink';
scene.fog = new THREE.Fog(color,near,far);
scene.background = new THREE.Color(color);

const colorwhite = new THREE.Color('hsl(106, 100%, 90%)')

const width = 20;
const height = 20;
const deph = 80;
const cubeGeometry = new THREE.BoxGeometry( width, height, deph );
const cubeMaterial = new THREE.MeshPhongMaterial({
    color: colorwhite,
    shiness: 80
})

const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
scene.add( cube );

cube.rotation.z = 0;
cube.rotation.x = 10;

cube.position.x = 20;
cube.position.y = 0;
cube.position.z = 0;

const animate =  () => {
    requestAnimationFrame(animate);
    
    cube.rotation.x +=.01;
    renderer.render( scene, camera );
}

animate();
