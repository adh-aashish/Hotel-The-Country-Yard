const comments = document.querySelectorAll('.comment');
const autoGrid = true;
const intervalTimeGrid = 25000;
let slideIntervalGrid;

const nextSlideGrid = ()=>{
   const currentComment = document.querySelector('.current.comment');
   for(let i=0; i < comments.length;i++){
       currentComment.classList.remove('current');   
       if(currentComment.nextElementSibling){
        currentComment.nextElementSibling.classList.add('current');
       }
       else{
        comments[0].classList.add('current');
       }
      // setTimeout(() => currentGrid.classList.remove('current-grid'),200);
   }
};


if (autoGrid) {
    // Run next slide at interval time
    slideIntervalGrid = setInterval(nextSlideGrid, intervalTimeGrid);
  }
  


