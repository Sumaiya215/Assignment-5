    
     const modal = document.getElementById("myModal");
     const modal2 =document.getElementById("myModal2");
     const modal3 =document.getElementById("myModal3");
     
     const openModalBtn = document.getElementById("button-donate-now");
     const openModalBtn2 = document.getElementById("button-donate-now-2");
     const openModalBtn3 = document.getElementById("button-donate-now-3");
    
     const closeModalFooter = document.getElementById("closeModalFooter");
     const closeModalFooter2 = document.getElementById("closeModalFooter2");
     const closeModalFooter3 = document.getElementById("closeModalFooter3");
     
     openModalBtn.addEventListener("click", function() {
     modal.classList.remove("hidden");
     });

     openModalBtn2.addEventListener("click", function() {
        modal2.classList.remove("hidden");
        });

        openModalBtn3.addEventListener("click", function() {
            modal3.classList.remove("hidden");
            });
    
     closeModalFooter.addEventListener("click", function() {
       modal.classList.add("hidden");
     });

     closeModalFooter2.addEventListener("click", function() {
        modal2.classList.add("hidden");
      });

      closeModalFooter3.addEventListener("click", function() {
        modal3.classList.add("hidden");
      });
    
     
    