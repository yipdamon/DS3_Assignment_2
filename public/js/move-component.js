
AFRAME.registerComponent('move-component',{
    schema : {},
    init : function() {
        const Context_AF = this; //refers to "this" component

        //add event listener for "click" event on whatever entity has this component
        Context_AF.el.addEventListener('click', function(event) {
            console.log("MOOOOVVEEE");
            Context_AF.moveCam();
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

    //move camera to platform
    moveCam : function(){
        const Context_AF = this;

        var camPos = document.createElement('#cameraOne');
        camPos.setAttribute('position', '0.0, 0.0, 2.0')

    }
});