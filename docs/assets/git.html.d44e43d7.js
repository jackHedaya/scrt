import{_ as n,r as i,o as a,c,a as e,b as s,e as t,d as r}from"./app.daf49d13.js";const l={},d=e("h1",{id:"git",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),t(" Git")],-1),h=e("p",null,[t("Use the "),e("code",null,"git"),t(" storage type to create and access a store in a git repository. "),e("code",null,"scrt"),t(" will clone the repository in memory, checkout the given branch (or the default branch if no branch is given), read the store in the file at the given path, and will commit and push any modifications to the remote.")],-1),p=e("h3",{id:"options",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),t(" Options")],-1),_=e("strong",null,[e("code",null,"--git-url")],-1),u=t(" (required): a git-compatible repository URL. Most git-compatible URLs and protocols can be used. See "),g={href:"https://git-scm.com/docs/git-clone#_git_urls",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"git clone",-1),f=t(" documentation"),b=t(" to learn more."),k=e("p",null,[e("strong",null,[e("code",null,"--git-path")]),t(" (required): the path to the store file inside the the git repository, relative to the repository root. A repository can contain multiple scrt stores, at different paths.")],-1),v=e("p",null,[e("strong",null,[e("code",null,"--git-branch"),t(":")]),t(" the name of the branch to checkout after cloning (or initializing). If no branch is given, the default branch from the remote will be used, or "),e("code",null,"main"),t(" if a new repository is initialized.")],-1),w=e("strong",null,[e("code",null,"--git-checkout"),t(":")],-1),x=t(" a git revision to checkout. If this option is specified, the revision will be checked out in a "),y={href:"https://git-scm.com/docs/git-checkout#_detached_head",target:"_blank",rel:"noopener noreferrer"},E=t('"detached HEAD"'),I=t(" and pushing will not work; making updates ("),L=e("code",null,"init",-1),N=t(", "),V=e("code",null,"set",-1),z=t(" or "),A=e("code",null,"unset",-1),B=t(") will be impossible."),U=r(`<p><strong><code>--git-message</code>:</strong> the message of the git commit. A default message will be used if this is not set.</p><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>scrt init --storage<span class="token operator">=</span>git <span class="token punctuation">\\</span>
          --password<span class="token operator">=</span>p4ssw0rd <span class="token punctuation">\\</span>
          --git-url<span class="token operator">=</span>git@github.com:githubuser/secrets.git <span class="token punctuation">\\</span>
          --git-path<span class="token operator">=</span>store.scrt
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>scrt</code> will initialize a new repo if none can be cloned.</p></div>`,4);function q(R,S){const o=i("ExternalLinkIcon");return a(),c("div",null,[d,h,p,e("p",null,[_,u,e("a",g,[m,f,s(o)]),b]),k,v,e("p",null,[w,x,e("a",y,[E,s(o)]),I,L,N,V,z,A,B]),U])}var C=n(l,[["render",q],["__file","git.html.vue"]]);export{C as default};
