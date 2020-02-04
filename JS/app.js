$(function() {
    
    
    /* Filter
    ===============================*/
    
    let filter = $("[data-filter]");
    
    filter.on("click", function(event) {
        event.preventDefault();
        
        let cat = $(this).data('filter');
        
        if(cat == 'All') {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function() {
                let workCat = $(this).data('cat');
                
                if(workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });
});


/* Modal
===============================*/
    
const modalCall = $("[data-modal]");
const modalClose = $("[data-close]");
    
    
modalCall.on("click", function(event) {
    event.preventDefault()
    
    let $this = $(this);
    let modalId = $this.data('modal');
    
    $(modalId).addClass('show');
    $("body").addClass('no-scroll');
    
    setTimeout(function() {
        $(modalId).find(".modal__dialog").css({
        transform: "rotateX(0)"
        });
    }, 200);
        
    });
    
    
    
modalClose.on("click", function(event) {
    event.preventDefault()
         
        
    let $this = $(this);
    let modalPatent = $this.parents('.modal');
        
   modalPatent.find(".modal__dialog").css({
       transform: "rotateX(90deg)"
    });
        
    setTimeout(function() {
           modalPatent.removeClass('show');
        $("body").removeClass('no-scroll');
    }, 200);
        
});
    
    
$(".modal").on("click", function(event) {
    let $this = $(this);
        
       $this.find(".modal__dialog").css({
           transform: "rotateX(90deg)"
       });
        
       setTimeout(function() {
           $this.removeClass('show');
           $("body").removeClass('no-scroll');
       }, 200);
});
    
    
$(".modal__dialog").on("click", function(event) {
    event.stopPropagation();
});
    
    
/* Smooth scroll */
    
$("[data-scroll]").on("click", function(Event) {
    Event.preventDefault();
        
    let blockId = $(this).data('scroll');
    let elementOffset = $(blockId).offset().top;
    
    $("html, body").animate({
        scrollTop:elementOffset
    }, 700);
});