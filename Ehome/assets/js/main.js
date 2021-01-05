$(document).ready(function() {
     
    $('#owl-carousel-first').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items:1,
        autoplay:true,
        responsive:{
            769:{
                nav:true,
            },
        }
});

$('#owl-carousel-blog').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:4,
    autoplay:true,
    responsive:{
        0:{
            items:1,
        },
        500:{
            items:2,
        },
        700:{
            items:3,
        },
        769:{
            nav:true,
            items:3,
        },
        1000:{
            nav:true,
            items:4,
        }
        
    }
});

$('#owl-carousel-partner').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:8,
    autoplay:true,
    responsive:{
        0:{
            items:3,
        },
        361:{
            items:3,
        },
        470:{
            items:4,
        },
        644:{
            items:5,
        },
        769:{
            nav:true,
        },
        800:{
            nav:true,
            items:6,
        },
        1120:{
            nav:true,
            items:7,
        }
        
    }
});

window.onload = function () {
    $('.overlay_site').fadeOut('fast');
}

$(window).scroll(function () {
    if ($(this).scrollTop() >= 400) {
        $('#scroll_top').fadeIn("fast");
    } else {
        $('#scroll_top').fadeOut("fast");
    }
});

$('#scroll_top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});

$('.linkjoin').click(function (click) {
    click.preventDefault();
    $('.joinj').val('');
    $('#form-join2,#form-join').toggle();
    $('.input-signup,.signup2,.welcome,.text-secondary,.text-secondary2,.q1-modal,.q2-modal,.reset-modal').toggle();

    if ($('.linkjoin').text() == 'Login') {
      $('.linkjoin').text('Sign Up');
    }
    else {
      $('.linkjoin').text('Login');
    }

  })
  var menu_button = document.querySelector('.menu-button')
  var menu_content = document.querySelector('.menu-content')
  var main_header_wrapper = document.querySelector('.main_header_wrapper')
  var body = document.querySelector('body')
    menu_button.addEventListener('click',function(){
        if (menu_button.classList.contains('is-active')){
            menu_button.classList.remove('is-active');
            menu_content.classList.add('close');
            menu_content.classList.remove('open');
            main_header_wrapper.classList.remove('fix_position');
            body.classList.remove('overflow_hidden');
        }
        else{
            menu_button.classList.add('is-active');
            menu_content.classList.remove('close');
            menu_content.classList.add('open');
            main_header_wrapper.classList.add('fix_position');
            body.classList.add('overflow_hidden');
        }
    })

    document.querySelectorAll('.arrow').forEach(function(e){
        e.querySelector('i').addEventListener('click',function(){
            event.preventDefault()
            if (e.querySelector('i').classList.contains('fa-plus')){
                e.classList.add('open');
                e.closest('.menu__link').classList.add('active-parent');
                e.closest('.menu__item').querySelector('.menu__sub-menu').classList.add('open');
                // e.closest('.menu__item').querySelector('.menu__sub-menu').style.display='block';
                e.querySelector('i').classList.remove('fa-plus');
                e.querySelector('i').classList.add('fa-minus');
            }
            else{
                e.classList.remove('open');
                e.closest('.menu__link').classList.remove('active-parent');
                e.closest('.menu__item').querySelector('.menu__sub-menu').classList.remove('open');
                // e.closest('.menu__item').querySelector('.menu__sub-menu').style.display='none';
                e.querySelector('i').classList.add('fa-plus');
                e.querySelector('i').classList.remove('fa-minus');
            }

        })

    })

    document.querySelector('.all-popular-categories-view').addEventListener('click',function(){
        document.querySelector('.popular_categories_widget_ul').style.maxHeight="100%";
        document.querySelector('.all-popular-categories-view').style.display="none"
        document.querySelector('.not-all-popular-categories-view').style.display="block"
    })

    document.querySelector('.not-all-popular-categories-view').addEventListener('click',function(){
        document.querySelector('.popular_categories_widget_ul').style.maxHeight="640px";
        document.querySelector('.not-all-popular-categories-view').style.display="none"
        document.querySelector('.all-popular-categories-view').style.display="block"
    })

});