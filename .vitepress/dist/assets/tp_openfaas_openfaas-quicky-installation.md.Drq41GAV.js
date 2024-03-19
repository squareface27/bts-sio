import{_ as s}from"./chunks/result.BZypH2MD.js";import{_ as a,c as e,o as i,U as n}from"./chunks/framework.aGaNZw_P.js";const t="/assets/multipass-ls.9kZGNy-7.png",v=JSON.parse(`{"title":"Création stack OpenFaas (faasd) local via Multipass","description":"Ce document s'intéresse uniquement à la partie création de la stack initial faasd qui nous permettra d'utiliser OpenFaas. Le but de ce document est de monter rapidement / simplement une stack OpenFaas pour tester la solution.","frontmatter":{"description":"Ce document s'intéresse uniquement à la partie création de la stack initial faasd qui nous permettra d'utiliser OpenFaas. Le but de ce document est de monter rapidement / simplement une stack OpenFaas pour tester la solution."},"headers":[],"relativePath":"tp/openfaas/openfaas-quicky-installation.md","filePath":"tp/openfaas/openfaas-quicky-installation.md","lastUpdated":1704112852000}`),l={name:"tp/openfaas/openfaas-quicky-installation.md"},r=n(`<h1 id="creation-stack-openfaas-faasd-local-via-multipass" tabindex="-1">Création stack OpenFaas (faasd) local via Multipass <a class="header-anchor" href="#creation-stack-openfaas-faasd-local-via-multipass" aria-label="Permalink to &quot;Création stack OpenFaas (faasd) local via Multipass&quot;">​</a></h1><p>Ce document s&#39;intéresse uniquement à la partie création de la stack initial faasd qui nous permettra d&#39;utiliser OpenFaas. Le but de ce document est de monter rapidement / simplement une stack OpenFaas pour tester la solution.</p><p>Pour simplifier, la création de l&#39;environnement nous utiliserons <a href="https://github.com/openfaas/faasd/" target="_blank" rel="noreferrer">Faasd</a></p><h2 id="installer-multipass" tabindex="-1">Installer Multipass <a class="header-anchor" href="#installer-multipass" aria-label="Permalink to &quot;Installer Multipass&quot;">​</a></h2><p>MultiPass « Ubuntu VMs on demand for any workstation », est une solution qui nous permettra de monter rapidement des VMs administrable et accessible en ligne de commande.</p><p>Installer <a href="https://multipass.run/" target="_blank" rel="noreferrer">multipass</a></p><p>Multipass, est une bonne solution pour tester rapidement des outils en ligne de commande Linux sans quitter votre machine Windows / MacOS.</p><p>👉 Vous souhaitez être full-stack ? Ce que nous allons voir ici est les bases des manipulations à connaitres.</p><h2 id="installer-faas-cli" tabindex="-1">Installer faas-cli <a class="header-anchor" href="#installer-faas-cli" aria-label="Permalink to &quot;Installer faas-cli&quot;">​</a></h2><h3 id="linux-et-mac" tabindex="-1">Linux et Mac <a class="header-anchor" href="#linux-et-mac" aria-label="Permalink to &quot;Linux et Mac&quot;">​</a></h3><p>Sans être root :</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://cli.openfaas.com</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sh</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Via brew (Mac OS) :</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> faas-cli</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="windows-powershell" tabindex="-1">Windows Powershell <a class="header-anchor" href="#windows-powershell" aria-label="Permalink to &quot;Windows Powershell&quot;">​</a></h3><p>Vous êtes sous Windows ? C&#39;est également installable via Powershell</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$version = (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Invoke-WebRequest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://api.github.com/repos/openfaas/faas-cli/releases/latest&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ConvertFrom-Json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].tag_name</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">New-Object</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> System.Net.WebClient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).DownloadFile(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;https://github.com/openfaas/faas-cli/releases/download/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$version</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/faas-cli.exe&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;faas-cli.exe&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="configuration-cloud-config" tabindex="-1">Configuration Cloud-config <a class="header-anchor" href="#configuration-cloud-config" aria-label="Permalink to &quot;Configuration Cloud-config&quot;">​</a></h2><p>Pour créer la machine nous allons utiliser <code>Cloud-config</code> ce fichier de configuration va initialiser la VM avec l&#39;ensemble des dépendances nécessaires au bon fonctionnement.</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sSLO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://raw.githubusercontent.com/openfaas/faasd/master/cloud-config.txt</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>CloudConfig va nous permettre de pré-parametrer notre VM, dès le démarrage de celle-ci sera préconfiguré avec les paramètrage spécifié dans <code>cloud-config.txt</code>.</p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>👋 Vous avez confiance ? Vous avez ouvert le fichier ? Vous ne devriez pas… Je vous invite <strong>vivement</strong> de regarder son contenu.</p></div><h2 id="ssh-key" tabindex="-1">SSH Key <a class="header-anchor" href="#ssh-key" aria-label="Permalink to &quot;SSH Key&quot;">​</a></h2><p>Afin de pouvoir vous connecter à la machine il faut modifier le fichier <code>cloud-config.txt</code> pour y ajouter votre clé SSH</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh-add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Éditer dans le fichier <code>cloud-config.txt</code> la ligne <code>ssh-rsa</code> pour mettre votre clé.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Je ne pense pas vous apprendre quelque chose ici… Mais préférez toujours une connexion via une clé à un mot de passe. <strong>TOUJOURS</strong>.</p><p>Vous n&#39;en avez pas ? Je suis là !</p></div><h2 id="cree-et-demarrer-la-vm" tabindex="-1">Créé et démarrer la VM <a class="header-anchor" href="#cree-et-demarrer-la-vm" aria-label="Permalink to &quot;Créé et démarrer la VM&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">multipass</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> launch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --cloud-init</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cloud-config.txt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> faasd</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Vous allez constater la force de Multipass. Ici rien à faire sauf attendre.</p><div class="tip custom-block"><p class="custom-block-title">Opération longue</p><p>Cette opération va prendre quelques minutes en fonction de votre machine. Votre ordinateur (via cloud-init) est entrain de créer une machine disposant de <code>OpenFaas</code> mais également de l&#39;ensemble des dépendances nécessaire au bon fonctionnement.</p></div><h2 id="recuperation-de-l-authentification" tabindex="-1">Récupération de l&#39;authentification <a class="header-anchor" href="#recuperation-de-l-authentification" aria-label="Permalink to &quot;Récupération de l&#39;authentification&quot;">​</a></h2><p>Votre machine est maintenant créée. Pour pouvoir se connecter à OpenFaas vous devez récupérer le fichier <code>basic-auth-password</code> pour ça nous allons :</p><ul><li>Avoir besoin de l&#39;IP de votre VM</li><li>Récupéré via SSH le fichier d&#39;auth</li></ul><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">multipass</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+t+'" alt="Multipass ls" loading="lazy"></p><p>Dans mon cas l&#39;IP est dans <code>172.16.162.4</code>, via la commande :</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ubuntu@172.16.162.4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;sudo cat /var/lib/faasd/secrets/basic-auth-password&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> basic-auth-password</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="connexion-a-l-instance" tabindex="-1">Connexion à l&#39;instance <a class="header-anchor" href="#connexion-a-l-instance" aria-label="Permalink to &quot;Connexion à l&#39;instance&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> OPENFAAS_URL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://172.16.162.4:8080</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> basic-auth-password</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> faas-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> login</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="danger custom-block"><p class="custom-block-title">N&#39;oubliez pas l&#39;IP</p><p>Dans mon exemple l&#39;IP est <code>172.16.162.4</code> mais ce n&#39;est peut-être pas votre cas… Je vous invite à vérifier avant de lancer la commande.</p></div><h2 id="valider-le-fonctionnement" tabindex="-1">Valider le fonctionnement <a class="header-anchor" href="#valider-le-fonctionnement" aria-label="Permalink to &quot;Valider le fonctionnement&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">faas-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+s+'" alt="result" loading="lazy"></p><p>Vous pouvez également accéder à l&#39;interface d&#39;admin WEB via :</p><p><a href="http://172.16.162.4:8080" target="_blank" rel="noreferrer">http://172.16.162.4:8080</a></p><p>Votre ordinateur est maintenant prêt, nous avons donc créé :</p><ul><li>Une VM contenant open-faas (votre serveur).</li><li>Le CLI pour contrôler <code>open-faas</code>.</li><li>Connecter votre ordinateur à votre serveur.</li></ul><p>Source: <a href="https://github.com/openfaas/faasd/blob/master/docs/MULTIPASS.md" target="_blank" rel="noreferrer">https://github.com/openfaas/faasd/blob/master/docs/MULTIPASS.md</a></p><h2 id="la-suite" tabindex="-1">La suite ? <a class="header-anchor" href="#la-suite" aria-label="Permalink to &quot;La suite ?&quot;">​</a></h2><p>Maintenant que nous avons notre serveur, nous allons pouvoir déployer une fonction pour <a href="./openfaas-quicky-create-faas.html">la suite c&#39;est par ici</a></p>',51),o=[r];function p(d,h,c,u,k,m){return i(),e("div",null,o)}const f=a(l,[["render",p]]);export{v as __pageData,f as default};
