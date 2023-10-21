let str="";
const div=document.getElementById('divide');
const bs=document.getElementById("backspace");
// console.log(div);
console.log(bs)
const buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        // console.log(e.target);
        if(e.target.innerHTML=='=')
        {
            try{
            str=eval(str);
           
        }
        catch(e){
            console.log(e);
            str="Syntax Error";
           

        }
        }
        else if (e.target.innerHTML=='C')
        {
            str="";
           
        }
        else if(e.target.innerHTML=='x')
        {
            str=str+'*';
           
            
        }
        else if (e.target==div)
        {
            str=str+'/';
           
        }
        else if(e.target==bs)
        {
        //    console.log('hello')
        console.log(str);
            str=str.substring(0,str.length-1);
            console.log(str);

            

        }
        else{
        str=str+e.target.innerHTML;
        
        }
        document.querySelector('.input-field').value=str;
    })
})