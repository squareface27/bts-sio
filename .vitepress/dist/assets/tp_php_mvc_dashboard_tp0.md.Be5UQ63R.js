import{_ as e,c as a,o as i,U as t}from"./chunks/framework.aGaNZw_P.js";const s="/assets/uml-base-exemple.BS3MYFz_.png",f=JSON.parse('{"title":"Définition du projet","description":"","frontmatter":{},"headers":[],"relativePath":"tp/php/mvc/dashboard/tp0.md","filePath":"tp/php/mvc/dashboard/tp0.md","lastUpdated":1630267777000}'),o={name:"tp/php/mvc/dashboard/tp0.md"},n=t('<h1 id="definition-du-projet" tabindex="-1">Définition du projet <a class="header-anchor" href="#definition-du-projet" aria-label="Permalink to &quot;Définition du projet&quot;">​</a></h1><details class="details custom-block"><summary>Sommaire</summary><nav class="table-of-contents"><ul><li><a href="#introduction">Introduction</a></li><li><a href="#definition-du-besoin">Définition du besoin</a><ul><li><a href="#espace-public">Espace public</a></li><li><a href="#espace-prive">Espace privé</a></li></ul></li><li><a href="#definition-des-objets">Définition des objets</a><ul><li><a href="#uml">UML</a></li></ul></li><li><a href="#la-base-de-donnees">La base de données</a><ul><li><a href="#definition">Définition</a></li></ul></li><li><a href="#l-authentification">L&#39;authentification</a><ul><li><a href="#la-session">La session</a></li><li><a href="#les-droits-d-acces">Les droits d&#39;accès</a></li><li><a href="#la-securite">La sécurité</a></li></ul></li><li><a href="#la-suite">La suite</a></li></ul></nav></details><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>Afin de vous remettre en marche, je vous propose un « petit » TP qui vous permettra de vous remémorer le développement objet mais également le développement Web. Nous allons dans cette série de TP réaliser un site Internet qui a pour but de lister / gérer / afficher l&#39;état de&#39;objets connectés. Pour cette réalisation nous allons utiliser plusieurs technologies :</p><ul><li>HTML (5).</li><li>CSS. (Voir du SCSS/SASS pour ceux qui le souhaiterai).</li><li>PHP 8 (avec de la POO évidemment).</li><li>Bootsrap ou Tailwind au choix.</li></ul><p>Vous etes prêt, c&#39;est parti !</p><div class="tip custom-block"><p class="custom-block-title">Vous avez tout oublié ?</p><p>Pas d&#39;inquiétude, je suis là pour vous aider. L&#39;idée ici est de remetter en route la machine avec un TP guidé 🚀.</p></div><h2 id="definition-du-besoin" tabindex="-1">Définition du besoin <a class="header-anchor" href="#definition-du-besoin" aria-label="Permalink to &quot;Définition du besoin&quot;">​</a></h2><p>Avant d&#39;aller plus loin, qu&#39;allons nous réaliser ? C&#39;est toujours par là que vous devez commencer ! Comprendre le besoin de votre « client », c&#39;est lui qui a un besoin, des idées. Vous devez donc le comprendre ce mettre à sa place (être force de proposition si vous avez des idées à ajouter). Dans un premier temps voilà mon idée, c&#39;est de celle-ci que nous allons partir :</p><p>J&#39;aimerais réaliser un « Dashboard », c&#39;est à dire une page web. Celle-ci est principalement administrative, le style est important mais pas principale, elle doit donc propre et moderne (privilégier au maximum l&#39;usage de <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">Bootstrap</a> et/ou <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">TailWindCSS</a>).</p><h3 id="espace-public" tabindex="-1">Espace public <a class="header-anchor" href="#espace-public" aria-label="Permalink to &quot;Espace public&quot;">​</a></h3><p>Le dashboard doit être accessible à tous dans une version consultative (sans actions possible). Cette interface doit être accessible sans connexion / session utilisateur.</p><p>L&#39;espace / la version public va permetter la consultation des informations et <strong>aucune actions ne doit être possible.</strong></p><h3 id="espace-prive" tabindex="-1">Espace privé <a class="header-anchor" href="#espace-prive" aria-label="Permalink to &quot;Espace privé&quot;">​</a></h3><p>L&#39;espace privé doit être accessible depuis le menu principale</p><h2 id="definition-des-objets" tabindex="-1">Définition des objets <a class="header-anchor" href="#definition-des-objets" aria-label="Permalink to &quot;Définition des objets&quot;">​</a></h2><p>La première étape, <strong>avant même de coder</strong>, dans la réalisation d&#39;un projet informatique est de modéliser le problème qui vous a été donnés.</p><p>Dans notre cas, nous alons réaliser un UML (et un MCD si vous le souhaitez) qui représentera le problème que le client vous a donné. Dans notre projet nous avons donc à représenter :</p><ul><li>Des « objets connectés » réfléchissons ensemble à ce que va être un « objet connectés ». <ul><li>Un objet connecté c&#39;est toujours « une base » (avec des informations génériques).</li><li>Des objets spécifique (lampe, thermostat, prise, etc) avec des capacités spécifique (héritage d&#39;un objet de base).</li></ul></li><li>Des utilisateurs représente la partie connexion (Privée / Public).</li></ul><h3 id="uml" tabindex="-1">UML <a class="header-anchor" href="#uml" aria-label="Permalink to &quot;UML&quot;">​</a></h3><p>Je vous laisse commencer à réfléchir au sujet, vous avez plusieurs façon de procéder :</p><ul><li>Avec un papier et un crayon.</li><li>Avec un outil « en ligne ».</li></ul><p>Pour ma part, j&#39;aime bien l&#39;<a href="https://app.diagrams.net/" target="_blank" rel="noreferrer">outil Diagram.io</a>.</p><div class="tip custom-block"><p class="custom-block-title">C&#39;est à vous !</p><p>Je vous laisse réfléchir à une solution (il y en a plusieurs).</p></div><details class="details custom-block"><summary>Voir ma solution</summary><p>Vous avez cliqué un peu vite non ?</p><p><img src="'+s+'" alt="Exemple de sollution" loading="lazy"></p></details><h2 id="la-base-de-donnees" tabindex="-1">La base de données <a class="header-anchor" href="#la-base-de-donnees" aria-label="Permalink to &quot;La base de données&quot;">​</a></h2><p>Avec les objets correctement défini, nous allons pouvoir maintenant définir notre base de données. En effet, la base de données doit-être un mirroir de la problématique qui vous a été donnés, et donc évidemment une représentation « Relationnel » de vos objets défini dans votre code.</p><h3 id="definition" tabindex="-1">Définition <a class="header-anchor" href="#definition" aria-label="Permalink to &quot;Définition&quot;">​</a></h3><p>Je vous laisse créer le MCD de votre base de données.</p><h2 id="l-authentification" tabindex="-1">L&#39;authentification <a class="header-anchor" href="#l-authentification" aria-label="Permalink to &quot;L&#39;authentification&quot;">​</a></h2><h3 id="la-session" tabindex="-1">La session <a class="header-anchor" href="#la-session" aria-label="Permalink to &quot;La session&quot;">​</a></h3><h3 id="les-droits-d-acces" tabindex="-1">Les droits d&#39;accès <a class="header-anchor" href="#les-droits-d-acces" aria-label="Permalink to &quot;Les droits d&#39;accès&quot;">​</a></h3><h3 id="la-securite" tabindex="-1">La sécurité <a class="header-anchor" href="#la-securite" aria-label="Permalink to &quot;La sécurité&quot;">​</a></h3><h2 id="la-suite" tabindex="-1">La suite <a class="header-anchor" href="#la-suite" aria-label="Permalink to &quot;La suite&quot;">​</a></h2><p>Nous avons défini la base de notre projet, <a href="./tp1.html">continuons la suite ici</a></p>',35),r=[n];function l(u,d,c,p,h,m){return i(),a("div",null,r)}const v=e(o,[["render",l]]);export{f as __pageData,v as default};
