import React from 'react';
import Star from 'star-rating-react-component'; 

let options = {
  name: 'custom',
  numOfStars: 5,
  starsWidth: 40,
  color: "orange",
  bgColor: "white",
  borderColor: "orange",
  scoreColor: "inherit"
}

 function Starr(){ 

   const handleScore = (score) => {
    console.log(score);
    document.getElementById("heading").innerHTML=score;
 }

return (
    <>
    <div className='text-center'>
     <Star options={options} handleScore={handleScore}/>
     <p id='heading' className='text-white'></p>

     </div>
    </>
     )
}
export default Starr