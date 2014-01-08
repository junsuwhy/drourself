var isPress=false,x,y,color;

$().ready(function(){
    //setting Width, Height
    $('svg').attr('width',$(document).width());
    $('svg').attr('height',$(document).height());
    $(window).resize(function() {
        $('svg').attr('width',$(window).width());
        $('svg').attr('height',$(window).height());
    });
    
    //setting color picker
    $('#colorpicker').farbtastic('#color');
    
    
    $('svg').on('mousedown',function(e){
        //console.log(e);
        if(!isPress){
            isPress=true;
            x=e.offsetX;
            y=e.offsetY;
        }
    }).on('mouseup',function(e){
        if(isPress){
            isPress=false;
        }
    }).on('mousemove',function(e){
        
        if(isPress){
        console.log(e);
    var newLine = document.
    createElementNS('http://www.w3.org/2000/svg','line');
            /*newLine.setAttribute('id','line2');
            newLine.setAttribute('x1',x);
            newLine.setAttribute('y1',y);
            newLine.setAttribute('x2',e.offsetX);
            newLine.setAttribute('y2',e.offsetY);
            newLine.setAttribute('stroke','rgb(255,0,0)');
            newLine.setAttribute('stroke-width',2);
            */
            $("svg").append(newLine);
            
            
            $(newLine)
                    .attr({
                        x1:x,
                        y1:y,
                        x2:e.offsetX,
                        y2:e.offsetY,
                        stroke:$('#color').val(),
                        'stroke-width':2})
                    .appendTo($(this));
            x=e.offsetX;
            y=e.offsetY;
        };
    });
});