$(document).ready(function () {
    document.querySelectorAll('.right-side-opener').forEach(function (e) {
        e.addEventListener('click', function () {
            document.querySelector('.line-side').classList.add('line-side-openn')
            document.querySelector('.line-side').classList.remove('line-side-closee');
        })
    })
    document.querySelectorAll('.exit-svg-right-side').forEach(function (e) {
        e.addEventListener('click', function () {
            document.querySelector('.line-side').classList.remove('line-side-openn')
            document.querySelector('.line-side').classList.add('line-side-closee');
        })
    })
    document.onclick = function (f) {
        if (!f.target.closest('.right-side-line')) {
            document.querySelector('.line-side').classList.remove('line-side-openn')
            document.querySelector('.line-side').classList.add('line-side-closee');
        }
    }

    document.querySelectorAll('.exit-svg-right-side-item').forEach(function (elem) {
        elem.addEventListener('click', function () {
            updateCartTotal(elem)
            elem.closest('.inside-right-side-item').remove();
            
        })
    })


    function updateCartTotal(x){
        var sum = x.closest('.inside-right-side-item').querySelector('.price-right-side-item').innerText;
        sum = parseInt(sum.split(" ")[0])
        console.log(sum)
    }

})