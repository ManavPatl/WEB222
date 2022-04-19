function fm_valid(){
    var Valid = evryfmValid();
    if( Valid != true ){
        alert("Submission Failed!! Please see in Error Message");
    }
    else if(Valid == true)
    {
        alert("Submission Successful");
    }
    return Valid;
    }

function evryfmValid() {
    error_dsl();    
    
    return valproduct_id()&&!Product_decs()&&val_Prc()&&!val_usrnm()&&cb_valid();
   
 }  

 function valproduct_id(){
    var no_id = document.signup.entry01.value.length;
    if(no_id==8)
         return true;
    else
         return false;  
 }


function Product_decs(){
    var Product_decsvar;
    var rtn_data=0;
    var val_D = document.getElementById('inputidB');
    if(val_D==null){
        Product_decsvar =null;  
    }
    else
    {
        Product_decsvar =val_D.value;
        var look=/^[A-Z]/;
        var look2=/^[A-Za-z ]+$/;       
        if(!look.test(Product_decsvar)){
            rtn_data= 1;
        }

        else if(!look2.test(Product_decsvar)){
            rtn_data=2;
        } 

        else if(!look.test(Product_decsvar)&&!look2.test(Product_decsvar)){
            rtn_data=2;
        }
    }
       
   
    return rtn_data;    
 }


function val_Prc(){   
    var valprc_d=document.signup.inputidB;
    
    if(document.signup.inputidB.value>1000){
        return false;
    } 
    else{
        return true;
    }
    return true;
} 

function val_usrnm(){
    var valusrnm_d=document.signup.entry04.value;
    var look=/^[A-Za-z]/;
    var rtn_data=0; 
    if (valusrnm_d.length < 6) {       
        rtn_data=1;        
    }

    if(!look.test(valusrnm_d)){
        rtn_data= 2;
    }

    if(valusrnm_d.length < 6&&!look.test(valusrnm_d)){
        rtn_data= 2;
    }
    
    return rtn_data;  
} 
 
function cb_valid () {
  if (check_no() == 0) {                                  
    return false; 
  }    
  else{
      return true;
  }
  return true;     
}  

function check_no() {
    var cheno_d = document.signup.entry05.length;
    var flag = 0;
var x=0;
    while(x<cheno_d) {
        if (document.signup.entry05[x].checked == true) { 
           flag=flag+1;
        } 
        x=x+1;
    }   
    return flag;		
}

function error_dsl() {   
    var data_e=0;
  document.querySelector('#errordata').innerHTML = "<h2>Error Message</h2>";
    if(!valproduct_id()&&data_e<2)
    {
     document.querySelector('#errordata').innerHTML+="<p><mark>Product ID: <br></mark> Should be 8 characters long</p>";  
     data_e = data_e+1;
    }

   if(Product_decs()==1&&data_e<2){
    document.querySelector('#errordata').innerHTML+="<p><mark>Product Description: <br></mark>  should begin with a capital</p>";
    data_e = data_e+1;
}
    else if(Product_decs()==2&&data_e<2){
    document.querySelector('#errordata').innerHTML+="<p><mark>Product Description: <br></mark>  only alphabet are allowed</p>"; 
    data_e = data_e+1;
}
   else if(Product_decs()==2&&data_e<2){
    document.querySelector('#errordata').innerHTML+="<p><mark>Product Description: <br></mark>  should begin with a capital and only alphabet are allowed</p>";  
    data_e = data_e+1;
}
   else if(!val_Prc()&&data_e<2){
    document.querySelector('#errordata').innerHTML+="<p><mark>Price: <br></mark>  price should be less than 1000</p>";
    data_e = data_e+1;
}

  else if(val_usrnm()==1&&data_e<2){
    document.querySelector('#errordata').innerHTML+="<p><mark> Username: <br></mark> should have at least 6 characters</p>"; 
    data_e = data_e+1;
}
    else if(val_usrnm()==2&&data_e<2){
    document.querySelector('#errordata').innerHTML+="<p><mark> Username: <br></mark> should begin with an alphabet</p>"; 
    data_e = data_e+1;
}
  else  if(val_usrnm()==2&&data_e<2){
    document.querySelector('#errordata').innerHTML+="<p><mark> Username: <br></mark> should begin with an alphabet & should have at least 6 characters</p>"; 
    data_e = data_e+1;
}

    else if(!cb_valid()&&data_e<2){
    document.querySelector('#errordata').innerHTML+="<p><mark>Status of supplier: <br></mark> User should select at least one of the check box</p>";
    data_e = data_e+1;
}
} 

