document.getElementById('calcBtn').addEventListener('click',()=>{
    
    let currQty = parseFloat(document.getElementById('currQuantity').value);
    let currPrice = parseFloat(document.getElementById('currAverage').value);
    let purQty = parseFloat(document.getElementById('purQuantity').value);
    let purPrice = parseFloat(document.getElementById('purPrice').value);
    let res = document.getElementById('resultDiv')
    if([currPrice, currQty, purQty, purPrice].some(v => isNaN(v) || v <= 0 )){
        res.classList.toggle('hiddenDis');
        document.getElementById('WaccPrice').textContent = ' ';
        document.getElementById('PerShare').textContent = ' ';
        document.getElementById('result').textContent = "Please enter Numeric Values";
        return
    }

    let wacc = parseFloat(((currQty*currPrice)+(purQty*purPrice))/(purQty+currQty));
    let trimmed = wacc.toFixed(2)
    res.classList.toggle('hiddenDis');



    document.getElementById('result').textContent = `Rs ${trimmed}`;


})