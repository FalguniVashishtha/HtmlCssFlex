<!doctype html>
<title>Example</title>
<style>
  * {
    box-sizing: border-box; 
  }
  body {
    display: flex;
    min-height: 100vh;
    flex-direction: row;
    margin: 0;<!doctype html>
    <title>Example</title>
    <style>
    * {
      box-sizing: border-box; 
    }
    body {
      display: flex;
      min-height: 100vh;
      flex-direction: column;
      margin: 0;
    }
    #main {
      display: flex;
      flex: 1;
    }
    #main > article {
      flex: 1;
    }
    #main > nav, 
    #main > aside {
      flex: 0 0 20vw;
      background: beige;
    }
    #main > nav {
      order: -1;
    }
    header, footer {
      background: yellowgreen;
      height: 20vh;
    }
    header, footer, article, nav, aside {
      padding: 1em;
    }
    </style>
    <body>
      <header>Header</header>
      <div id="main">
        <article>Article</article>
        <nav>Nav</nav>
        <aside>Aside</aside>
      </div>
      <footer>Footer</footer>
    </body>
  }
  .col-1 {
    background: #D7E8D4;
    flex: 1;
  }
  .col-2 {
    display: flex;
    flex-direction: column;
    flex: 5;
  }
  .content {
    display: flex;
    flex-direction: row;
  }
  .content > article {
    flex: 3;
    min-height: 60vh;
  }
  .content > aside {
    background: beige;
    flex: 1;
  }
  header, footer {
    background: yellowgreen;
    height: 20vh;
  }
  header, footer, article, nav, aside {
    padding: 1em;
  }
</style>
<body>
  <nav class="col-1">Nav</nav>
  <div class="col-2">
  	<header>Header</header>
    <main class="content">
    <article>Article</article>
    <aside>Aside</aside>
    </main>
  	<footer>Footer</footer>
  </div>
</body>