$(document).ready(function() {

  var alphabet_dropdownn_text = document.querySelector('.alphabet-dropdown').innerText;
  var price_dropdownn_text = document.querySelector('.price-dropdown').innerText;
  var new_or_old_dropdownn_text = document.querySelector('.new-or-old-dropdown').innerText;
  var queue_dropdownn_text = document.querySelector('.queue-dropdown').innerText;

  document.onclick = function (e) {
    if (! e.target.closest('.alphabet-dropdown')){
        document.querySelector('.alphabet-dropdown-list').classList.remove('d-block')
        document.querySelector('.alphabet-dropdown-list').classList.add('d-none')
        document.querySelector('.alphabet-dropdown-list').closest('.header-tag-filter').querySelector('i').classList.add('fa-caret-down')
        document.querySelector('.alphabet-dropdown-list').closest('.header-tag-filter').querySelector('i').classList.remove('fa-caret-up')
    }
    if(! e.target.closest('.price-dropdown')){
      document.querySelector('.price-dropdown-list').classList.remove('d-block')
      document.querySelector('.price-dropdown-list').classList.add('d-none')
      document.querySelector('.price-dropdown-list').closest('.header-tag-filter').querySelector('i').classList.add('fa-caret-down')
      document.querySelector('.price-dropdown-list').closest('.header-tag-filter').querySelector('i').classList.remove('fa-caret-up')
  }
  if(! e.target.closest('.new-or-old-dropdown')){
    document.querySelector('.new-or-old-dropdown-list').classList.remove('d-block')
    document.querySelector('.new-or-old-dropdown-list').classList.add('d-none')
    document.querySelector('.new-or-old-dropdown-list').closest('.header-tag-filter').querySelector('i').classList.add('fa-caret-down')
    document.querySelector('.new-or-old-dropdown-list').closest('.header-tag-filter').querySelector('i').classList.remove('fa-caret-up')
}
if(! e.target.closest('.queue-dropdown')){
  document.querySelector('.queue-dropdown-list').classList.remove('d-block')
  document.querySelector('.queue-dropdown-list').classList.add('d-none')
  // document.querySelector('.queue-dropdown-list').closest('.header-tag-filter').querySelector('i').classList.add('fa-caret-down')
  // document.querySelector('.queue-dropdown-list').closest('.header-tag-filter').querySelector('i').classList.remove('fa-caret-up')
}
  }

  document.querySelectorAll('.dropdownn-filter').forEach(function(e){
    e.addEventListener('click',function(){
    if (e.closest('.header-tag-filter').querySelector('.dropdownn-filter-list').classList.contains('d-none')){
      e.closest('.header-tag-filter').querySelector('.dropdownn-filter-list').classList.remove('d-none')
      e.closest('.header-tag-filter').querySelector('.dropdownn-filter-list').classList.add('d-block')
      if(e.closest('.header-tag-filter').querySelector('i').classList.contains('fa')){
        e.closest('.header-tag-filter').querySelector('i').classList.remove('fa-caret-down')
        e.closest('.header-tag-filter').querySelector('i').classList.add('fa-caret-up')
      }

    }
    else {
      e.closest('.header-tag-filter').querySelector('.dropdownn-filter-list').classList.remove('d-block')
      e.closest('.header-tag-filter').querySelector('.dropdownn-filter-list').classList.add('d-none')
      if(e.closest('.header-tag-filter').querySelector('i').classList.contains('fa')){
        e.closest('.header-tag-filter').querySelector('i').classList.add('fa-caret-down')
        e.closest('.header-tag-filter').querySelector('i').classList.remove('fa-caret-up')
      }
    }
  }) 
})

document.querySelectorAll('.alphabet-type-list').forEach(function(element){
    element.addEventListener('click',function(){
        let list_option = element.innerText
        document.querySelector('.alphabet-dropdown-featured').innerText=list_option
        alphabet_dropdown_text = list_option
    })
})

document.querySelectorAll('.price-type-list').forEach(function(element){
  element.addEventListener('click',function(){
      let list_option = element.innerText
      document.querySelector('.price-dropdown-featured').innerText=list_option
      price_dropdown_text = list_option
  })
})

document.querySelectorAll('.new-or-old-type-list').forEach(function(element){
  element.addEventListener('click',function(){
      let list_option = element.innerText
      document.querySelector('.new-or-old-dropdown-featured').innerText=list_option
      new_or_old_dropdown_text = list_option
  })
})

document.querySelectorAll('.queue-type-list').forEach(function(element){
  element.addEventListener('click',function(){
      let list_option = element.innerText
      document.querySelector('.queue-dropdown-featured').innerText=list_option
      queue_dropdown_text = list_option
  })
})
     
    $('#owl-carousel-category').owlCarousel({
        loop:false,
        margin:20,
        nav:true,
        items:6,
        // autoplay:true,
        responsive:{
            0:{
                items:2,
            },
            361:{
                items:2,
            },
            550:{
                items:3,
            },
            720:{
                items:4,
            },
            950:{
                nav:true,
                dots:true,
                items:5,
            },
            1120:{
                nav:true,
                dots:false,
                items:6,
            }
            
        }
    });

    document.querySelectorAll('.filter-name').forEach(function(e){
        e.addEventListener('click',function(){
            let subfilter_name = e.getAttribute('name');
            if (!e.classList.contains('open_filter')){
                document.querySelectorAll('.filter-name').forEach(function(elem){
                    elem.classList.remove('open_filter');
                    elem.querySelector('i').classList.add('fa-caret-down')
                    elem.querySelector('i').classList.remove('fa-caret-up')
                })
                document.querySelector('.filters_inner_wrapper').querySelectorAll('.filters_inner_list').forEach(function(filter_el){
                    filter_el.classList.remove('active_filter')
                })
                e.classList.add('open_filter');
                e.querySelector('i').classList.remove('fa-caret-down')
                e.querySelector('i').classList.add('fa-caret-up')
                e.closest('.product_filters_container').querySelector('.filters_inner_wrapper').style.visibility='visible'
                e.closest('.product_filters_container').querySelector('.filters_inner_wrapper').style.padding='30px 0px'
                // e.closest('.product_filters_container').querySelector('.filters_inner_wrapper').style.display='block'
                e.closest('.product_filters_container').querySelector('.filters_inner_wrapper').style.opacity='1'
                e.closest('.product_filters_container').querySelector('.filters_inner_wrapper').style.maxHeight='2000px'
                e.closest('.product_filters_container').querySelector('.filters_inner_wrapper').style.transition='max-height 0.8s ease 0s, opacity 0.1s ease 0s, visibility 0.3s ease 0s'
                e.closest('.product_filters_container').querySelectorAll(`[name=${subfilter_name}]`)[1].classList.add('active_filter')
                
            }
            else{
                e.querySelector('i').classList.add('fa-caret-down')
                e.querySelector('i').classList.remove('fa-caret-up')
                e.classList.remove('open_filter');
                // e.closest('.product_filters_container').querySelector('.filters_inner_wrapper').style.display='none'
                e.closest('.product_filters_container').querySelector('.filters_inner_wrapper').style.visibility='hidden'
                e.closest('.product_filters_container').querySelector('.filters_inner_wrapper').style.padding='0px 0px'
                e.closest('.product_filters_container').querySelector('.filters_inner_wrapper').style.opacity='0'
                e.closest('.product_filters_container').querySelector('.filters_inner_wrapper').style.maxHeight='0px'
                e.closest('.product_filters_container').querySelector('.filters_inner_wrapper').style.transition='0s ease all'
                e.closest('.product_filters_container').querySelectorAll(`[name=${subfilter_name}]`)[1].classList.remove('active_filter')
            }
            
        })
    })

    $("#slider-range").slider({
        range: true,
        orientation: "horizontal",
        min: 0,
        max: 10000,
        values: [0, 10000],
        step: 100,
      
        slide: function (event, ui) {
          if (ui.values[0] == ui.values[1]) {
            return false;
          }
          
          $("#min_filterr").val(ui.values[0]);
          $("#max_filterr").val(ui.values[1]);
        }
      });

      $("#slider-range2").slider({
        range: true,
        orientation: "horizontal",
        min: 0,
        max: 10000,
        values: [0, 10000],
        step: 100,
      
        slide: function (event, ui) {
          if (ui.values[0] == ui.values[1]) {
            return false;
          }
          
          $("#min_filterr2").val(ui.values[0]);
          $("#max_filterr2").val(ui.values[1]);
        }
      });

      $("#slider-range3").slider({
        range: true,
        orientation: "horizontal",
        min: 0,
        max: 10000,
        values: [0, 10000],
        step: 100,
      
        slide: function (event, ui) {
          if (ui.values[0] == ui.values[1]) {
            return false;
          }
          
          $("#min_filterr3").val(ui.values[0]);
          $("#max_filterr3").val(ui.values[1]);
        }
      });

      $('#owl-carousel-last-viewed-item').owlCarousel({
        loop:false,
        margin:9,
        nav:false,
        autoplay:false,
        dots:false,
        responsive:{
            0:{
                items:3,
            },
            361:{
                items:4,
            },
            470:{
                items:5,
            },
            644:{
                items:6,
            },
            769:{
                nav:true,
            },
            800:{
                nav:true,
                items:7,
            },
            1120:{
                nav:true,
                items:4,
            }
            
        }
    });

});