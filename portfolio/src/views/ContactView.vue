<script >


export default{
    data(){
        return{
            email:"",
            subject:"",
            message:"",
        };
    },
    methods: {
        sendEmail(){
            Email.send({
                SecureToken: "bf866444-8293-4ace-92f8-a55c32f281c9",
                To:"andre.roygaard@gmail.com",
                From:this.email,
                Subject:this.subject,
                Body: this.message,
            }).then((message) => alert(message));
        },
    },
};

</script>

<template>
    <div class="contact-form">
      <form @submit.prevent="sendEmail">
        <div>
          <label for="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            v-model="email" 
            placeholder="Enter your email" 
            required
          />
        </div>
  
        <div>
          <label for="subject">Subject:</label>
          <input 
            type="text" 
            id="subject" 
            v-model="subject" 
            placeholder="Enter subject" 
            required
          />
        </div>
  
        <div>
          <label for="message">Message:</label>
          <textarea 
            id="message" 
            v-model="message" 
            placeholder="Enter your message" 
            required
          ></textarea>
        </div>
  
        <button type="submit">Send</button>
      </form>
    </div>
  </template>