<template>
    <div id="box" ref="box"></div>
</template>
<script setup>
import { ref,onMounted } from 'vue';
import {colorArr}from '../../../public/color'
import {indexNum} from '../../../public/element'
import {arr} from '../../../public/node'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

let box=ref(null)

let init=()=>{
     //Scene
    let scene = new THREE.Scene();
    scene.background=new THREE.Color(0x1a202c)

    let axhelper=new THREE.AxesHelper(100)
    // scene.add(axhelper)

    //camera
    let camera = new THREE.PerspectiveCamera(
      20,
      window.innerWidth/window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(50, 50, 180);
    camera.rotation.set(Math.PI / 3, 0, 0);

    //renderer
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(900,400);
    box.value.appendChild(renderer.domElement);

    //geomentry
    let geometry = new THREE.BufferGeometry();

    //points arr
    let points = new Float32Array(arr);

    //index arr
    let indexs = indexNum;

    //colors arr
    let colors = new Float32Array(colorArr);

    geometry.setAttribute("position", new THREE.BufferAttribute(points, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setIndex(indexs);

    //material
    let material = new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      vertexColors: 2,
    });
    //mesh
    let mesh = new THREE.Mesh(geometry, material);
    //mesh rotation
    mesh.rotation.set(Math.PI / -2, 0, 0);

    mesh.position.set(0,-13,0)

    scene.add(mesh);

    let controls = new OrbitControls(camera, renderer.domElement);

    let animate = () => {
      requestAnimationFrame(animate);

      mesh.rotation.z += 0.005;

      camera.lookAt(new THREE.Vector3(0, 0, 0));
      renderer.render(scene, camera);
    };
    animate();
}


onMounted(()=>{
    init()
})

</script>
<style scoped lang="scss">
#box{
    width: 900px;
    height: 400px;
}
</style>