x=y=r=-1;s=50;m=Math;t=setTimeout;B=b.style;B.margin=f=0;B.background="#000";B.fontFamily="sans-serif";B.overflow="hidden";(onresize=function(){w=c.width=innerWidth;h=c.height=innerHeight})();(d=function(){t(d,s);if(r==-1)return;C=(m.random()*16777215|0).toString(16);a.beginPath();a.arc(x,y,r,0,2*m.PI);a.fillStyle=a.strokeStyle=C;a.stroke();if(f)a.fill()})();onmousemove=function(E){X=E.clientX-x;Y=E.clientY-y;r=m.sqrt(X*X+Y*Y)*2;x+=X;y+=Y};onclick=function(){f=!f};
onkeyup=function(E){if((K=E.keyCode)==32)a.clearRect(0,0,w,h);if(K==38)s-=25;if(K==40)s+=25;s=m.min(m.max(s,5),150)};(S=(L=document.createElement("div")).style).position="fixed";S.top=S.right=S.padding="20px";S.background="#fff";S.textAlign="right";L.innerHTML="<b>circles!</b><br>mouse = draw<br>click = toggle solid<br>up = faster<br>down = slower<br>space = clear";b.appendChild(L);t(function(){for(I=0;I<1E3;I+=10)t(function(O){S.opacity=O},I,1-I/1E3);t(function(){S.display="none"},1E3)},8E3);