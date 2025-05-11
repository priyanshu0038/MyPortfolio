// Handle page turn buttons
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((btn, index) => {
    btn.onclick = () => {
        const pageTurnId = btn.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        } else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }
    };
});

// Handle "Contact Me" button click to open all pages
const pages = document.querySelectorAll('.book-page.page-right'); // fixed selector
const contactMeBtn = document.querySelector('.btn.contact-me');    // fixed selector

    contactMeBtn.onclick = () => {
        pages.forEach((page, index) => {
            setTimeout(() => {
                page.classList.add('turn');
                setTimeout(() => {
                    page.style.zIndex = 20 + index;
                }, 500)
            }, (index + 1) * 200 + 100);
        });
    };

let totalPage=pages.length;
let pageNumber=0;

function reverseIndex(){
    pageNumber--;
    if(pageNumber<0){
        pageNumber= totalPage-1;
    }
}
const backProfileBtn = document.querySelector('.Back-profile')

backProfileBtn.onclick=()=>{
    pages.forEach((_,index)=> {
        setTimeout(()=>{
            reverseIndex();
            pages[pageNumber].classList.remove('turn');
            setTimeout(() => {
                reverseIndex();
              pages[pageNumber].style.zIndex=10 + index
            } , 500)
        },(index + 1)*200+100)
          
    })
}

const coverReight=document.querySelector('.cover.cover-right');
const pageLeft=document.querySelector('.book-page.page-left');
setTimeout(()=>{
    coverReight.classList.add('turn');
}, 2100)

setTimeout(()=>{
    coverReight.style.zIndex=-1;
}, 2800)


setTimeout(()=>{
    pageLeft.style.zIndex=20;
}, 3200)

pages.forEach((_,index)=> {
    setTimeout(()=>{
        reverseIndex();
        pages[pageNumber].classList.remove('turn');
        setTimeout(() => {
            reverseIndex();
          pages[pageNumber].style.zIndex=10 + index
        } , 500)
    },(index + 1)*200+2100)
      
})