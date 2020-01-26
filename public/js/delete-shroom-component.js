'use strict'

AFRAME.registerComponent('delete-shroom-component',{
    schema : {},
    init : function() {
        const Context_AF = this; //refers to "this" component

        //add event listener for "click" event on whatever entity has this component
        Context_AF.el.addEventListener('click', function(event) {
            console.log("DELET DIS");
            Context_AF.deleteMyself();
        });

    },

    // delete when clicked on
    deleteMyself : function(){
        const Context_AF = this;
        Context_AF.el.parentNode.removeChild(Context_AF.el); //i brought you into this world, I can take you out too.
    }

});