(this.webpackJsonpbookmarker=this.webpackJsonpbookmarker||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(5),c=n.n(a),i=(n(14),n(6)),l=n(3),s=n(7),w=function e(t,n,o){Object(s.a)(this,e),this.title=t,this.url=n,this.category=o},h=[new w("The Verge","https://theverge.com","technology"),new w("Engadget","https://engadget.com","technology"),new w("Ars Technica","https://arstechnica.com","technology"),new w("NPR","https://npr.org","news"),new w("Wall Street Journal","https://wsj.com","news"),new w("Reuters","https://reuters.com","news"),new w("DP Review","https://dpreview.com","photography"),new w("Smashing Magazine","https://smashingmagazine.com","design"),new w("The Morning Paper","https://blog.acolyer.org","blogs"),new w("Signal v. Noise","https://m.signalvnoise.com/","blogs"),new w("Nature","http://nature.com/","science"),new w("Scientific American","https://www.scientificamerican.com/","science"),new w("Hacker News","https://news.ycombinator.com/","engineering"),new w("Netflix Tech","https://medium.com/@NetflixTechBlog","engineering"),new w("Mozilla Blog","https://blog.mozilla.org/","engineering"),new w("Atlas Obscura","https://www.atlasobscura.com/","culture"),new w("Prof Galloway","https://www.profgalloway.com/","blogs"),new w("Philly Inquirer","https://www.inquirer.com/","news"),new w("Deep South Ventures","https://www.deepsouthventures.com/","blogs"),new w("NYT Cooking","https://cooking.nytimes.com/","food"),new w("Gates Notes","https://www.gatesnotes.com/","blogs"),new w("JSTOR Daily","https://daily.jstor.org/","culture"),new w("Protocol","https://www.protocol.com/","technology"),new w("FB Engineering","https://engineering.fb.com/","engineering"),new w("The Atlantic","https://www.theatlantic.com/","news"),new w("Smithsonian","https://www.smithsonianmag.com/","culture"),new w("Aeon","https://aeon.co/","culture"),new w("Paul Graham","http://paulgraham.com/","engineering"),new w("Peta Pixel","https://petapixel.com/","photography"),new w("Splendid Table","https://www.splendidtable.org/","food"),new w("Food52","https://food52.com/","food"),new w("Dezeen","https://www.dezeen.com/","design")],u=n(8),m=(n(15),function(e){var t=e.bookmarks;return r.a.createElement("main",{id:"grid-view"},function(){var e=[];return t.forEach((function(t,n){var o=t.map((function(e,t){return r.a.createElement("a",{key:t,href:e.url,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("div",null,e.title))}));e.push.apply(e,Object(u.a)(o))})),e}())}),g=(n(16),n(17),function(e){var t=e.bookmarks;return r.a.createElement("main",{id:"list-view"},function(){var e=[];return t.forEach((function(t,n){var o=r.a.createElement("section",{key:n},r.a.createElement("h3",null,n),r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noreferrer noopener"},e.title))}))));e.push(o)})),e}())}),p=function(){var e=Object(o.useState)(new Map),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(o.useState)(!1),s=Object(l.a)(c,2),w=s[0],u=s[1];return Object(o.useEffect)((function(){var e=new Map;h.sort((function(e,t){return e.category<t.category?-1:1}));var t,n=Object(i.a)(h);try{for(n.s();!(t=n.n()).done;){var o=t.value,r=o.category.toLowerCase(),c=e.get(r)||[];c.push(o),e.set(r,c)}}catch(l){n.e(l)}finally{n.f()}e.forEach((function(e,t){return e.sort((function(e,t){return e.title<t.title?-1:1}))})),a(e)}),[]),r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h1",null,"curated.")),w?r.a.createElement(m,{bookmarks:n}):r.a.createElement(g,{bookmarks:n}),r.a.createElement("footer",null,r.a.createElement("small",{onClick:function(){return u(!w)}},w?"List View":"Grid View")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.79ec5491.chunk.js.map