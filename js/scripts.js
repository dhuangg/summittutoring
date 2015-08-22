/**
 * Created by Daniel on 8/19/2015.
 */
$( document ).ready(function() {
    $('.collapse').collapse();

    $('#lol').on('mouseover',function(){
        swal({   title: "{Coder.Central();",
                text: "The monkeys behind the website! Visit www.codercentral.org for a website like this for only $500",
                imageUrl: "js/lol.jpg"
        });
    });
    $(function(){
        $("ul#ticker02").liScroll({travelocity: 0.15});
    });
});