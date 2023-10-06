<script>
export default {
  methods: {
    signInWithGoogle() {
      const clientId = '762622375439-9i0f64683rbljqon9kgoui7jmmtce440.apps.googleusercontent.com';
      const redirectUri = 'http://localhost:5173'; // Should match the one in your Google Cloud Console
      const responseType = 'token id_token';
      const scope = 'profile email';

      const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

      // Open Google Sign-In in a new window
      const popup = window.open(authUrl, '_blank', 'width=600,height=600');

      // Listen for the window to close and handle the result
      const checkPopupClosed = setInterval(() => {
        if (popup.closed) {
          clearInterval(checkPopupClosed);
          this.handleSignInResult();
        }
      }, 1000);
    },

    handleSignInResult() {
      // Parse the URL of the current window to get the token
      const params = new URLSearchParams(window.location.hash.substr(1));
      const idToken = params.get('id_token');

      if (idToken) {
        // Successfully signed in, you can now use the idToken for authentication
        console.log('Google ID Token:', idToken);
      } else {
        // Handle sign-in error
        console.error('Google Sign-In Error');
      }
    },
  },
};
</script>


<template>
    <div>
      <button @click="signInWithGoogle">Sign In with Google</button>
    </div>
  </template>

<style scoped>
.login {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F4F4F0;

}


</style>