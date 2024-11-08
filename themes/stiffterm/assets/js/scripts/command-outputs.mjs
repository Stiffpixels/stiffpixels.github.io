export const helpHTML = `
<ul class="help-desc text-xs md:text-base" >
    <li>
      <span class="help-desc__title">help:</span> list out all the commands   
    </li>
    <li>
      <span class="help-desc__title">clear:</span> clear the terminal
    </li>
    <li>
      <span class="help-desc__title">projects:</span> open a window showcasing all the projects
    </li>
    <li>
      <span class="help-desc__title">about:</span> go to my about page
    </li>
    <li>
      <span class="help-desc__title">banner:</span> display the banner shown when entering the terminal
    </li>
</ul>
`
export const bannerHTML = String.raw`
<section id="banner">
<div class="flex flex-col md:flex-row gap-8 items-start md:items-end justify-start ">
<pre class="ascii-banner text-[0.5rem] md:text-base text-blue1">
</pre>
<pre class="ascii-banner text-[0.37rem] md:text-base hidden">
 _____ ______   ___  ___  ________  ________  _____ ______   _____ ______   ___  ___          
|\   _ \  _   \|\  \|\  \|\_____  \|\   __  \|\   _ \  _   \|\   _ \  _   \|\  \|\  \         
\ \  \\\__\ \  \ \  \\\  \\|___/  /\ \  \|\  \ \  \\\__\ \  \ \  \\\__\ \  \ \  \ \  \        
 \ \  \\|__| \  \ \  \\\  \   /  / /\ \   __  \ \  \\|__| \  \ \  \\|__| \  \ \  \ \  \       
  \ \  \    \ \  \ \  \\\  \ /  /_/__\ \  \ \  \ \  \    \ \  \ \  \    \ \  \ \  \ \  \____  
   \ \__\    \ \__\ \_______\\________\ \__\ \__\ \__\    \ \__\ \__\    \ \__\ \__\ \_______\
    \|__|     \|__|\|_______|\|_______|\|__|\|__|\|__|     \|__|\|__|     \|__|\|__|\|_______|
</pre>
</div>
<p class="banner-description hidden text-orange2 my-4 text-xs md:text-base">
Welcome to stiffterm, enter <strong>help</strong> to get a list of available commands.
<br/>
Enjoy the vibes!
</p>
</section>
`
