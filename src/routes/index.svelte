<script>
  import cardStore from './cardStore.js'
  import { onMount } from 'svelte'

  let data = []
  let loading = false
  let email = ''

  onMount(() => {
    loading = true

    cardStore.subscribe(value => {
      data = value
    })  
    
    loading = false
  })

  function submitForm() {
    alert(`
      your email: ${email}
      has been successfully submitted !
    `)
    email = ''
  }
</script>

<div class="hero">
  <div class="w-container">
    <div class="hero-wrapper">
      <img
        class="logo"
        src="images/logo.png"
        width="113"
        alt="544560047fa3dfa65588bcc9_logo.png" />
      <h1>Photo Sharing</h1>
      <h2>
        Pixely is a professional photo sharing app that lets you share photos
        with only one person at a time.
      </h2>
      <div class="w-form">
        <form
          class="w-clearfix"
          id="email-form"
          name="email-form"
          data-name="Email Form"
          on:submit|preventDefault={submitForm}
          >
          <label class="field-label" for="email">
            WANT TO KNOW WHEN WE’RE READY?
          </label>
          <input
            class="w-input text-field"
            id="email"
            type="email"
            placeholder="Enter your email address"
            name="email"
            data-name="Email"
            required="required" 
            bind:value={email}
          />
          <input
            class="w-button submit-button"
            type="submit"
            value="Notify Me!"
            data-wait="Please wait..." />
        </form>
        <div class="w-form-done">
          <p>Thank you! Your submission has been received!</p>
        </div>
        <div class="w-form-fail">
          <p>Oops! Something went wrong while submitting the form :(</p>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="teaser">
  <div class="w-container">
    <div class="w-row">
      {#each data as item}
        <div class="w-col w-col-4">
          <div class="teaser-wrapper">
            <img
              src={item.imageSrc}
              width="30"
              alt="54456178a05709a755da9c61_teaser-icon-photos.png" />
            <h3>{ item.title }</h3>
            <p>{ item.content }</p>
            <a class="link" href="#/">{ item.link }</a>
          </div>
        </div>
      {:else}
        <div class="spinn" style="text-align: center">
          <i class="fas fa-spinner fa-spin fa-3x"></i>    
        </div>
      {/each}
    </div>
  </div>
</div>
<div class="footer">
  <div class="w-container">
    <div class="w-row">
      <div class="w-col w-col-6">
        <a class="w-inline-block social-media-link" href="#facebook">
          <img
            src="images/footer-icon-facebook.png"
            width="30"
            alt="5445630d944ecdaa4df86a76_footer-icon-facebook.png" />
        </a>
        <a class="w-inline-block social-media-link" href="#twitter">
          <img
            src="images/footer-icon-twitter.png"
            width="30"
            alt="54456363944ecdaa4df86a78_footer-icon-twitter.png" />
        </a>
        <a class="w-inline-block social-media-link" href="#google">
          <img
            src="images/footer-icon-google.png"
            width="30"
            alt="5445636be62142a84d262a16_footer-icon-google.png" />
        </a>
      </div>
      <div class="w-col w-col-6">
        <div class="copyright">© Pixely 2020. All rights reserved.</div>
      </div>
    </div>
  </div>
</div>
