const container = document.querySelector(".container");
const form = document.querySelector("form");
const submit = document.querySelector(".submit");
const heading = document.querySelector("h1");
const ratings = document.querySelector(".ratings");
const icon = document.querySelector(".icon");
const caption = document.querySelector(".caption");
const orangeCaptionBox = document.querySelector(".orangeCaptionBox");


// boilerplate code for when ratings are submitted
function onSubmit(e) {
 e.preventDefault();
  const data = new FormData(e.target);
    const dataObj = Object.fromEntries(data.entries());
    
    // grab rating name attribute from form
    let ratingValue = dataObj.rating

    //  dynamic content of thank you page
       let newMessage = `You selected ${ratingValue} out of 5`;
        let orangeCaption = document.createElement("p");
    orangeCaption.innerHTML = newMessage;
    orangeCaptionBox.appendChild(orangeCaption);
    orangeCaption.classList.add("orangeCaptionStyling");

 
    ratings.innerHTML = "";
    submit.style.display = "none";
    icon.src = "images/illustration-thank-you.svg";
    heading.innerHTML = "Thank You!";
    caption.innerHTML = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
    // styling
    container.style.textAlign = "center";
}
// submit button listens for event listener
form.addEventListener("submit", onSubmit);