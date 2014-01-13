var isPress=false,x,y,color,sto_wid;

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

    //set slider
    $( "#slider" ).slider({
            value: 5,
            min:1,
            max:50,
            change: function(){
                sto_wid=$(this).slider("value");
            },
            slide:function(){
                sto_wid=$(this).slider("value");
            }
        });
        
    
    
    $('svg').on('mousedown',function(e){
        //console.log(e);
        if(!isPress){
            isPress=true;
            x=e.offsetX;
            y=e.offsetY;
            sto_wid=$('#slider').slider("value")
        }
    }).on('mouseup',function(e){
        if(isPress){
            isPress=false;
            var circle=document.createElementNS('http://www.w3.org/2000/svg','circle');
            $("svg").append(circle);
            $(circle)
                    .attr({
                        cx:x,
                        cy:y,
                        fill:$('#color').val(),
                        r:sto_wid/2})
                    .appendTo($(this));
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
                        'stroke-width':sto_wid})
                    .appendTo($(this));
    var circle=document.createElementNS('http://www.w3.org/2000/svg','circle');
            $("svg").append(circle);
            $(circle)
                    .attr({
                        cx:x,
                        cy:y,
                        fill:$('#color').val(),
                        r:sto_wid/2})
                    .appendTo($(this));

            x=e.offsetX;
            y=e.offsetY;
        };
    });
});