'use strict'

AFRAME.registerComponent('create-cow-component',{
    schema : {},
    init : function() {
        const Context_AF = this; //refers to "this" component

        //add event listener for "click" event on whatever entity has this component
        Context_AF.el.addEventListener('click', function(event) {
            console.log("clicked!!!!:");
            Context_AF.createCow();
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
    //custom function for creating random cows
    createCow : function(){
        const Context_AF = this;

        //create an html element/entity that loads in cow model
        let cowElem = document.createElement('a-entity') //create element by code
        cowElem.setAttribute('class', 'clickable');
        cowElem.setAttribute('obj-model', {obj:'assets/models/cow.obj'}); //set model
        //cowElem.setAttribute('obj-model','obj:assets/models/cow.obj;'});
        cowElem.setAttribute('material', {src:'assets/textures/Cow.png'}); //set materials/textures
        cowElem.setAttribute('delete-cow-component', {});
        
        //random transforms
        cowElem.setAttribute('position', {x:(Math.random() * 6.0) - 3.0, y:0, z:-4.0 - (Math.random() * 3.0)} );
        const randScale = 0.2 + (Math.random() * 0.8);
        cowElem.setAttribute('scale', {x:randScale, y:randScale, z:randScale}); //random scale
        cowElem.setAttribute('rotation', {x:0, y:Math.random() * 360.0, z:0});   //random y rotation

        //last step is to attach to scene
        let scene = document.querySelector ('a-scene');
        scene.appendChild(cowElem);
    }
});