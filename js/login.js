// console.log('button click')

//  steep-1
document.getElementById('btn-login')
  .addEventListener('click',function(event){
    
    // steep-2 
    event.preventDefault();

    console.log('button click')


    // step-3

    const phNum=document.getElementById('ph-num').value;

    const pinNum=document.getElementById('pin-num').value;

    console.log(phNum, pinNum)


    // bad way to valued 


    if(phNum==='5' && pinNum==='1234'){

      console.log('you are login');


    window.location.href ="./homepage.html"



    }

    else{
      alert('please correct your phone num and pin')
    }
     
  } )