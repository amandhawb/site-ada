document.getElementById("submit-button").addEventListener("click", validateForm)

function validateForm(){
  if (document.getElementById("name").value != "" && document.getElementById("email").value != "" && document.getElementById("number").value != "") {
    alert("Pronto! Você receberá as novidades por email.")
  }else{
    alert("Preencha os campos email, nome e número!")
  }
}



