
window.addEventListener('DOMContentLoaded', () => {

    (function(){
        let 
              scroll_trigger = document.getElementsByClassName('_scroll_top')[0]
        ;
        
        const pageScroll = {
        
            scrollTop: () => {
                let 
                     scroll_timer
                    ,page_position = window.pageYOffset
                ;  

                window.scrollTo(0, page_position - 100);

                if(page_position >= 0 && !page_position == 0){  
                        scroll_timer = setTimeout(() => {
                        pageScroll.scrollTop();
                    },0.01);
                } else {
                    clearTimeout(scroll_timer);
                }
            },

            scrollBtn: () => {
                let
                    page_position = window.pageYOffset
                ;

                if (page_position > 200) {
                    scroll_trigger.style.opacity = 1;
                } else {
                    scroll_trigger.style.opacity = 0;
                }
                
                
            }

        }// end pageScroll
    
        scroll_trigger.addEventListener('click',() => {
            pageScroll.scrollTop();
        });

        window.addEventListener('scroll',()=> {
            pageScroll.scrollBtn();
        });

    })();

});