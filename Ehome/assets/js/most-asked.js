$(document).ready(function() {

    document.querySelectorAll('.most-asked-questions').forEach(function(element){
        element.addEventListener('click',function(){
            let most_asked_question_answer = element.closest('.most-asked-question-answer')
            let most_asked_answer = most_asked_question_answer.querySelector('.most-asked-answers')
            if (most_asked_answer.style.maxHeight){
                most_asked_answer.style.maxHeight = null;
                most_asked_question_answer.querySelector('i').style.transform="rotate(90deg)"
                // most_asked_question_answer.querySelector('i').style.marginTop="0px"
              } else {
                most_asked_answer.style.maxHeight = most_asked_answer.scrollHeight + "px";
                most_asked_question_answer.querySelector('i').style.transform="rotate(-90deg)"
                // most_asked_question_answer.querySelector('i').style.marginTop="6px"
                most_asked_question_answer.querySelector('i').style.transition="transform 0.5s"
              } 
            // if (!most_asked_question_answer.querySelector('.most-asked-answers').classList.contains('most-asked-answers-open')){
            //     most_asked_question_answer.querySelector('.most-asked-answers').classList.add('most-asked-answers-open')
            //     most_asked_question_answer.querySelector('i').style.transform="rotate(180deg)"
            //     most_asked_question_answer.querySelector('i').style.marginTop="6px"
            //     most_asked_question_answer.querySelector('i').style.transition="transform 0.5s"
            //     // most_asked_question_answer.querySelector('i').classList.remove('fa-caret-down')
            // }
            // else{
            //     most_asked_question_answer.querySelector('.most-asked-answers').classList.remove('most-asked-answers-open')
            //     most_asked_question_answer.querySelector('i').style.transform="rotate(0deg)"
            //     most_asked_question_answer.querySelector('i').style.marginTop="0px"
            //     // most_asked_question_answer.querySelector('i').classList.add('fa-caret-down')
            //     // most_asked_question_answer.querySelector('i').classList.remove('fa-caret-up')
            // }
        })
    })

})