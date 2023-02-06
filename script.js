const form = document.getElementById('calc-form')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    const peopleAmount = parseInt(document.querySelector('#amount-people').value)
    const totalSpent = parseInt(document.querySelector('#total-spent').value)
    const serviceQuality =parseFloat(document.querySelector('#quality-of-service').value)
    
    const totalTip = ((totalSpent / peopleAmount) * serviceQuality).toFixed(2)
    const tipDisplay = document.querySelector('#tip-to-pay')
    tipDisplay.textContent = 'Taxa total: R$ ' + totalTip + ' por pessoa'

    if(peopleAmount < 2 ) {
        tipDisplay.textContent = 'Gorjeta total: R$ ' + totalTip
    } 

    document.querySelector('#amount-people').value = ''
    document.querySelector('#total-spent').value = ''
    document.querySelector('#quality-of-service').value = '0'
    
})

