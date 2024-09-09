//Variables for setup

let container;
let camera;
let renderer;
let scene;
let house;
let controls;
let clock;

function init() {
  container = document.querySelector(".scene");

  //Create scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color('#45d0ff');

  //Camera setup    
  const fov = 85;
  const aspect = container.clientWidth/ container.clientHeight;
  const near = 0.1;
  const far = 1000;

  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 1, 1.5);
    
  
  
  //Light setup
  const ambient = new THREE.AmbientLight(0x404040, 4.5);
  scene.add(ambient);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(-50, 50, 100);
  scene.add(light);
    
  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  //Load Models
  let loader = new THREE.GLTFLoader();
    
  loader.load("obj/Palos_01.gltf", function(gltf) {
    scene.add(gltf.scene);
    palos1 = gltf.scene;
    animate();
  });

  loader.load("obj/Palos_02.gltf", function(gltf) {
    scene.add(gltf.scene);
    palos2 = gltf.scene;
    animate();
  });

  loader.load("obj/Palos_03.gltf", function(gltf) {
    scene.add(gltf.scene);
    palos3 = gltf.scene;
    animate();
  });

  loader.load("obj/Palos_04.gltf", function(gltf) {
    scene.add(gltf.scene);
    palos4 = gltf.scene;
    animate();
  });
    
}
 
function animate() {
 
  palos1.position.y = -0.8;
  palos1.position.x = 4;
  palos1.position.z = -2;

  palos2.position.y = -0.8;
  palos2.position.x = 4;
  palos2.position.z = -2;

  palos3.position.y = -0.8;
  palos3.position.x = 4;
  palos3.position.z = -2;

  palos4.position.y = -0.8;
  palos4.position.x = 4;
  palos4.position.z = -2;

  
  controls.lock();
  processKeyboard();
    
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
    
}

init();

function onWindowResize() {
  camera.aspect = container.clientWidth/ container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);

//orbital controls
controls = new THREE.PointerLockControls( camera, renderer.domElement);

let keyboard = [];

addEventListener('keydown',(e)=>{
    keyboard[e.key] = true;
});

addEventListener('keyup',(e)=>{
    keyboard[e.key] = false;
});

function processKeyboard() {
    if(keyboard['w']){
        controls.moveForward(0.025);
    }
    if(keyboard['s']){
        controls.moveForward(-0.025);
    }
    if(keyboard['a']){
        controls.moveRight(-0.018);
    }
    if(keyboard['d']){
        controls.moveRight(0.018);
    }
}



        