function  err_vipe() {
  document.querySelector('#errordata').innerHTML = " ";    
} 
function fvalid(){
    var Valid = evryfmValid();
    if( Valid != true ){
        alert("Submission Failed!! Please see in Error Message");

    }
    else{
        alert("Submission Successful");

    }
    return Valid;
    }

function evryfmValid() {
    error_dsl();    
    
    return valproduct_id()&&!Product_decs()&&val_Prc()&&!val_usrnm()&&cb_valid();
   
 }  


 function valproduct_id(){
    var no_id = document.signup.entry01.value.length;
    if(no_id==8)
         return true;
    else
         return false;  
 }

 
function Product_decs(){
    var Product_decsvar;
    var rtn_data=0;
    var val_D = document.getElementById('inputidB');
    if(val_D!=null){
        Product_decsvar =val_D.value;
        var look=/^[A-Z]/;
        var patternChar=/^[A-Za-z ]+$/;      
       
        if(!look.test(Product_decsvar)){
            rtn_data= 1;
        }
        if(!patternChar.test(Product_decsvar)){
            rtn_data=2;
        } 
        if(!look.test(Product_decsvar)&&!patternChar.test(Product_decsvar)){
            rtn_data=2;
        }
    }
    else
    {
        Product_decsvar =null; 
    } 
   
    return rtn_data;    
 }


function val_Prc(){   
    var valprc_d=document.signup.inputidB;

    if(document.signup.inputidB.value>1000){
        return false;
    } 
    else{
        return true;
    }
    return true;
}

function val_usrnm(){
    var valusrnm_d=document.signup.entry04.value;
    var look=/^[A-Za-z]/;
    var rtn_data=0; 
    if (valusrnm_d.length < 6) {       
        rtn_data=1;        
    }
    if(!look.test(valusrnm_d)){
        rtn_data= 2;
    }    
    if(valusrnm_d.length < 6 && !look.test(valusrnm_d)){
        rtn_data= 2;
    }
    
    return rtn_data;  
} 

function cb_valid () {
  if (check_no() == 0) {                                  
    return false; 
  }    
  else{
      return true;
  }
  return true;     
}  

function check_no() {
    var cheno_d = document.signup.entry05.length;
    var flag = 0;
var x=0;
    while(x<cheno_d){
        if (document.signup.entry05[x].checked == true) { 
           flag=flag+1;
        } 
        x=x+1
    }   
    return flag;		
}

function error_dsl() {   
    var data_e=0;
  document.querySelector('#errordata').innerHTML = "<h2>Error Message</h2>";
    if(!valproduct_id()&&data_e<2){
     document.querySelector('#errordata').innerHTML+="<p><mark>Product ID: <br></mark> Should be 8 characters long</p>";  
     data_e = data_e+1;
    }

   if(Product_decs()==1&&data_e<2){
    document.querySelector('#errordata').innerHTML+="<p><mark>Product Description: <br></mark>  should begin with a capital</p>";
    data_e = data_e+1;
}
    else if(Product_decs()==2&&data_e<2){
    document.querySelector('#errordata').innerHTML+="<p><mark>Product Description: <br></mark>  only alphabet are allowed</p>"; 
    data_e = data_e+1;
}
    else if(Product_decs()==2&&data_e<2){
    document.querySelector('#errordata').innerHTML+="<p><mark>Product Description: <br></mark>  should begin with a capital and only alphabet are allowed</p>";  
    data_e = data_e+1;
}
    else if(!val_Prc()&&data_e<2){
    document.querySelector('#errordata').innerHTML+="<p><mark>Price: <br></mark>  price should be less than 1000</p>";
    data_e = data_e+1;
}

   else if(val_usrnm()==1&&data_e<2){
    document.querySelector('#errordata').innerHTML+="<p><mark> Username: <br></mark> should have at least 6 characters</p>"; 
    data_e = data_e+1;
}
    else if(val_usrnm()==2&&data_e<2){
    document.querySelector('#errordata').innerHTML+="<p><mark> Username: <br></mark> should begin with an alphabet</p>"; 
    data_e = data_e+1;
}
   else if(val_usrnm()==2&&data_e<2){
    document.querySelector('#errordata').innerHTML+="<p><mark> Username: <br></mark> should begin with an alphabet & should have at least 6 characters</p>"; 
    data_e = data_e+1;
}

    else if(!cb_valid()&&data_e<2){
    document.querySelector('#errordata').innerHTML+="<p><mark>Status of supplier: <br></mark> User should select at least one of the check boxes</p>";
    data_e = data_e+1;
}
} 

function  err_vipe() {
  document.querySelector('#errordata').innerHTML = " ";    
} 