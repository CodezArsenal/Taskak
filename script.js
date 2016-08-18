$(document).ready(function(){


    //to focus on the input form once the page is ready
    $('input[name=checkListItem]').focus();

    var styleCheck = function(){
        var listLength = $('.list .item').length;
        if (listLength == 1) {
            $('.item').css({
                "border-radius":"5px",
                "border":"none",
            });
        }else{
            $('.item').last().css({
                    "border-radius":"0 0 5px 5px",
                    "border-bottom":"none",
                });
            $('.item').first().css({
                    "border-radius":"5px 5px 0 0",
                });
        };
    }


    var itemAdding = function (){
        var toAdd = $('input[name=checkListItem]').val();
        //$('.list').append('<div class="itemPack"><div class="item">' + toAdd + '</div><img src="plusMark.png" class="checkButton"/></div>');
        $('<div class="itemPack"><div class="item">' + toAdd + '</div><img src="plusMark.png" class="checkButton"/></div>').appendTo('.list');

       var firstRowWidth = $('.firstRow').width();
        $('.list').css({
            "margin-top":"10px",
            //"border":"1px solid black",
            "width":firstRowWidth,

        });

        $('.itemPack').css({
            "margin":"0",
            "padding":"0px",
            "width":firstRowWidth,
        });
        $('.item').css({
                "background-color": "#f7f6ee",
                "opacity": "0.5",

                "width": "300px",
                "height": "25px",
                "padding": "5px",
                "display":"inline-block",

                "font-size": "15px",
                "font-weight": "bold",
                "font-family":"'Titillium Web' , Helvetica , sans-serif",


                "border-bottom":"1px solid #006440",
                "border-radius":"0",

                "margin":"0px",

                "float":"left",

            });
        $('.item').last().css({
                "border-radius":"0 0 5px 5px",
                "border-bottom":"none",
            });
        $('.item').first().css({
                "border-radius":"5px 5px 0 0",
            });

        $('.checkButton').css({
                "display": "inline-block",
                "width": "25px",
                "height": "25px",

                "cursor": "pointer",

                "margin":"0",
                "margin-right":"5px",
                "margin-top":"5px",

                "float":"right",

                "transform": "rotate(45deg)",
                "-webkit-transform":"rotate(45deg)",
                "-moz-transform":"rotate(45deg)",
                "-o-transform":"rotate(45deg)",
                "-ms-transform":"rotate(45deg)",
        });


        //to clear the inputs
        $('input[name=checkListItem]').val('');
        $('input[name=checkListItem]').focus();

        styleCheck();
    
    };


    $('#addButton').click(function(){
        var inputVal = $('input[name="checkListItem"]').val();
        if(inputVal != ''){
            itemAdding();
        }
        
    });
    
    $('input').keydown(function(event){
        if(event.which == 13 || event.keyCode == 13){

        var inputVal = $('input[name="checkListItem"]').val();
        if(inputVal != ''){
            itemAdding();
        }

        //all of them work >> to prevent Enter key from submiting (refreshing the page)
        //return false;
        event.preventDefault();
        };

    });


    $(document).on('click' , '.checkButton' , function(){
        $(this).parent().remove();

        styleCheck();


    });

});