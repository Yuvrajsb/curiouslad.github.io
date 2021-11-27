<script>
  import Projects from "../Projects.svelte"
</script>
<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      
  
      <!-- svelte-ignore a11y-missing-attribute -->
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  <!-- svelte-ignore a11y-missing-attribute -->
    <div id="navbarBasicExample" class="navbar-menu">
      
      <div class="navbar-start">
        
        <a class="navbar-item">
          Home
        </a>
  
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>
  
          <div class="navbar-dropdown">
            <a class="navbar-item">
              Creation showcases!
            </a>
            <a class="navbar-item">
              About me!
            </a>
            <a class="navbar-item">
              Polls! (Not yet implemented)
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Pick here!
            </a>
          </div>
        </div>
      </div>
  
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-link">
              Contact
            </a>
            <a href="#projects" class="button is-link">
              Projects
            </a>
            <a class="button is-link" >
              WIP
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
