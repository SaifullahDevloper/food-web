// active navbar

let nav = document.querySelector(".navigation-wrap")
  window.scroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");

    }else{
        nav.classList.remove("scroll-on");
 
    }
  }

// nav hide 

//counter design

document.addEventListener("DOMContentLoaded", ()=> {
        function counter(id, start, end, duration){
            let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor( duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if(current == end){
                    clearInterval(timer); 
                }
            }, step);
        }
        counter("count1", 0, 1200, 1000);
        counter("count2", 0, 1000, 1000);
        counter("count3", 0, 1100, 1000);
        counter("count4", 0, 1300, 1000);

});
