<!DOCTYPE html>
<html lang="hr" data-theme='light'>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KOCKICE - Informacijski Sustav</title>
  <link rel="stylesheet" href="/pico.css">
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-9C3B68741R"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-9C3B68741R');
  </script>
  @routes
  @viteReactRefresh
  @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
  @inertiaHead

</head>

<body>
  <noscript>
    <dialog open>
      <article>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="10rem" fill="currentColor" className="bi bi-ban"
          viewBox="0 0 16 16">
          <path
            d="M15 8a6.97 6.97 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0" />
        </svg>
        <br>
        <hgroup>
          <h2> This app requires JavaScript

            <sup><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-badge-tm" viewBox="0 0 16 16">
                <path
                  d="M5.295 11V5.995H7V5H2.403v.994h1.701V11zm3.397 0V7.01h.058l1.428 3.239h.773l1.42-3.24h.057V11H13.5V5.001h-1.2l-1.71 3.894h-.039l-1.71-3.894H7.634V11h1.06z" />
                <path
                  d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
              </svg></sup>
          </h2>
          <p> Please have it enabled.. or this loading will take forever..</p>
        </hgroup>
        <progress></progress>
      </article>
    </dialog>
  </noscript>
  <!--      _                      _ _         _          
  __ _ _ __| |_ _ __ ___   ___  __| (_) __ _  | |__  _ __ 
 / _` | '__| __| '_ ` _ \ / _ \/ _` | |/ _` | | '_ \| '__|
| (_| | |  | |_| | | | | |  __/ (_| | | (_| |_| | | | |   
 \__,_|_|   \__|_| |_| |_|\___|\__,_|_|\__,_(_)_| |_|_|-->
  @inertia

</body>