function Mycolor() {
    var element = document.querySelector("body");
    element.style.backgroundColor='#900';
}

window.onload = function(){
    
    document.querySelector('select').addEventListener('change', function()
    {
        
      if(this.value == "dark")
      {
        var element = document.querySelector("body");
        element.style.backgroundColor='#000';
      }else if(this.value == "light")
      {
        var element = document.querySelector("body");
        element.style.backgroundColor='#a7c4b2';
      }
        
        
    });
};
