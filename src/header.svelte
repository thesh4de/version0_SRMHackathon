<script>
    import { username, user } from './user';
  
    function signout() {
      user.leave();
      username.set('');
    }
  </script>
  
  <header>
  <h1>D-CHAT</h1>
    {#if $username}
      <div class="user-bio">
        
        <span>Logged in as <strong>{$username}</strong></span>
        <img src={``} alt="avatar" /> 
      </div>
  
      <button class="signout-button" on:click={signout}>Sign Out</button>
  
      {:else}
  
        <h3>D-CHAT</h3>
    {/if}
  </header>