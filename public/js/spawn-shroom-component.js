'use strict'

AFRAME.registerComponent('spawn-shroom-component',{
    schema : {},
    init : function() {
        const Context_AF = this; //refers to "this" component

        //add event listener for "click" event on whatever entity has this component
        Context_AF.el.addEventListener('click', function(event) {
            console.log("SUMMMONNNN");
            Context_AF.createShroom();
        });

        //when "hovering" make larger
        Context_AF.el.addEventListener('mouseenter', function(event) {
            //el = element or entity
            //object3D = three.js 3D geometry object
            //scale = three.js vector that represents scale
            Context_AF.el.object3D.scale.set(1.1, 1.1, 1.1);
        });

        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(1.0, 1.0, 1.0);
        });

    },
    //custom function for creating random shrooms
    createShroom : function(){
        const Context_AF = this;

        //create an html element/entity that loads in shroom model
        let shroomElem = document.createElement('a-entity') //create element by code
        shroomElem.setAttribute('class', 'clickable');
        shroomElem.setAttribute('obj-model', {obj:'assets/models/mushroom.obj'}); //set model
        shroomElem.setAttribute('material', {src:'assets/textures/texturemush.jpeg'}); //set materials/textures
        shroomElem.setAttribute('delete-shroom-component', {});
        
        //random transforms
        shroomElem.setAttribute('position', {x:(Math.random() * 6.0) - 3.0, y:1, z:-4.0 - (Math.random() * 3.0)} );
        const randScale = 0.2 + (Math.random() * 0.8);
        shroomElem.setAttribute('scale', {x:randScale, y:randScale, z:randScale}); //random scale
        shroomElem.setAttribute('rotation', {x:0, y:Math.random() * 360.0, z:0});   //random y rotation

        //attach to scene
        let scene = document.querySelector ('a-scene');
        scene.appendChild(shroomElem);

    }
});