document.addEventListener('DOMContentLoaded', function() {

    const lyrics = `
<!DOCTYPE html>
<html lang="es">
<head>
    <div class="layout">
    <main class="content">
        <h2 class="post-title">Footer Section not Found<span class="o">o</span><span class="o">o</span><span class="emoji" aria-hidden="true"></span>rs of CSS</h2>
        <p>404 ERROR The footer has not been found <em>may</em> get it for free from <a href="">Read more</a></p>
    </main>
    <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0" class="background-set>
    <title>Background words and code</title>
    <link rel="stylesheet" href="stylesheet-for-website-resume.css">
    <script src="stylesheet-for-website-resume.js" defer></script> 
</head>
<body onclick=expandBackside(stylesheet, 1000)>

<svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none;}</style></defs><title>help</title>
<path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z" fill="white"/><circle cx="16" cy="23.5" 
r="1.5" fill="white"/><path d="M17,8H15.5A4.49,4.49,0,0,0,11,12.5V13h2v-.5A2.5,2.5,0,0,1,15.5,10H17a2.5,2.5,0,0,1,0,5H15v4.5h2V17a4.5,4.5,0,0,0,0-9Z" 
fill="white"/></svg>
 
  <script>
 const warn = () => {
   document.querySelector('.warning').classList.toggle('show');
   setTimeout(() => document.querySelector('.warning').classList.toggle('show'), 3000);
 };
  document.querySelector('main').addEventListener('mousedown', warn);
</script>

    <section class="highlight-section">

        <div class="lyrics-background" id="lyrics">
        </div>

        <img src="post-title" alt="post-title" class="hero-image">
        <img src="HelloWorld.png" alt="Hello World" class="code-snippet">
    </section>

    <!-- Sección de contenido restante con el fondo verde claro -->
    <section class="main-section">
        <!-- Aquí puedes agregar más contenido -->
        <h2 class="introduction"> <span class="lt-gt">&lt;</span>¡Hola!<span class="lt-gt">/&gt;</span></h2>
        
    `;

    const container = document.getElementById('lyrics');
    let index = 0;

    // Escribir una letra cada cierto tiempo
    function typeWriter() {
        if (index < lyrics.length) {
            container.innerHTML += lyrics.charAt(index);
            index++;
            setTimeout(typeWriter, -2); // 50ms entre cada letra (ajustable)
        }
    }

    // Iniciar la animación
    typeWriter();
});
