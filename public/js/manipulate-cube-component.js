AFRAME.registerComponent('manipulate-cube-component',{
    schema : {},
    init : function() {
        const cubeObj = this;
        
        cubeObj.el.addEventListener('click', function(event) {
            console.log("float");
            cubeObj.createCube();
        });

        cubeObj.el.addEventListener('mouseenter', function(event) {
            //el = element or entity
            //object3D = three.js 3D geometry object
            //scale = three.js vector that represents scale
            cubeObj.el.object3D.scale.set(1.1, 1.1, 1.1);
        });

        cubeObj.el.addEventListener('mouseleave', function(event) {
            cubeObj.el.object3D.scale.set(1.0, 1.0, 1.0);
        });

    },
    // spawn cube function
    createCube : function(){

        var scene = document.querySelector('a-scene');
        var box = document.createElement('a-box');
            box.setAttribute('color', '#FF9500');
            box.setAttribute('height', '1');
            box.setAttribute('width', '0.5');
            box.setAttribute('delete-shroom-component', {});

            scene.appendChild(box);

        // have cube float up and down
        var t = 0;
        function render() {
            t += 0.01;
            requestAnimationFrame(render);
            box.setAttribute('position', '3 '+(Math.sin(t*2)+2)+' -1.5');
            box.setAttribute('rotation', '0 30 -30');
        }
        render();
    }

});