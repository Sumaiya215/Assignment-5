document.getElementById('button-donate-now').addEventListener('click',function(event){
    event.preventDefault();

    const inputDonate = getInputFieldValueById('input-button');
     const balance = getTextFieldValueById('account-balance');
    
     if( isNaN(inputDonate)){
        alert('Invalid Input!');
        return;
    }
    if(inputDonate > 0 && inputDonate < balance){
      
        const donateBalance = getTextFieldValueById('donation-balance');
        
        const updatedBalance = donateBalance + inputDonate;
        document.getElementById('donation-balance').innerText = updatedBalance;

        const newBalance = balance - inputDonate;
        document.getElementById('account-balance').innerText = newBalance;

         // add to transaction history
         const amount = document.createElement('div');
         amount.classList.add("mt-6","w-3/4","mx-auto","border","border-slate-400","rounded-lg");
         amount.innerHTML = `

         <p class="ml-3 font-bold px-3 py-4"> ${inputDonate} Taka is Donated for flood at Noakhali, Bangladesh </p>
         ` 

         document.getElementById('transaction-container').appendChild(amount);

 }
    else{
        
        alert('Donation failed!');
        return;
        
    }
})

document.getElementById('button-donate-now-2').addEventListener('click',function(event){
    event.preventDefault();

    const inputDonate2 = getInputFieldValueById('input-button-2');
     const balance = getTextFieldValueById('account-balance');
    
     if( isNaN(inputDonate2)){
        alert('Invalid Input!');
        return;
    }
    if(inputDonate2 > 0 && inputDonate2 < balance){
    
        const donateBalance2 = getTextFieldValueById('donation-balance-2');
        
        const updatedBalance2 = donateBalance2 + inputDonate2;
        document.getElementById('donation-balance-2').innerText = updatedBalance2;

        const newBalance = balance - inputDonate2;
        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history
        const amount2 = document.createElement('div');
         amount2.classList.add("mt-6","w-3/4","mx-auto","border","border-slate-400","rounded-lg");
         amount2.innerHTML = `

         <p class="ml-3 font-bold px-3 py-4"> ${inputDonate2} Taka is Donated for famine-2024 at Feni, Bangladesh </p>
         `
        
         document.getElementById('transaction-container').appendChild(amount2);
        

 }
    else{
        
        alert('Donation failed!');
        return;
        
    }
})

document.getElementById('button-donate-now-3').addEventListener('click',function(event){
    event.preventDefault();

    const inputDonate3 = getInputFieldValueById('input-button-3');
     const balance = getTextFieldValueById('account-balance');
    
     if( isNaN(inputDonate3)){
        alert('Invalid Input!');
        return;
    }
    if(inputDonate3 > 0 && inputDonate3 < balance){
      
        const donateBalance3 = getTextFieldValueById('donation-balance-3');
        
        const updatedBalance3 = donateBalance3 + inputDonate3;
        document.getElementById('donation-balance-3').innerText = updatedBalance3;

        const newBalance = balance - inputDonate3;
        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history
        const amount3 = document.createElement('div');
         amount3.classList.add("mt-6","w-3/4","mx-auto","border","border-slate-400","rounded-lg");
         amount3.innerHTML = `

         <p class="ml-3 font-bold px-3 py-4"> ${inputDonate3} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh </p>
         `
         
         document.getElementById('transaction-container').appendChild(amount3);
        


 }
    else{
        
        alert('Donation failed!');
        return;
        
    }
})