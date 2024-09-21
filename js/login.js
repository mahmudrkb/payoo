// console.log('button click')

//  steep-1
document.getElementById('btn-login')
  .addEventListener('click',function(event){
    
    // steep-2 
    event.preventDefault();

    console.log('button click')


    // step-3

    const phNum=document.getElementById('ph-num').value;

    console.log(phNum)
     
  } )