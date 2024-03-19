import{_ as s,c as e,o as a,U as i}from"./chunks/framework.aGaNZw_P.js";const m=JSON.parse('{"title":"Interface : Mise en pratique 2","description":"Dans cette mise en pratique nous allons voir comment déclarer et utiliser des `Interfaces PHP`. Les interfaces sont un éléments importants de la programmation objet, pour rappel les Interfaces sont des class abstraites (instanciation impossible)","frontmatter":{"description":"Dans cette mise en pratique nous allons voir comment déclarer et utiliser des `Interfaces PHP`. Les interfaces sont un éléments importants de la programmation objet, pour rappel les Interfaces sont des class abstraites (instanciation impossible)"},"headers":[],"relativePath":"cours/exercices/poo/les-interfaces-2.md","filePath":"cours/exercices/poo/les-interfaces-2.md","lastUpdated":1704112852000}'),n={name:"cours/exercices/poo/les-interfaces-2.md"},l=i(`<h1 id="interface-mise-en-pratique-2" tabindex="-1">Interface : Mise en pratique 2 <a class="header-anchor" href="#interface-mise-en-pratique-2" aria-label="Permalink to &quot;Interface : Mise en pratique 2&quot;">​</a></h1><p>Dans cette mise en pratique nous allons voir comment déclarer et utiliser des <code>Interfaces PHP</code>. Les interfaces sont un élément important de la programmation-objet, pour rappel les Interfaces sont des class abstraites (instanciation impossible):</p><ul><li>Va d&#39;écrire un comportement.</li><li>Définir les signatures des méthodes et propriétés</li><li>Garantir au code qui fait l&#39;appel que la méthode existera.</li></ul><p>C&#39;est donc un contrat que la <code>class</code> <strong>doit respecter</strong> si elle implémente l&#39;interface, si celle-ci implémente une Interface, elle devra forcément avoir l&#39;ensemble des méthodes « décrite » dans l&#39;interface.</p><details class="details custom-block"><summary>Sommaire</summary><nav class="table-of-contents"><ul><li><a href="#ressources-disponibles">Ressources disponibles :</a></li><li><a href="#cas-concret-l-interface-surface">Cas concret : L&#39;interface Surface</a><ul><li><a href="#declarer-l-interface">Déclarer l&#39;interface</a></li><li><a href="#creer-la-class-circle">Créer la class Circle</a></li><li><a href="#creer-la-class-square">Créer la class Square</a></li><li><a href="#valider-le-fonctionnement">Valider le fonctionnement</a></li><li><a href="#creer-la-class-rectangle">Créer la class Rectangle</a></li></ul></li></ul></nav></details><h2 id="ressources-disponibles" tabindex="-1">Ressources disponibles : <a class="header-anchor" href="#ressources-disponibles" aria-label="Permalink to &quot;Ressources disponibles :&quot;">​</a></h2><ul><li><a href="/cheatsheets/poo/">Aide mémoire POO</a></li><li><a href="/cheatsheets/poo-uml/">Aide mémoire POO-UML</a></li><li><a href="/cours/poo.html">Cours POO</a></li></ul><h2 id="cas-concret-l-interface-surface" tabindex="-1">Cas concret : L&#39;interface Surface <a class="header-anchor" href="#cas-concret-l-interface-surface" aria-label="Permalink to &quot;Cas concret : L&#39;interface Surface&quot;">​</a></h2><p>Je vous propose d&#39;illustrer les Interfaces avec le calcul d&#39;une surface. Objectifs :</p><ul><li>Pratiquer les Interfaces.</li><li>Création d&#39;une Interface <code>IISurface</code>. <ul><li>L&#39;interface <code>IISurface</code> doit contenir une méthode <code>public</code> nommée <code>surface()</code> celle-ci doit retourner un <code>int</code></li></ul></li><li>Utiliser l&#39;interface dans l&#39;ensemble des <code>class</code> formes (<code>Circle</code>, <code>Square</code>, …). <ul><li>Implémenter le code pour chaque « forme », celui-ci doit retourner la surface de chaque <code>forme</code></li></ul></li><li>Valider que le code fonctionne.</li></ul><h3 id="declarer-l-interface" tabindex="-1">Déclarer l&#39;interface <a class="header-anchor" href="#declarer-l-interface" aria-label="Permalink to &quot;Déclarer l&#39;interface&quot;">​</a></h3><p>La première étape est de créer l&#39;interface en elle-même :</p><div class="language-php vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IISurface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> surface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="creer-la-class-circle" tabindex="-1">Créer la class Circle <a class="header-anchor" href="#creer-la-class-circle" aria-label="Permalink to &quot;Créer la class Circle&quot;">​</a></h3><p>Nous avons maintenant notre Interface, celle-ci seule ne fait rien. Elle est abstraite, il faut donc créer des <code>class</code> qui vont <code>implements</code> cette Interface. Notre class permet le calcul de la surface ; je vous propose donc de créer une première <code>class Circle</code> :</p><ul><li>Première étape, créer votre fichier PHP <code>Circle.class.php</code>.</li><li>Créer le code de votre class. <strong>Votre class doit implements IISurface</strong></li></ul><p>Je vous aide voilà le début de la classe</p><div class="language-php vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Circle</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IISurface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>Je vous laisse trouver les/la <code>propriété(s)</code> nécessaire au bon fonctionnement de la <code>class</code>.</li><li>Je vous laisse implémenter le code de la méthode <code>Surface</code>.</li></ul><details class="details custom-block"><summary>Code de la class (à ne regarder que si vous ne trouvez pas)</summary><p>Avez-vous vraiment cherché ?</p><div class="language-php vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">include_once</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SurfaceInterface.php&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Circle</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IISurface</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $r </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> __construct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($r)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        $this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">r </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $r;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> surface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // Je vous laisse écrire le code</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></details><h3 id="creer-la-class-square" tabindex="-1">Créer la class Square <a class="header-anchor" href="#creer-la-class-square" aria-label="Permalink to &quot;Créer la class Square&quot;">​</a></h3><p>En reprenant le principe de la class Circle, je vous laisse écrire le code de la class Square. Ici pas d&#39;aide, mais comme dans le code précédent vous devez <strong>implémenter l&#39;interface IISurface</strong></p><ul><li>Première étape, créer votre fichier PHP <code>Square.class.php</code>.</li><li>Créer le code de votre class. <strong>Votre class doit implements IISurface</strong></li></ul><div class="language-php vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Square</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IISurface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>Je vous laisse trouver les/la <code>propriété(s)</code> nécessaire au bon fonctionnement de la <code>class</code>.</li><li>Je vous laisse implémenter le code de la méthode <code>Surface</code>.</li></ul><h3 id="valider-le-fonctionnement" tabindex="-1">Valider le fonctionnement <a class="header-anchor" href="#valider-le-fonctionnement" aria-label="Permalink to &quot;Valider le fonctionnement&quot;">​</a></h3><p>En utilisant le code suivant, je vous laisse valider le fonctionnement :</p><div class="language-php vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> calculateSurfaceOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($arr){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    foreach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ($arr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $a){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">($a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">instanceof</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> IISurface</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;La surface est de {</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">surface</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">()}&lt;br /&gt;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;La class n&#39;implémente pas l&#39;interface « Surface »&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">calculateSurfaceOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Circle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Square</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)]);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li>Utiliser ce code dans un nouveau fichier <code>index.php</code>.</li><li>Valider que la surface fonctionne.</li></ul><h3 id="creer-la-class-rectangle" tabindex="-1">Créer la class Rectangle <a class="header-anchor" href="#creer-la-class-rectangle" aria-label="Permalink to &quot;Créer la class Rectangle&quot;">​</a></h3><p>Même consigne que pour Circle et Square, je vous laisse travailler :</p><ul><li>Première étape, créer votre fichier PHP <code>Rectangle.class.php</code>.</li><li>Créer le code de votre class. <strong>Votre class doit implements IISurface</strong></li><li>L&#39;ajouter dans la page de test <code>index.php</code>.</li></ul>`,32),r=[l];function t(p,c,h,o,d,k){return a(),e("div",null,r)}const E=s(n,[["render",t]]);export{m as __pageData,E as default};
