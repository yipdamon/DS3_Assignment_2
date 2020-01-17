'use strict'

AFRAME.registerComponent('delete-cow-component',{
    schema : {},
    init : function() {
        const Context_AF = this; //refers to "this" component

        //add event listener for "click" event on whatever entity has this component
        Context_AF.el.addEventListener('click', function(event) {
            console.log("clicked!!!!:");
            Context_AF.deleteMyself();
        });

    },

    deleteMyself : function(){
        const Context_AF = this;
        Context_AF.el.parentNode.removeChild(Context_AF.el); //i brought you into this world, I can take you out too.
    }

});