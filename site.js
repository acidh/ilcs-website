
/* Engine: you do not need to edit this file. Edit content.js instead. */
(function(){
const $=s=>document.querySelector(s);
const href=id=>id==='home'?'index.html':'page.html?p='+id;
const cur=new URLSearchParams(location.search).get('p')||'home';

const img=s=>'<img src="'+s+'" alt="" loading="lazy" onerror="this.parentNode.classList.add(\'x\');this.remove()">';

const lk=(t,u)=>u?'<a class="btn o" target="_blank" rel="noopener" href="'+u+'">'+t+'</a>':'';

const person=p=>'<div class="card cc"><div class="ph">'+img(p.img)+'</div><h3>'+p.n+'</h3><p class="r">'+(p.r||'')+'</p>'+(p.i?'<p>'+p.i+'</p>':'')+(p.e?'<p><a href="mailto:'+p.e+'">'+p.e+'</a></p>':'')+lk('LinkedIn',p.li)+lk('ResearchGate',p.rg)+(p.links||[]).map(x=>lk(x[0],x[1])).join('')+'</div>';

const tbl=(h,r)=>'<div class="tb"><table><tr>'+h.map(x=>'<th>'+x+'</th>').join('')+'</tr>'+r.map(x=>'<tr>'+x.map(c=>'<td>'+c+'</td>').join('')+'</tr>').join('')+'</table></div>';

/* HEADER MENU */
const nav=MENU.map(m=>{
 const on=m.id===cur||(m.sub||[]).some(s=>s[1]===cur);
 const destination=m.url||href(m.id);
 return '<li class="'+(on?'on':'')+'"><a href="'+destination+'">'+m.label+(m.sub?' ▾':'')+'</a>'+(m.sub?'<ul>'+m.sub.map(s=>'<li><a href="'+href(s[1])+'">'+s[0]+'</a></li>').join('')+'</ul>':'')+'</li>';
}).join('');

$('#hdr').innerHTML='<div class="wrap top"><a class="brand" href="index.html">'+(SITE.logo?'<img src="'+SITE.logo+'" alt="">':'<span class="lg">🔬</span>')+'<span><small>'+SITE.short+'</small><b>'+SITE.name+'</b></span></a><button id="mb" aria-label="Menu">☰</button></div><nav><ul class="wrap menu" id="mn">'+nav+'</ul></nav>';

$('#mb').onclick=()=>$('#mn').classList.toggle('open');

/* FOOTER */
$('#ft').innerHTML='<div class="wrap"><p>'+SITE.footer+'</p><p>Website designed &amp; developed by <a href="'+href('team')+'">'+TEAM.map(t=>t.n).join(' &amp; ')+'</a></p><div>'+SITE.links.map(x=>'<a href="'+x.l+'">'+x.t+'</a>').join('')+'</div></div>';

/* IMAGE LIGHTBOX */
document.body.insertAdjacentHTML('beforeend','<div id="lb"></div>');

document.addEventListener('click',e=>{
 const f=e.target.closest('.gal figure'),b=$('#lb');
 if(f&&!f.classList.contains('x')){
  b.innerHTML='<div>'+f.querySelector('img').outerHTML+'<p>'+f.querySelector('figcaption').textContent+'</p></div>';
  b.style.display='grid';
 }else{
  b.style.display='none';
 }
});

/* HOME LIST */
const li=a=>a.map(x=>'<li><a href="'+x.l+'">'+x.t+'</a><small>'+(x.d||'')+'</small></li>').join('');

/* PAGE RENDERERS */
const R={
 council:()=>'<div class="cards">'+COUNCIL.map(person).join('')+'</div>',

 team:()=>'<div class="cards">'+TEAM.map(person).join('')+'</div>',

 gallery:k=>{
  const S=k==='all'?Object.values(GALLERY):[GALLERY[k]];
  const g=[].concat(...S.map(s=>s.items.map(i=>[s.dir+i[0],i[1]])));
  return g.length
   ?'<div class="gal">'+g.map(i=>'<figure>'+img(i[0])+'<figcaption>'+i[1]+'</figcaption></figure>').join('')+'</div><p class="note">Click a photo to enlarge.</p>'
   :'<p>No photos here yet. Put images in <code>'+S[0].dir+'</code> and list them under GALLERY in content.js.</p>';
 },

 awards:()=>'<p>ILCS has instituted various awards and honors recognizing the contribution of eminent researchers working in the area of liquid crystal and related materials research.</p><div class="tabs" id="tabs"></div><div id="tv"></div>',

 nclc:()=>'<input class="srch" id="q" placeholder="Search by city, year or name…"><div id="nt"></div>'
};

/* PAGE INTERACTIONS */
const A={
 awards(){
  const ks=Object.keys(AWARDS),t=$('#tabs'),v=$('#tv');

  const show=k=>{
   [...t.children].forEach(b=>b.classList.toggle('on',b.textContent===k));
   v.innerHTML=tbl(['#','Name','Year'],AWARDS[k].map((r,i)=>[i+1,r[0],r[1]]));
  };

  ks.forEach(k=>{
   const b=document.createElement('button');
   b.textContent=k;
   b.onclick=()=>show(k);
   t.appendChild(b);
  });

  show(ks[0]);
 },

 nclc(){
  const d=q=>$('#nt').innerHTML=tbl(
   ['NCLC','Venue','Organizer','Date','Dewan Jawahar Lal Nayar Prize awarded to'],
   NCLC.filter(r=>r.join(' ').toLowerCase().includes(q))
  );

  d('');
  $('#q').oninput=e=>d(e.target.value.toLowerCase());
 }
};

/* HOME PAGE */
if(document.body.dataset.home){

 $('#main').innerHTML=
 '<div class="hero" id="hero"><div class="ov"><h2>'+SITE.name+'</h2><p>'+SITE.tag+'</p></div></div><div class="wrap">'+

 '<div class="stats">'+SITE.stats.map(s=>'<div><b>'+s[0]+'</b>'+s[1]+'</div>').join('')+'</div>'+

 '<div class="intro">'+SITE.intro.map(p=>'<p>'+p+'</p>').join('')+'</div>'+

 '<a class="fp" href="'+href('founding')+'" style="text-decoration:none;color:inherit"><div class="ph">'+img(FP.img)+'</div><div><h3 style="margin:0;color:#0a0a55">'+FP.n+'</h3><p class="r">'+FP.r+'</p></div></a>'+

 '<div class="cols"><div><h3 class="c1">NEWS</h3><ul class="ls">'+li(NEWS)+'</ul></div><div><h3 class="c2">EVENTS</h3><ul class="ls">'+li(EVENTS)+'</ul></div><div><h3 class="c3">MEMBERSHIP</h3><p>'+SITE.membership+'</p><a class="btn" href="'+href('membership')+'">Join us</a></div></div>'+

 '<h2 class="sec">Website designed &amp; developed by</h2><div class="cards">'+TEAM.map(person).join('')+'</div></div>';

 const h=$('#hero');
 let i=0;

 const set=()=>h.style.backgroundImage='url("'+SITE.slides[i]+'")';
 set();

 if(SITE.slides.length>1){
  setInterval(()=>{
   i=(i+1)%SITE.slides.length;
   set();
  },5000);
 }

}else{

 /* OTHER PAGES */
 const p=PAGES[cur]||{
  title:'Coming soon',
  html:'<p>This page is not written yet. Add it in content.js under PAGES, using the id "'+cur+'".</p>'
 };

 document.title=p.title+' · '+SITE.short;

 $('#main').innerHTML=
 '<div class="wrap pg"><h1>'+p.title+'</h1>'+
 (p.type?R[p.type](p.key):p.html)+'</div>';

 if(p.type&&A[p.type]){
  A[p.type]();
 }

}

})();
