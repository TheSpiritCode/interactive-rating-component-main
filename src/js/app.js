(()=>{
    const ratingForm = document.getElementById('rating');
    const slot = document.getElementById('slot');
    const thankYouBox = document.getElementById('thank-you');
    const surveyBox = document.getElementById('survey');

    onsubmit = (event)=>{
        event.preventDefault();
        let selectedRating = ratingForm.querySelector('input:checked');
        slot.innerText = selectedRating.value;
        surveyBox.style.display = "none";
        thankYouBox.style.display = "flex";

    }
})()