

let star1 = document.querySelectorAll(".star1 i ");

star1.forEach((star,index1) =>{
    star.addEventListener("click", () => {

        star1.forEach((star,index2) =>{
        index1 >= index2 ? star.classList.add("active"): star.classList.remove("active")
            
        })
    });
});



// let star = document.querySelectorAll(".star1 i ");

// // let n = "12345";

//  star.addEventListener("click" , () => {
//     for(let index1=0; index1<=n;index1++) {
        
//          if (n===1)Math ="one";
        
        
       
//         //   else if (n==2)Math ="two";
         
//         //     else if (n==3)Math ="three";
             
//         //       else if (n==4)Math ="four";
               
//         //         else if (n==5)Math ="five";

//              index1>= n?  star.classList.add("active"): star.classList.remove("active")
//             //  index1>= n?  star1.classList.add("active"): star1.classList.remove("active")
//             //  index1>= index3?  star1.classList.add("active"): star1.classList.remove("active")
//             //  index1>= index4?  star1.classList.add("active"): star1.classList.remove("active")
//             //  index1>= index5?  star1.classList.add("active"): star1.classList.remove("active")    
   
//     document.querySelectorAll(".star1 ").style.backgroundColor = "orange";
//     }
   
// });

//  star.addEventListener("click",()=>{
//     for(let index1=0;index1<=n;index1++){
//     if(n==2)Math ="two";
//     index>= n?  star.classList.add("active"): star.classList.remove("active")}
// });






// // function remove(handelar2){
// //     let i =0;
// //     while (i<5){
// //         star1[i].className="star1";
// //         i++;
// //     }
// //     document.querySelector(".star1").style.backgroundColor = "black";
// // }


// // // let currMode = "light";

// // //  modebtn.addEventListener("click", () => {
// // //     if(currMode === "light") {
// // //         currMode = "dark";
// // //         document.querySelector("body").style.backgroundColor = "black";
// // //     }
// // //     else{
// // //         currMode = "light";
// // //         document.querySelector("body").style.backgroundColor = "white";

// // //     }
// // //     console.log(currMode);

// // // });



    









































// //  console.log("stars");
// //  console.log("gfg(1)", gfg);
// // let i = 1;



// //  function gfg(n) {
// //         remove()
// //        for(i=0; i<=n; i++){
// //           if (n===1) cls = "one";
// //         else if (n==2) cls ="two";
// //          else if (n==3) cls ="three";
// //           else if (n==4) cls ="four";
// //            else if (n==5) cls ="five";
// //             stars [i].className = "card"+"cls";
// //         }
// //         output.innerText = "Rating is: " + "n" + "/5";
// //         // console.log(star[i]);
// //      };

// //  stars.onmouseclick = () => {
// //     console.log("you are in star");
// //  }


// //  stars.addEventListener("click");





// // function gfg(n) {
// //     // remove()
// //     for(i=0; i<=n; i++){
// //         if (n===1) cls = "one";
// //         else if (n==2) cls ="two";
// //         else if (n==3) cls ="three";
// //         else if (n==4) cls ="four";
// //         else if (n==5) cls ="five";
// //         stars [i].className = "card"+"cls";
// //     }
// //     output.innerText = "Rating is: " + "n" + "/5";
// //     // console.log(star[i]);
// // };
// // function remove() {
// //     // Reset all cards to their default class
// //     for (let i = 0; i < stars.length; i++) {
// //         stars[i].className = "card";
// //     }
// // };