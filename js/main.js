$(document).ready(function(){
    console.log(fetch('https://reqres.in/api/users'))
    
    $("#image").faceDetection({ //id'si image olanı seç faceDetection uygula
        complete: function(faces){
            let i=0
            $("<div>",{
                class:"face",
                css: {
                    left: faces[i].x * faces[i].scaleX + "px",
                    top: faces[i].y * faces[i].scaleY + "px",
                    width: faces[i].width * faces[i].scaleX + "px",
                    height: faces[i].height * faces[i].scaleX + "px",

                }
            }).insertAfter(this);
        }, //methodlarımızı yazdık
        error : function(code, message){}

    });
});