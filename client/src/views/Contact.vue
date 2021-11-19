<template>
  <div>
    <p>You can use the form below to get in touch, or you can send me an email.</p>
    <div class="contact">
      <form class="contact-form" @submit.prevent="submitForm">
        <div class="contact-form-input">
          <label for="name">Name<em>*</em></label>
          <input type="text" name="name" id="name" required v-model="name">
        </div>
        <div class="contact-form-input">
          <label for="email">Email Address<em>*</em></label>
          <input type="email" name="email" id="email" required v-model="email">
        </div>
        <div class="contact-form-input">
          <label for="phone">Phone Number</label>
          <input type="tel" name="phone" id="phone" v-model="phone">
        </div>
        <div class="contact-form-input">
          <label for="subject">Subject<em>*</em></label>
          <input type="text" name="subject" id="subject" required v-model="subject">
        </div>
        <div class="contact-form-input">
          <label for="message">Message<em>*</em></label>
          <textarea name="message" id="message" required rows="6" v-model="message" />
        </div>
        <button class="btn py-3 px-5 rounded bg-brand text-white shadow-none" type="submit">Send Message</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  },
  methods: {
    submitForm() {
      this.axios.post('/send-mail', {
        name: this.name,
        email: this.email,
        phone: this.phone,
        subject: this.subject,
        message: this.message
      }).then((response) => {
        console.log(response);
      })
    }
  }
};
</script>

<style scoped>
.contact-form-input {
  margin: 0 0 1.5em;
}
.contact-form-input label {
  display: block;
  font-size: 0.875em;
}
.contact-form-input input, textarea {
  position: relative;
  width: 100%;
  border: 0;
  outline: 0;
  color: #FFF;
  background: rgba(0,0,0,0.15);
  padding: 0.75em 1.25em;
  border-radius: 0.5em;
  resize: none;
  transition: color .3s, box-shadow .3s;
}
.contact-form-input input:autofill,
.contact-form-input input:-internal-autofill-selected {
  color: #FFF !important;
  background: rgba(0,0,0,0.15) !important;
}
.contact-form-input input:focus, textarea:focus {
  color: #07d48a;
  box-shadow: inset 0 0 0 2px #07d48a;
}
</style>
