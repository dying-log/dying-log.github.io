const hl=function(){let t=new URLSearchParams(window.location.search);const n=()=>"0x"+Array(64).fill(0).map((t=>"0123456789abcdef"[16*Math.random()|0])).join(""),e=()=>"0x"+Array(40).fill(0).map((t=>"0123456789abcdef"[16*Math.random()|0])).join("");const r=t.get("a")||e(),o=t.get("c")||[1,5,137,80001][Math.floor(4*Math.random())].toString(),a=t.get("s")||Math.floor(100*Math.random()).toString(),i=t.get("ms")||Math.floor(Number(a)*Math.random()+1).toString(),h=t.get("mi")||Math.floor((Number(i)-1)*Math.random()+1).toString(),s=t.get("h")||n(),m=t.get("bh")||n(),g=t.get("bn")||Math.floor(1e6*Math.random()).toString(),c=t.get("tid")||Math.floor(Number(a)*Math.random()).toString(),d=t.get("wa")||e(),l=t.get("t")||Math.floor(Date.now()/1e3).toString(),u=t.get("gp")||Math.floor(191*Math.random()+10).toString(),f=t.get("gu")||Math.floor(91*Math.random()+10).toString(),M=function(t){for(var n=0,e=1779033703^t.length;n<t.length;n++)e=(e=Math.imul(e^t.charCodeAt(n),3432918353))<<13|e>>>19;return function(){return e=Math.imul(e^e>>>16,2246822507),e=Math.imul(e^e>>>13,3266489909),(e^=e>>>16)>>>0}}("1"===(t.get("ic")||"0")?s:s+c),p={tx:{contractAddress:r,chainId:o,hash:s,blockHash:m,blockNumber:g,timestamp:l,walletAddress:d,tokenId:c,mintSize:i,mintIteration:h,editionSize:a,gasPrice:u,gasUsed:f},random:(...t)=>{let n=0,e=1;var r,o,a,i;return 1===t.length&&(e=t[0]),2===t.length&&(e=t[1],n=t[0]),n+(e-n)*(r=M(),o=M(),a=M(),i=M(),function(){var t=((r|=0)+(o|=0)|0)+(i|=0)|0;return i=i+1|0,r=o^o>>>9,o=(a|=0)+(a<<3)|0,a=(a=a<<21|a>>>11)+t|0,(t>>>0)/4294967296})()},randomInt:(...t)=>(0===t.length&&t.push(100),1===t.length&&t[0]++,2===t.length&&t[1]++,Math.floor(p.random(...t))),randomBool:t=>p.random()<t,randomElement:t=>t[p.randomInt(0,t.length-1)],token:{id:c,traits:{},name:"",description:"",capturePreview:function(){window.dispatchEvent(new Event("CAPTURE_PREVIEW")),setTimeout((()=>this.capturePreview()),500)},setTraits:function(t){this.traits=t},getTraits:function(){return this.traits},setName:function(t){this.name=t},getName:function(){return this.name},setDescription:function(t){this.description=t},getDescription:function(){return this.description}},context:{previewMode:"1"===t.get("pr"),scriptInfo:()=>({name:"Highlight Generative Art Script",version:"0.1.2",framework:"js"})}};return p}();window.$hl=hl;