emailjs.init("user_VcYCrG7dECgiBEKlb4cHB")

const form = {
  from: document.querySelector("#from"),
  message: document.querySelector("#message")
}

function submitMessage() {
 emailjs.send("service_x8gitpp", "template_sjb4cdr", {
    to_name: "The One Who Measures",
    from_name: form.from.value,
    message: form.message.value
  },"user_VcYCrG7dECgiBEKlb4cHB")
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert("Message Sent!")
    }, function(error) {
      console.log('FAILED...', error);
      alert(error);
    });
}

const bSend = document.querySelector("#send");

bSend.addEventListener("click", e => {
  e.preventDefault();
  submitMessage();
});