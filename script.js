// const position = { x: 0, y: 0 }

// interact('.draggable').draggable({
//   listeners: {
//     start (event) {
//       console.log(event.type, event.target)
//     },
//     move (event) {
//       position.x += event.dx
//       position.y += event.dy

//       event.target.style.transform =
//         `translate(${position.x}px, ${position.y}px)`
//     },
//   }
// })

// $('.move').draggable({
//     stop: function(e, ui) {
//         var offset = $(this).offset(),
//             x = offset.left,
//             y = offset.top;
//         $(this).text("Position: (" + x + ", " + y + ")");
//         console.log(x);
//         console.log(y);
//     }
// });


var fields = [
   {"pageId":"page_1", x: 200, y: 300, "field_name": "first_name" } ,
   {"pageId":"page_2", x: 500, y: 360, "field_name": "last_name" },
   {"pageId": "page_2", x:200, y: 300, "field_name" : "city"}
  ];


  document.getElementById("button").addEventListener("click", function(){
    fields.forEach(function(field){
      var inputField = "<input type='text' name=" + field.field_name + " id=" + field.field_name + ">" ;
      $("#" + field.pageId).append(inputField);
      $("#" + field.field_name).css("position", "absolute");
      $("#" + field.field_name).css("left", field.x);
      $("#" + field.field_name).css("top", field.y);
      

      // $("#" + field.pageId).css("left", field.x)
      // $("#" + field.pageId).css("top", field.y)
      
    });

  });

    $('#zoomb').on('click', function() {
         $('body').css('zoom', '200%')
        // var scale  = parseInt($('div').css('font-size'),10);
        //     nScale = $(this).index()===0 ? scale+1 : scale-1;
        // $('div').stop(true,true).animate({  fontSize: nScale }, {
        //     step: function(now,fx) {
        //         $(this).css('transform','scale('+parseFloat(now/10)+')');
        //     },
        //     duration: 300
        // },'linear');
   });     

