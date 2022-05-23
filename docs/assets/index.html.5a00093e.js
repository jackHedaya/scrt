import{_ as s,r as n,o as i,c,a as t,b as r,F as d,d as o,e}from"./app.9a3d8db1.js";const h={},l=o('<h1 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h1><p><strong>scrt</strong> is a secret manager for the command line. You can encrypt and decrypt secrets from the command line, choosing between a variety of secure storage backends, locally or remotely available over the network.</p><p>The purpose of scrt is to provide developers, sysadmins and devops with a reliable and secure tool to manage secrets in projects, while avoiding GUI-centered tools, expensive cloud-based services and complex self-hosted solutions.</p><h2 id="how-it-works" tabindex="-1"><a class="header-anchor" href="#how-it-works" aria-hidden="true">#</a> How it works</h2><p>scrt keeps a collection of secrets inside a <em>store</em>, a single encrypted file, stored locally on your computer, or remotely over the network.</p><p>When performing operations on your secrets, scrt loads the store into memory, decrypts the payload, creates, retrieves or updates secrets, and, if necessary, encrypts the changes back to the store. Each secret is referenced by a name, and can be an arbitrary string of bytes, of any length.</p>',6),p=e("scrt uses "),u={href:"https://en.wikipedia.org/wiki/Advanced_Encryption_Standard",target:"_blank",rel:"noopener noreferrer"},m=e("AES-256"),y=e(" symmetric encryption, and derives its 256-bit keys from a password of your choosing using "),f={href:"https://en.wikipedia.org/wiki/Argon2",target:"_blank",rel:"noopener noreferrer"},g=e("Argon2id"),b=e(" key derivation. A new key is derived from the password each time the store is re-encrypted, avoid key re-use and improving security."),w=o('<p>The store data can be stored on a file on your computer&#39;s hard drive, or use one of the remote storage backends, such as AWS S3 (or any S3-compatible object storage), or a git remote repository.</p><h2 id="when-should-i-use-scrt" tabindex="-1"><a class="header-anchor" href="#when-should-i-use-scrt" aria-hidden="true">#</a> When should I use scrt?</h2><p>The main purpose of scrt is to provide engineering teams with a straightforward way to share secrets, but actual usages can vary. You can:</p><ul><li>Store secrets in a file at the root of a project repository, retrieving them as needed during CI</li><li>Use a git repository to provide quick and easy secret sharing between team members, without relying on an unfamiliar solution</li><li>Retrieve a store from S3, and use the secrets in Ansible or Chef scripts during deployment</li><li>Use as a replacement for complex, expensive SaaS-based secret solutions</li></ul><h2 id="why-not" tabindex="-1"><a class="header-anchor" href="#why-not" aria-hidden="true">#</a> Why not\u2026?</h2><h3 id="sops" tabindex="-1"><a class="header-anchor" href="#sops" aria-hidden="true">#</a> sops</h3><p>sops is actually very similar to scrt, relying on a single file to encrypt and decrypt secrets. A distinguishable feature from sops is its ability to interface with key management systems to fetch encryption keys at run time. In order to accomodate for secrets encrypted with different keys, sops does not encrypt the entire store as a single opaque object, keeping secret keys in plaintext, trading a bit of secrecy for versatility.</p><h3 id="vault" tabindex="-1"><a class="header-anchor" href="#vault" aria-hidden="true">#</a> Vault</h3><p>Hashicorp Vault provides engineering teams with both the tools to handle secrets and the storage engine as a server. A fantastic solution for large teams with many secrets. Yet installing and maintaining a Vault server for your orgnization can require many hours, and usually a dedicated IT team. scrt and Vault are intended for organizations and projects of different scales.</p><h3 id="cloud-secret-managers" tabindex="-1"><a class="header-anchor" href="#cloud-secret-managers" aria-hidden="true">#</a> Cloud secret managers</h3><p>Most cloud providers offer a secret management solution (along with key management). Very similar in features and operation to Vault, in this case the solution is managed by the cloud provider, allowing an organization to reduce maintenance to nearly nothing. This choice usually comes with a cost on your cloud bill.</p><h3 id="_1password" tabindex="-1"><a class="header-anchor" href="#_1password" aria-hidden="true">#</a> 1Password</h3><p>While SaaS password managers sometimes offer a command-line or API interface,they are built with the non-technical user in mind, and are usually complicated to adapt to engineering practices.</p>',13);function _(v,k){const a=n("ExternalLinkIcon");return i(),c(d,null,[l,t("p",null,[p,t("a",u,[m,r(a)]),y,t("a",f,[g,r(a)]),b]),w],64)}var S=s(h,[["render",_],["__file","index.html.vue"]]);export{S as default};
