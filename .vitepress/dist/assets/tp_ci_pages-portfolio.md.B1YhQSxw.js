import{_ as s,c as e,o as i,U as a}from"./chunks/framework.aGaNZw_P.js";const n="/assets/gitlab-new-project.TbNEO68o.png",l="/assets/ci-pages.BwqGmNHA.png",t="/assets/pipeline.C2mIgox4.png",p="/assets/build-ci-progress.CTyxYCwK.png",r="/assets/ci-steps.BMXllcpI.png",o="/assets/ci-logs.B34Aby3H.png",c="/assets/variables_surge.BmDwIcqM.webp",C=JSON.parse('{"title":"Déployer votre portfolio avec GitLab CI","description":"Dans ce TP vous allez mettre en ligne votre Portfolio sur Gitlab Pages grâce à Gitlab-CI. Dans le TP précédent nous avons utilisé Netlify avec une solution en « 1 click » / « clé en main », ici la procédure sera un peu plus compliquée, mais vous allez le voir elle permettra beaucoup plus de choses.","frontmatter":{"description":"Dans ce TP vous allez mettre en ligne votre Portfolio sur Gitlab Pages grâce à Gitlab-CI. Dans le TP précédent nous avons utilisé Netlify avec une solution en « 1 click » / « clé en main », ici la procédure sera un peu plus compliquée, mais vous allez le voir elle permettra beaucoup plus de choses.","prev":"/tp/ci/jamstack/netlify-portfolio.md","next":"/tp/ops/deployer-laravel-ci.md"},"headers":[],"relativePath":"tp/ci/pages-portfolio.md","filePath":"tp/ci/pages-portfolio.md","lastUpdated":1675372656000}'),h={name:"tp/ci/pages-portfolio.md"},u=a('<h1 id="deployer-votre-portfolio-avec-gitlab-ci" tabindex="-1">Déployer votre portfolio avec GitLab CI <a class="header-anchor" href="#deployer-votre-portfolio-avec-gitlab-ci" aria-label="Permalink to &quot;Déployer votre portfolio avec GitLab CI&quot;">​</a></h1><details class="details custom-block"><summary>Sommaires</summary><nav class="table-of-contents"><ul><li><a href="#introduction">Introduction</a></li><li><a href="#creation-d-un-nouveau-projet-sur-gitlab">Création d’un nouveau projet sur Gitlab</a></li><li><a href="#votre-portfolio">Votre portfolio</a></li><li><a href="#activation-de-gitlab-ci">Activation de GitLab-CI</a></li><li><a href="#push-de-votre-code">Push de votre code</a></li><li><a href="#voir-votre-site">Voir votre site</a></li><li><a href="#gitlab-ci-netlify">Gitlab-CI ≠ Netlify</a></li><li><a href="#apporter-une-modification">Apporter une modification</a></li><li><a href="#petit-point-d-etape">Petit point d&#39;étape</a></li><li><a href="#allez-plus-loin">Allez plus loin</a><ul><li><a href="#deployer-un-site-vitejs">Déployer un site ViteJS</a></li></ul></li><li><a href="#aller-plus-loin-avec-surge">Aller plus loin avec Surge</a><ul><li><a href="#sur-votre-machine">Sur votre machine</a></li><li><a href="#sur-gitlab-ci">Sur Gitlab-CI</a></li></ul></li><li><a href="#on-copie-colle">On copie / colle ?</a></li><li><a href="#aller-plus-loin">Aller plus loin…</a></li><li><a href="#references">Références</a></li></ul></nav></details><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>Dans ce TP vous allez mettre en ligne votre Portfolio sur Gitlab Pages grâce à Gitlab-CI. Dans <a href="/tp/ci/jamstack/netlify-portfolio.html">le TP précédent,</a> nous avons utilisé Netlify avec une solution en « 1 click » / « clé en main », ici la procédure sera un peu plus compliquée, mais vous allez le voir elle va permettre beaucoup plus de choses.</p><h2 id="creation-d-un-nouveau-projet-sur-gitlab" tabindex="-1">Création d’un nouveau projet sur Gitlab <a class="header-anchor" href="#creation-d-un-nouveau-projet-sur-gitlab" aria-label="Permalink to &quot;Création d’un nouveau projet sur Gitlab&quot;">​</a></h2><p>Pour commencer, créez <a href="https://gitlab.com/projects/new" target="_blank" rel="noreferrer">un nouveau projet sur votre compte Gitlab</a>.</p><p><img src="'+n+`" alt="Création d&#39;un nouveau projet" loading="lazy"></p><p>Nommez-le comme vous le souhaitez, c’est votre projet après tout…</p><p>Voilà, nous pouvons continuer !</p><h2 id="votre-portfolio" tabindex="-1">Votre portfolio <a class="header-anchor" href="#votre-portfolio" aria-label="Permalink to &quot;Votre portfolio&quot;">​</a></h2><p>Nous allons utiliser à nouveau votre portfolio comme support à livrer, je vous laisse mettre le code source sur Gitlab.</p><div class="tip custom-block"><p class="custom-block-title">Un instant !</p><p>Vous avez très certainement déjà envoyé votre code source sur Github, pas de problème, ici nous allons l&#39;envoyer sur Gitlab. Pour simplifier, je vous propose de copier votre code source (sans le <code>.git</code>) dans un nouveau dossier.</p></div><p>Commitez et pushez votre travail sur GitLab (dans le projet que vous venez de créer)</p><p>Rappel :</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -am</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Mon premier commit&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">N&#39;oubliez pas !</p><p>⚠️ Pour pusher votre code il faut avoir ajouté la remote, pour ça vous pouvez suivre les instructions données par GitLab lors de la création du projet.</p></div><details class="details custom-block"><summary>Vous n&#39;avez pas de code source ?</summary><p>Vous n&#39;avez pas de Portfolio ? Aucun problème, <a href="https://startbootstrap.com/theme/stylish-portfolio" target="_blank" rel="noreferrer">vous pouvez utiliser celui-ci.</a></p><p>PS: N&#39;oubliez pas que vous devez avoir un portfolio de prêt pour votre passage de titre. start</p></details><h2 id="activation-de-gitlab-ci" tabindex="-1">Activation de GitLab-CI <a class="header-anchor" href="#activation-de-gitlab-ci" aria-label="Permalink to &quot;Activation de GitLab-CI&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">Un instant</p><p>Gitlab-CI nécessite de mettre votre carte bleue pour prouver que vous êtes un humain. Si vous ne souhaitez pas la mettre vous pouvez déployer un runner Gitlab-CI sur votre machine en suivant le TP ici : <a href="/tp/ci/gitlab/runner.html">Installer un runner Gitlab-CI</a></p></div><p>Maintenant que votre première version est prête, nous allons activer Gitlab-CI pour ça, il faut <strong>simplement</strong> créer un fichier intitulé <code>.gitlab-ci.yml</code> à la racine de votre projet. Mettez-y le contenu suivant :</p><div class="language-yml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  stage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">deploy</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mkdir .public</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cp -r * .public</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mv .public public</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  artifacts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">public</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  rules</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">Un instant</p><p>Regarder le contenu du fichier, étudier les différentes instructions.</p><ul><li>Que font les instructions / commandes dans <code>script</code> ?</li><li>À quoi correspond artifacts ?</li><li><code>only: master</code> ? Que se passe-t-il si vous créez une branche à votre avis ?</li></ul></div><h2 id="push-de-votre-code" tabindex="-1">Push de votre code <a class="header-anchor" href="#push-de-votre-code" aria-label="Permalink to &quot;Push de votre code&quot;">​</a></h2><p>Pushez votre code sur GitLab, votre portfolio va « se compiler » dans la partie CI. Attendez quelques secondes, votre site web est maintenant en ligne.</p><h2 id="voir-votre-site" tabindex="-1">Voir votre site <a class="header-anchor" href="#voir-votre-site" aria-label="Permalink to &quot;Voir votre site&quot;">​</a></h2><p>Après quelques secondes, votre site va être disponible, oui, mais où ? Le système de Gitlab Pages s&#39;active automatiquement, vous retrouverez l&#39;adresse dans le menu : « Settings &gt; Pages »</p><p><img src="`+l+'" alt="Gitlab Pages" loading="lazy"></p><h2 id="gitlab-ci-netlify" tabindex="-1">Gitlab-CI ≠ Netlify <a class="header-anchor" href="#gitlab-ci-netlify" aria-label="Permalink to &quot;Gitlab-CI ≠ Netlify&quot;">​</a></h2><p>Sur le papier Netlify semble très proche de Gitlab-CI, mais en réalité les deux solutions sont vraiment différentes, et Gitlab-CI est 1000× plus avancés que Netlify sur la partie « Compilation »</p><p>Chez Gitlab, les étapes de compilation sont appelées des Pipelines</p><p><img src="'+t+'" alt="Pipeline" loading="lazy"></p><p><img src="'+p+'" alt="Compilation en cours" loading="lazy"></p><p>Contrairement à Netlify, nous avons ici la vision de l&#39;ensemble des opérations</p><p><img src="'+r+'" alt="Les étapes" loading="lazy"></p><p>Et surtout la vision détaillée des opérations du « runner » Gitlab :</p><p><img src="'+o+`" alt="Les étapes" loading="lazy"></p><div class="tip custom-block"><p class="custom-block-title">Différence majeure avec Netlify ?</p><p>Vous pouvez avoir des sites accessibles uniquement par vous. Pratique pour de la documentation par exemple !</p></div><h2 id="apporter-une-modification" tabindex="-1">Apporter une modification <a class="header-anchor" href="#apporter-une-modification" aria-label="Permalink to &quot;Apporter une modification&quot;">​</a></h2><p>Je vous laisse valider que votre CI fonctionne correctement, apporter une modification à votre site et vérifier que celle-ci est bien visible en ligne.</p><h2 id="petit-point-d-etape" tabindex="-1">Petit point d&#39;étape <a class="header-anchor" href="#petit-point-d-etape" aria-label="Permalink to &quot;Petit point d&#39;étape&quot;">​</a></h2><p>Ce que nous venons de faire est générique! Ça veut dire que si vous souhaitez héberger rapidement (et gratuitement) un petit site Internet codé en HTML, CSS, JavaScript vous avez l&#39;ensemble des éléments.</p><p>Vous ajoutez à votre code source un fichier <code>.gitlab-ci.yml</code> avec le contenu précédent et c&#39;est terminé quelques minutes plus tard, votre site est en ligne.</p><p>C&#39;est <strong>LA</strong> force de l&#39;intégration continue !</p><h2 id="allez-plus-loin" tabindex="-1">Allez plus loin <a class="header-anchor" href="#allez-plus-loin" aria-label="Permalink to &quot;Allez plus loin&quot;">​</a></h2><p>Écrire du code c’est bien, mais le faire en automatique c’est mieux. C’est pour ça que GitLab-CI et GitLab Pages existent, écrire du HTML pour une page c’est possible, mais quand il s’agit d’un site entier, ce n’est pas forcément adapté. C’est pour ça que l’on utilise régulièrement des CMS (écrit en PHP, Python, Ruby …), mais ce n’est pas la seule façon de faire.</p><p>On trouve aussi régulièrement des « générateurs de sites statiques », un générateur c’est un « logiciel » qui va « compiler » votre site pour générer toutes les pages de votre site web (sans avoir à tous les écrire).</p><p>Plusieurs avantages :</p><ul><li>Cout d’hébergement réduit (pas de PHP, juste du HTML).</li><li>Sauvegarde simple (c’est juste des fichiers).</li><li>Rapide ! (Oui, pas de PHP)</li></ul><p>Inconvénients :</p><ul><li>À votre avis ?</li></ul><h3 id="deployer-un-site-vitejs" tabindex="-1">Déployer un site ViteJS <a class="header-anchor" href="#deployer-un-site-vitejs" aria-label="Permalink to &quot;Déployer un site ViteJS&quot;">​</a></h3><p>Je vous laisse observer l&#39;exemple :</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">node:16.5.0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  stage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">deploy</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  cache</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      files</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">package-lock.json</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      prefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">node_modules/</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm install</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm run build</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cp -a dist/. public/</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  artifacts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">public</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  rules</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>Quelle différence notez-vous par rapport au précédent YAML?</p><div class="tip custom-block"><p class="custom-block-title">Vous souhaitez tester ?</p><p>Si vous souhaitez créer un site avec ViteJS, vous pouvez utiliser la commande suivante :</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vite@latest</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Une fois le projet créé, ajouter le fichier <code>.gitlab-ci.yml</code> et envoyer votre code sur Gitlab. La magie opérera d&#39;elle-même.</p></div><h2 id="aller-plus-loin-avec-surge" tabindex="-1">Aller plus loin avec Surge <a class="header-anchor" href="#aller-plus-loin-avec-surge" aria-label="Permalink to &quot;Aller plus loin avec Surge&quot;">​</a></h2><p>Dans le précédent TP, nous avons utilisé Vercel / Netlify. Dans ce TP je vous ai parlé de Surge comme alternative, mais une alternative qui demande un peu plus de travail. Nous y voilà, nous avons vu dans ce TP comment Gitlab-CI permet de compiler un site statique. Nous allons donc utiliser ce principe pour automatiser le déploiement avec Surge.</p><p>Surge c&#39;est un peu technique, mais si vous souhaitez tester voilà la procédure.</p><h3 id="sur-votre-machine" tabindex="-1">Sur votre machine <a class="header-anchor" href="#sur-votre-machine" aria-label="Permalink to &quot;Sur votre machine&quot;">​</a></h3><p>Installation du CLI de Surge</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> surge</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Création de votre compte</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">surge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> login</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Obtention d&#39;un token qui vous permettra de déployer sur votre compte</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">surge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> token</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="danger custom-block"><p class="custom-block-title">Un token == un compte</p><p>Le token que vous avez obtenu représente votre compte. Il faut donc le garder secret.</p></div><p>Compiler / Créer une première version de votre site. Exemple avec ViteJS</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">?</p><p>Cette commande va créer un dossier <code>dist</code> qui contient l&#39;ensemble de votre site.</p></div><p>Déployer votre site</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">surge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./dist</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://votre-domaine-unique.surge.sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --token</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> VOTRE_TOKEN_OBTENU_PRECEDEMMENT</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Et voilà, votre site est en ligne ! Rendez-vous sur votre domaine pour le voir (<a href="https://votre-domaine-unique.surge.sh" target="_blank" rel="noreferrer">https://votre-domaine-unique.surge.sh</a>)</p><h3 id="sur-gitlab-ci" tabindex="-1">Sur Gitlab-CI <a class="header-anchor" href="#sur-gitlab-ci" aria-label="Permalink to &quot;Sur Gitlab-CI&quot;">​</a></h3><p>Maintenant que nous avons déployé une première version depuis votre poste, nous allons automatiser le déploiement avec Gitlab-CI.</p><p>Créer un fichier <code>.gitlab-ci.yml</code> avec le contenu suivant :</p><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">node:16.5.0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cache</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    files</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">package-lock.json</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">node_modules/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">stages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">build</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">deploy</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  stage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">build</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  before_script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm run ci</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm run build</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  artifacts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">deploy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  stage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">deploy</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  before_script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm install -g surge</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">surge ./build $SURGE_DOMAIN --token $SURGE_TOKEN</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>Que font les différentes étapes ? Nous avons ici la logique de compilation et de déploiement de notre site web :</p><ul><li><code>build</code> : Compilation du site, via la commande <code>npm run build</code></li><li><code>deploy</code> : Déploiement du site, via la commande <code>surge ./build $SURGE_DOMAIN --token $SURGE_TOKEN</code></li></ul><div class="tip custom-block"><p class="custom-block-title">Des variables d&#39;environnement ?</p><p>Comme en code, nous avons la possibilité d&#39;utiliser des variables. Ces variables vont nous permettre de rendre générique notre script, et surtout de masquer les informations sensibles (comme le token).</p></div><p>Je vous laisse ajouter les variables d&#39;environnement dans votre projet Gitlab :</p><p><code>Repository &gt; Settings &gt; CI/CD &gt; Variables</code></p><p><img src="`+c+'" alt="Variables d&#39;environnement" loading="lazy"></p><ul><li>SURGE_LOGIN = <code>Votre login de connexion à Surge (email)</code></li><li>SURGE_TOKEN = <code>Votre token obtenu précédemment</code></li></ul><p>Maintenant que vos variables sont ajoutées, nous pouvons <strong>commiter</strong> et <strong>pusher</strong> notre code sur Gitlab ! Et place à la magie !</p><p>À partir de maintenant, à chaque modification de votre code, Gitlab-CI va compiler votre site et le déployer sur Surge. Très très pratique !</p><h2 id="on-copie-colle" tabindex="-1">On copie / colle ? <a class="header-anchor" href="#on-copie-colle" aria-label="Permalink to &quot;On copie / colle ?&quot;">​</a></h2><p>Ça semble étonnant peut-être. Dans ce TP vous avez massivement copié / collé des commandes. Mais c&#39;est normal… L&#39;intégration continue c&#39;est l&#39;automatisation de tâches.</p><p>Et quand on débute, on copie / colle, on adapte, et on debug. C&#39;est comme ça que ça marche.</p><p>Dans ce TP, j&#39;ai passé le temps d&#39;assemblage en lisant, testant, collectant les étapes pour vous les présenter… Dans la vraie vie, vous allez passer du temps (parfois plusieurs heures) à chercher comment faire, à tester, à adapter…</p><h2 id="aller-plus-loin" tabindex="-1">Aller plus loin… <a class="header-anchor" href="#aller-plus-loin" aria-label="Permalink to &quot;Aller plus loin…&quot;">​</a></h2><p>Compiler et héberger des sites statiques, ce n&#39;est qu&#39;une partie des possibilités de Gitlab-CI, vous pouvez faire bien plus !</p><p>Pour ceux qui voudrais mettre en place de l&#39;intégration continue pour créer l&#39;architecture <a href="/tp/ops/deployer-laravel-ci.html">Docker pour héberger un site Laravel c&#39;est par ici</a></p><div class="tip custom-block"><p class="custom-block-title">Ça semble compliqué ?</p><p>L&#39;intégration continue ça peut faire peur… mais si vous maîtrisez les codes et le fonctionnement de ce genre de plateforme, vous serez un moteur dans votre entreprise. Ne loupez pas le coche !</p></div><h2 id="references" tabindex="-1">Références <a class="header-anchor" href="#references" aria-label="Permalink to &quot;Références&quot;">​</a></h2><ul><li><a href="https://docs.gitlab.com/ee/ci/" target="_blank" rel="noreferrer">Gitlab-CI</a></li><li><a href="https://docs.gitlab.com/ee/ci/variables/" target="_blank" rel="noreferrer">Gitlab-CI - Variables d&#39;environnement</a></li><li><a href="https://docs.gitlab.com/ee/ci/pipelines/" target="_blank" rel="noreferrer">Gitlab-CI - Pipeline</a></li><li><a href="https://docs.gitlab.com/ee/ci/pipelines/job_artifacts.html" target="_blank" rel="noreferrer">Gitlab-CI - Artifacts</a></li><li><a href="https://docs.gitlab.com/ee/ci/yaml/#cache" target="_blank" rel="noreferrer">Gitlab-CI - Cache</a></li><li><a href="https://docs.gitlab.com/ee/ci/yaml/#stages" target="_blank" rel="noreferrer">Gitlab-CI - Stages</a></li><li><a href="https://docs.gitlab.com/ee/ci/yaml/#jobs" target="_blank" rel="noreferrer">Gitlab-CI - Jobs</a></li><li><a href="https://surge.sh/" target="_blank" rel="noreferrer">Surge</a></li></ul>',95),d=[u];function k(b,m,g,v,E,y){return i(),e("div",null,d)}const F=s(h,[["render",k]]);export{C as __pageData,F as default};
