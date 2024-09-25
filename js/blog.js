document.getElementById('button-blog').addEventListener('click',function(){
    window.location.href = '/blog.html';

    
})

const blogButton =document.getElementById('button-blog');
    blogButton.style.backgroundColor = '#B4F461';

    document.getElementById('show-donation-button').addEventListener('click',function(){
        const donationButton = document.getElementById('show-donation-button');
        donationButton.style.backgroundColor = '#B4F461';

        const historyButton = document.getElementById('show-history-button');
        historyButton.style.backgroundColor = '#f7f4f4';

        document.getElementById('donation-card').classList.remove('hidden');
        document.getElementById('donation-card2').classList.remove('hidden');
        document.getElementById('donation-card3').classList.remove('hidden');

        document.getElementById('transaction-section').classList.add('hidden');

    })

    document.getElementById('show-history-button').addEventListener('click',function(){
        const historyButton = document.getElementById('show-history-button');
        historyButton.style.backgroundColor = '#B4F461';

        const donationButton = document.getElementById('show-donation-button');
        donationButton.style.backgroundColor = '#f7f4f4';

            showSectionById('transaction-section');
})

