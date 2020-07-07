function validacaoEmail(field) {
  usuario = field.value.substring(0, field.value.indexOf("@"));
  dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
  
  if ((usuario.length >=1) ||
      (dominio.length >=3) || 
      (usuario.search("@")==-1) || 
      (dominio.search("@")==-1) ||
      (usuario.search(" ")==-1) || 
      (dominio.search(" ")==-1) ||
      (dominio.search(".")!=-1) ||      
      (dominio.indexOf(".") >=1)|| 
      (dominio.lastIndexOf(".") < dominio.length - 1)) {
        let textError = document.getElementById("msgemail");
        textError.style.display = "block";
        textError.style.color = "hsl(354, 100%, 66%)";
    
        let element = document.getElementById("email");
        element.style.border = "1px solid hsl(354, 100%, 66%)";
  }
  else{}
}