f=require('fs');E=process.env;I=E.MAKEFUN_INPUT_DIR||'/input';O=E.MAKEFUN_OUTPUT_DIR||'/output'
S="0Aq46:;?        999999959995999 999             PTTP0           58              4414"
R=_=>{for(p=t=0;;){if(t++>=1e6)return 10;if(p<0||p>=n)return 9;c=P[p];v=S.charCodeAt(c)-48;if(!(v>=0))return 5
x=p+1+(v>>4);u=v>>2&3;if(x>n)return 9;if(s<u)return 2;if(s-u+(v&3)>256)return 3;p=x;b=D[s-1];a=D[s-2]
if(v==9){if(c>18&&c<23&&!b)return 4;D[s-2]=[a+b,a-b,Math.imul(a,b),a/b,a%b,(a>>>0)/(b>>>0),(a>>>0)%(b>>>0),,a&b,a|b,a^b,,a<<b,a>>b,a>>>b,,a==b,a<b,a>>>0<b>>>0][c-16];s--}
if(!c)return 0
if(c==1)D[s++]=P[p-1]<<24>>24
if(c==2)D[s++]=P.readInt32LE(p-4)
if(c==3)s--
if(c==4)D[s++]=b
if(c==5)D[s-1]=a,D[s-2]=b
if(c==6)D[s++]=a
if(c==7)D[s-1]=D[s-3],D[s-3]=a,D[s-2]=b
if(c==23)D[s-1]=-b
if(c==27)D[s-1]=~b
if(c>47&&c<51&&(c==48||(c&1?!D[--s]:D[--s])))p=x+P.readInt16LE(x-2)
if(c==51){if(C.length>63)return 7;C.push(x);p=P.readUInt16LE(x-2)}
if(c==52){if(!C.length)return 8;p=C.pop()}
if(c>63&&c<66&&b>>>0>255)return 6
if(c==64)D[s-1]=M[b]
if(c==65)M[b]=a,s-=2
if(c>79&&c<82){q=Buffer.from(c&1?[b]:''+b);if(k+q.length>65536)return 11;o.push(q);k+=q.length;s--}
if(c==82)D[s++]=N[j++]??-1
if(c==83)return b&255}}
for(d of f.readdirSync(I)){P=f.readFileSync(I+'/'+d+'/program.bin');N=f.readFileSync(I+'/'+d+'/input.bin');n=P.length
D=new Int32Array(257);M=new Int32Array(256);C=[];o=[];k=s=j=0;e=R();f.mkdirSync(w=O+'/'+d,{recursive:true})
f.writeFileSync(w+'/stdout.bin',Buffer.concat(o));f.writeFileSync(w+'/exit.txt',''+e)}