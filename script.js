const enterMessage = document.getElementById('foot')
const messageContainer = document.querySelector('.message1')
const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
});


function sendMessage(){
   const foot = enterMessage.value.trim();
 
   if (foot === ""){
    return;
   }
   document.getElementById('foot').value = "";
     
   
   const messageInside = document.createElement("section");
      messageInside.className = "receive-end";
      messageInside.innerHTML = `
                <div class="receiver" style= margin-top:15px; >
                     <p class="name">Chinedu:</p>
                        <div class="grouped">
                           <p class="text">${foot}</p>
                         <p class="time">${currentTime}</p>
                        </div>
                </div>`

                messageContainer.appendChild(messageInside);
        messageContainer.scrollTop = messageContainer.scrollHeight;
  
        setTimeout(() =>{
  const  names = ["Josh:", "India:","Akin:", "Sheriff:", "Zayd:", "Ali:"];
    const responses = [
        "How are you?",
        "I am very well thank you.",
        "I will be going to work by 10am",
        "Meet me there 10 minutes before.",
        "No compromises, no negotiation."
    ];

    const randomName = names[randomNumber(names.length)];
    const randomNresponse = responses[randomNumber(responses.length)];
  
  const messageSend = document.createElement("section");
      messageSend.className = "sender";
      messageSend.innerHTML = `
      <div class="sender">
                <div  >
                    <p class="name">${randomName}</p>
                        <div class="grouped">
                           <p class="text">${randomNresponse}</p>
                         <p class="time">${currentTime}</p>
                 </div>
        </div>`
        
                messageContainer.appendChild(messageSend);
                messageContainer.scrollTop = messageContainer.scrollHeight;

    
}, 1000);
};

function randomNumber(length){
    return Math.floor(Math.random() * length);
};

enterMessage.addEventListener ("keypress", function(event)  {
    if (event.key === 'Enter'){
        sendMessage();
    }
});