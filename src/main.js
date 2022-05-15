
let score = [];

const saveRating = (n) => {
           
    const rating = document.getElementById(`rating-${n}`);
    console.log(`rating-${n}`);
    console.log(rating);
    const save = rating.innerHTML;       
    console.log('save', save);
    score.shift();
    score.push(save);
    
}

// const saveRating2 = () => {
           
//     const rating = document.getElementById(`rating-2`);
//     console.log(`rating-2`);
//     console.log(rating);
//     const save2 = rating.innerHTML;       
//     console.log('save', save2);
//     saveRating.shift();
//     saveRating.push(save2);
     
// }

// const saveRating3 = () => {
           
//     const rating = document.getElementById(`rating-3`);
//     console.log(`rating-3`);
//     console.log(rating);
//     const save3 = rating.innerHTML;       
//     console.log('save', save3);
//     saveRating.shift();
//     saveRating.push(save3);
    
// }

// const saveRating4 = () => {
           
//     const rating = document.getElementById(`rating-4`);
//     console.log(`rating-4`);
//     console.log(rating.innerHTML);
//     const save4 = rating.innerHTML;       
//     console.log('save', save4);
//     saveRating.shift();
//     saveRating.push(save4);
     
// }

// const saveRating5 = () => {
           
//     const rating = document.getElementById(`rating-5`);
//     console.log(`rating-5`);
//     console.log(rating);
//     const save5 = rating.innerHTML;       
//     console.log('save', save5);
//     saveRating.shift();
//     saveRating.push(save5);    
// }

const submit = () => {
    document.querySelector('#main__section').toggleAttribute('hidden');    
    document.querySelector('#main__thank').toggleAttribute('hidden');
    const selected = document.getElementById("selected");
    selected.innerHTML = `You selected  ${score[0]} out of 5`;    
}



