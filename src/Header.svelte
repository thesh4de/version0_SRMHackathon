
<style> 
  .signout-button{
      background-color: lightblue;
      color: black;
      border-radius: 15px;
      border: 1px solid black;
  }
  .signout-button:hover{
    color: white;
    background-color: red;
  }
  div.logo{
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 300;
    font-size: x-large;
  }
  div.logo{
    width: 30%;
    background-color: white;
    height: 45px;
    color: blue;
    text-align: center;
    vertical-align: middle;
    line-height: 45px ;
    border-radius: 20px;
    cursor: pointer;
  }
  .community{
    font-weight: 300;
    font-size: large;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    border: 1px solid black;
    padding: 5px;
    background-color: skyblue;
    color: black;
    border-radius: 10px;
    
  }
  a{
    text-decoration: none;
  }
</style>
<script>
  import { username, user } from './user';
  function signout() {
    user.leave();
    username.set('');
  }
</script>

<header>
<div class="logo">P2P Messenger</div>
  {#if $username}
    <div class="user-bio">
      
      <span>Hello <strong>{$username}</strong></span>
      <img src={`https://avatars.dicebear.com/api/initials/${$username}.svg`} alt="avatar" /> 
    </div>

    <button class="signout-button" on:click={signout}>Sign Out</button>
    {:else}
      <h3 class="community"><a href="https://gun.eco/" target="_blank">Made for DApp community</a></h3>
    {/if}
</header>