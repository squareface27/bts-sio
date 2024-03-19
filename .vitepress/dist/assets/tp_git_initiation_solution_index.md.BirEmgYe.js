import{_ as s,c as i,o as a,U as e}from"./chunks/framework.aGaNZw_P.js";const F=JSON.parse('{"title":"Initiation GIT.","description":"","frontmatter":{},"headers":[],"relativePath":"tp/git_initiation/solution/index.md","filePath":"tp/git_initiation/solution/index.md","lastUpdated":1704112852000}'),n={name:"tp/git_initiation/solution/index.md"},l=e(`<h1 id="initiation-git" tabindex="-1">Initiation GIT. <a class="header-anchor" href="#initiation-git" aria-label="Permalink to &quot;Initiation GIT.&quot;">​</a></h1><p>Vous débutez avec GIT, le TP suivant vous fera parcourir les concepts de base de la ligne de commande Git.</p><h2 id="ressources-utiles" tabindex="-1">Ressources utiles <a class="header-anchor" href="#ressources-utiles" aria-label="Permalink to &quot;Ressources utiles&quot;">​</a></h2><ul><li><a href="/cheatsheets/git/">Aide mémoire</a></li><li><a href="https://www.google.fr" target="_blank" rel="noreferrer">Google</a></li><li><a href="https://git-scm.com/book/fr/v2" target="_blank" rel="noreferrer">Livre Git en ligne</a></li></ul><h2 id="situation" tabindex="-1">Situation <a class="header-anchor" href="#situation" aria-label="Permalink to &quot;Situation&quot;">​</a></h2><p>Vous êtes en entreprise, vous avez un nouveau projet à réaliser. Le projet est plutôt conséquent (plusieurs semaines de travail), votre responsable vous indique que vous serez le seul développeur sur le code.</p><h3 id="questions" tabindex="-1">Questions <a class="header-anchor" href="#questions" aria-label="Permalink to &quot;Questions&quot;">​</a></h3><ul><li>Voyez vous d’autre questions à poser à votre chef de projet ?</li><li>Comment imaginez vous l’organisation de votre travail ? <ul><li>Un gestionnaire de version est-il utile ?</li><li>Si oui, pourquoi ?</li><li>Si non, pourquoi ?</li></ul></li></ul><h2 id="initialisation" tabindex="-1">Initialisation <a class="header-anchor" href="#initialisation" aria-label="Permalink to &quot;Initialisation&quot;">​</a></h2><p>Votre choix est fait, vous devez maintenant initialiser votre espace de travail, comment procédez vous?</p><h3 id="definir-votre-identite-dans-git" tabindex="-1">Définir votre identité dans GIT <a class="header-anchor" href="#definir-votre-identite-dans-git" aria-label="Permalink to &quot;Définir votre identité dans GIT&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user.email</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;email@example.com&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user.name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Valentin Brosseau&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="initialiser-votre-projet" tabindex="-1">Initialiser votre projet <a class="header-anchor" href="#initialiser-votre-projet" aria-label="Permalink to &quot;Initialiser votre projet&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Initialized</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> empty</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> repository</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /private/tmp/mon_projet/.git/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="debut-du-code" tabindex="-1">Début du code <a class="header-anchor" href="#debut-du-code" aria-label="Permalink to &quot;Début du code&quot;">​</a></h2><p>Maintenant que votre projet est initialisé, il faut maintenant créer les fichiers de base. créer la structure suivante :</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ tree</span></span>
<span class="line"><span>.</span></span>
<span class="line"><span>├── Makefile</span></span>
<span class="line"><span>├── documentations</span></span>
<span class="line"><span>│   └── README.md</span></span>
<span class="line"><span>├── libs</span></span>
<span class="line"><span>│   ├── HTMLPurifier.php</span></span>
<span class="line"><span>│   └── fonction.php</span></span>
<span class="line"><span>├── public</span></span>
<span class="line"><span>│   ├── index.jpg</span></span>
<span class="line"><span>│   └── index.js</span></span>
<span class="line"><span>├── source</span></span>
<span class="line"><span>│   ├── index.html</span></span>
<span class="line"><span>│   ├── index.js</span></span>
<span class="line"><span>│   └── index.php</span></span>
<span class="line"><span>└── tests</span></span>
<span class="line"><span>    ├── test.js</span></span>
<span class="line"><span>    └── test.php</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5 directories, 11 files</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="question-bonus" tabindex="-1">Question bonus <a class="header-anchor" href="#question-bonus" aria-label="Permalink to &quot;Question bonus&quot;">​</a></h3><ul><li>Comment avez-vous procédé? <ul><li>Est-ce la technique utilisée en entreprise ?</li><li>Est-ce pratique ?</li><li>Comment faire autrement ?</li></ul></li></ul><p>Vérifier le statut de Git après avoir tout créé</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">On</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">No</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commits</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yet</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Untracked</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> files:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;git add &lt;file&gt;...&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> what</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> will</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> committed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	Makefile</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	documentations/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	libs/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	public/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	source/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	tests/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nothing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> added</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> but</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> untracked</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> files</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> present</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (use </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;git add&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> track</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="questions-1" tabindex="-1">Questions <a class="header-anchor" href="#questions-1" aria-label="Permalink to &quot;Questions&quot;">​</a></h3><ul><li>Que constatez-vous ? <ul><li>Quelles commandes, faut-il faire maintenant ?</li><li>Une autre commande serait-elle utile ?</li></ul></li></ul><p>Ajouter les changements</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -am</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Initialisation&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[master (root-commit) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2804593</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] Initialisation</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 11</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> files</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> changed,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> insertions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deletions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mode</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100644</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Makefile</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mode</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100644</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> documentations/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mode</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100644</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libs/HTMLPurifier.php</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mode</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100644</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libs/fonction.php</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mode</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100644</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> public/index.jpg</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mode</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100644</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> public/index.js</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mode</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100644</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> source/index.html</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mode</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100644</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> source/index.js</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mode</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100644</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> source/index.php</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mode</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100644</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tests/test.js</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mode</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100644</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tests/test.php</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>Est-ce la seul façon de faire ? (Plusieurs réponses sont possibles)</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --all</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="questions-2" tabindex="-1">Questions <a class="header-anchor" href="#questions-2" aria-label="Permalink to &quot;Questions&quot;">​</a></h3><ul><li>Qu’avez vous fait ?</li><li>Qu’elles sont différences entre les deux commandes ?</li><li>Dans quel état est votre dépôt (repository) ?</li><li>À quoi sert la commande <code>git status</code> ? <ul><li>Une autre commande permettrait t’elle d’avoir une information similaire ?</li></ul></li><li>Le commentaire que vous avez mis est-il correcte ? <ul><li>Est-il possible de l’améliorer ?</li><li>Si oui, comment ?</li></ul></li></ul><h2 id="ajout-modification-de-fichiers" tabindex="-1">Ajout / Modification de fichiers <a class="header-anchor" href="#ajout-modification-de-fichiers" aria-label="Permalink to &quot;Ajout / Modification de fichiers&quot;">​</a></h2><p>Modifier le fichier <code>source/index.html</code>, ajouter du contenu dedans (par exemple, une page html fictive)</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> source/index.html</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Vérifier que vos modifications sont présentes dans GIT</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Ou</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Ajouter vos modifications dans Git</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ git commit -am &quot;Ajout du code pour l’index.html&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="questions-3" tabindex="-1">Questions <a class="header-anchor" href="#questions-3" aria-label="Permalink to &quot;Questions&quot;">​</a></h3><ul><li>À quoi sert les commentaires ? <ul><li>Est-ce que pour vous ?</li></ul></li><li>Y’a t’il plusieurs façon de faire ?</li><li>Comment vérifier que vos modifications ont bien été prises en compte ?</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="modifier-le-message-du-precedent-commit" tabindex="-1">Modifier le message du précédent commit <a class="header-anchor" href="#modifier-le-message-du-precedent-commit" aria-label="Permalink to &quot;Modifier le message du précédent commit&quot;">​</a></h2><p>Votre responsable n’est pas satisfait de la qualité du message de votre dernier commit, modifier le en utilisant <a href="/cheatsheets/git/commit_template.html">Un template de message de commit</a></p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --amend</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="questions-4" tabindex="-1">Questions <a class="header-anchor" href="#questions-4" aria-label="Permalink to &quot;Questions&quot;">​</a></h3><ul><li>Pourquoi votre responsable vous a t’il demandé de le modifier ?</li><li>Pourquoi le commentaire est-il aussi important ?</li></ul><h2 id="ajout-d-une-evolution-dans-le-precedent-fichier" tabindex="-1">Ajout d’une évolution dans le précédent fichier <a class="header-anchor" href="#ajout-d-une-evolution-dans-le-precedent-fichier" aria-label="Permalink to &quot;Ajout d’une évolution dans le précédent fichier&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> source/index.html</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Sauvegarder les modifications après avoir vérifié que celle-ci sont bien présentes</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="question" tabindex="-1">Question <a class="header-anchor" href="#question" aria-label="Permalink to &quot;Question&quot;">​</a></h3><ul><li>À votre avis, comment déterminer la fréquence des « commits » ?</li></ul><h2 id="un-coup-d-oeil-dans-le-retroviseur" tabindex="-1">Un coup d’oeil dans le rétroviseur <a class="header-anchor" href="#un-coup-d-oeil-dans-le-retroviseur" aria-label="Permalink to &quot;Un coup d’oeil dans le rétroviseur&quot;">​</a></h2><p>Vérifier l’historique de votre projet</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # ou</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --oneline</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="questions-5" tabindex="-1">Questions <a class="header-anchor" href="#questions-5" aria-label="Permalink to &quot;Questions&quot;">​</a></h3><ul><li>Que constatez-vous ?</li><li>À quoi sert l’identifiant de chaque commit ? (Hash SHA)</li><li>Comment vérifiez-vous l’historique pour un fichier précis ?</li><li>Comment voir l’ensemble des modifications en détail pour le fichier <code>source/index.html</code> ?</li><li>Est-ce judicieux de travailler toujours sur la branche <code>master</code> ?</li></ul><h2 id="une-autre-evolution" tabindex="-1">Une autre évolution <a class="header-anchor" href="#une-autre-evolution" aria-label="Permalink to &quot;Une autre évolution&quot;">​</a></h2><p>Votre première version est maintenant disponible pour les utilisateurs, votre responsable vous demande une évolution importante du code, celle-ci est majeur et changera complètement le comportement de votre application. Vous ne pouvez pas travailler directement sur la master.</p><p>Comment procédez-vous ?</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> evolution1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> evolution1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Faites des modifications dans les fichiers que vous voulez.</p><h3 id="questions-6" tabindex="-1">Questions <a class="header-anchor" href="#questions-6" aria-label="Permalink to &quot;Questions&quot;">​</a></h3><ul><li>Vérifier l’état de votre dépôt Git</li><li>Quel est l’avantage de travailler dans « une branch » ?</li><li>À votre avis qu’elles sont les prochaines étapes ?</li></ul><h2 id="fusion-merge-de-la-fonctionnalite" tabindex="-1">Fusion / Merge de la fonctionnalité <a class="header-anchor" href="#fusion-merge-de-la-fonctionnalite" aria-label="Permalink to &quot;Fusion / Merge de la fonctionnalité&quot;">​</a></h2><p>Votre code est finalisé, il faut maintenant fusionner vos modifications avec « votre branch master » :</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> evolution1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="questions-7" tabindex="-1">Questions <a class="header-anchor" href="#questions-7" aria-label="Permalink to &quot;Questions&quot;">​</a></h3><ul><li>À votre avis, en entreprise « merge / fusionne » t-on directement sur la master ?</li><li>Une autre personne peut-elle / doit-elle être impliquée dans cette étape ?</li></ul><h2 id="annulation-retour-arriere" tabindex="-1">Annulation, retour arrière <a class="header-anchor" href="#annulation-retour-arriere" aria-label="Permalink to &quot;Annulation, retour arrière&quot;">​</a></h2><p>Faite des évolutions dans votre branche master (2 ou 3), ajouter les via <code>git add</code>. Votre responsable vous demande finalement de les annuler car il ne souhaite pas garder la fonctionnalité. Comment procédez-vous ?</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="questions-8" tabindex="-1">Questions <a class="header-anchor" href="#questions-8" aria-label="Permalink to &quot;Questions&quot;">​</a></h3><ul><li>Que vient-il de se produire ?</li><li>Est-il possible de récupérer vos modifications ?</li></ul><h2 id="finalisation" tabindex="-1">Finalisation <a class="header-anchor" href="#finalisation" aria-label="Permalink to &quot;Finalisation&quot;">​</a></h2><p>Voilà, votre projet a atteint une première étape. Que pouvez-vous faire pour « marquer » cette première version ?</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tag</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;V1&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="questions-9" tabindex="-1">Questions <a class="header-anchor" href="#questions-9" aria-label="Permalink to &quot;Questions&quot;">​</a></h3><ul><li>Que vient-il de se produire ?</li><li>À votre avis, quel est l’intérêt de « taguer » une version ?</li><li>Quel sont les avantages de réaliser un tag ?</li></ul>`,77),t=[l];function p(r,h,o,d,k,u){return a(),i("div",null,t)}const g=s(n,[["render",p]]);export{F as __pageData,g as default};
