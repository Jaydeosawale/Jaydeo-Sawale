 "use client";
import {motion} from "framer-motion";
import {ArrowDown,ArrowUpRight,Check,Github,Linkedin,Mail,Menu,Phone,X} from "lucide-react";
import {useState} from "react";

const projects=[
 {n:"01",name:"LegalLens-AI",type:"RAG / DOCUMENT INTELLIGENCE",desc:<>A legal-document intelligence system built around <mark>RAG</mark>, grounded retrieval and <mark>LLM</mark> generation.</>,keys:["RAG","FAISS","BM25","Embeddings","Hybrid Retrieval","Reranking","Groq"],flow:["PDF","CHUNK","EMBEDDINGS","HYBRID RETRIEVAL","RERANK","LLM"]},
 {n:"02",name:"Trav-Planner",type:"AI / FLUTTER / MULTIPLATFORM",desc:<>An AI travel platform combining <mark>query understanding</mark>, travel data and structured trip planning across <mark>Flutter</mark> applications.</>,keys:["Flutter","Dart","FastAPI","PostgreSQL","AI Search","Query Understanding","Agents"],flow:["QUERY","UNDERSTAND","TRAVEL DATA","AI PLAN","ITINERARY"]},
 {n:"03",name:"AI Nexus",type:"ANDROID / KOTLIN / AI",desc:<>A native Android experience using <mark>Kotlin</mark> and <mark>Jetpack Compose</mark> to bring AI features into a modern mobile architecture.</>,keys:["Kotlin","Jetpack Compose","Coroutines","Hilt","Retrofit","REST API","Generative AI"],flow:["ANDROID","COMPOSE","API","AI","RESULT"]}
];

const groups=[
 ["ANDROID","Kotlin","Jetpack Compose","Coroutines","Flow","MVVM","Clean Architecture","Hilt","Room","Retrofit"],
 ["FLUTTER / MULTIPLATFORM","Flutter","Dart","Android","iOS","Web","Responsive UI","API Integration"],
 ["AI ENGINEERING","Generative AI","RAG","Embeddings","Vector Search","Hybrid Retrieval","Reranking","LLMs","Agents","Evaluation"],
 ["BACKEND / CLOUD","Python","FastAPI","PostgreSQL","REST APIs","AWS / S3","Docker","Kubernetes"]
];

export default function Page(){
 const [open,setOpen]=useState(false);
 return <div className="site">
  <header><a className="logo" href="#top">JAYDEO<span>.</span></a><nav className={open?"open":""}><a href="#about">About</a><a href="#work">Work</a><a href="#stack">Stack</a><a href="#contact">Contact</a></nav><a className="mail-top" href="mailto:jaydeep.sawale97@gmail.com">jaydeep.sawale97@gmail.com <ArrowUpRight size={13}/></a><button className="hamb" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></header>

  <main id="top">
   <section className="hero">
    <div className="meta"><span>01 / SOFTWARE ENGINEER</span><span>ANDROID · FLUTTER · AI</span></div>
    <motion.div className="hero-main" initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
      <p className="kicker">MOBILE ENGINEERING × INTELLIGENCE</p>
      <h1>BUILDING<br/><span>INTELLIGENT</span><br/>PRODUCTS<span className="dot">.</span></h1>
    </motion.div>
    <div className="hero-bottom"><p>Android engineer with 5+ years of experience, expanding into Flutter and AI engineering.</p><a href="#work">EXPLORE WORK <ArrowDown size={14}/></a><span>SCROLL ↓</span></div>
   </section>

   <section id="about" className="section light">
    <aside>02 / ABOUT</aside><div className="content"><p className="kicker">THE ENGINEER</p><h2>Mobile is my foundation.<br/><span>AI is my next layer.</span></h2><div className="copy"><p className="lead">I build across the interface and the system behind it — from <mark>Kotlin</mark> and <mark>Flutter</mark> to <mark>Python</mark>, <mark>RAG</mark>, <mark>LLMs</mark> and intelligent product experiences.</p><p>I care about architecture, data flow, retrieval quality, model integration, performance and the experience people actually use.</p></div></div>
   </section>

   <section id="work" className="section dark">
    <aside>03 / WORK</aside><div className="content"><p className="kicker">SELECTED ENGINEERING</p><h2>Three products.<br/><span>Three stories.</span></h2>
     {projects.map(p=><motion.article className="project" key={p.name} whileHover={{y:-4}}>
       <div className="project-left"><div className="project-number">{p.n}</div><p className="kicker blue">{p.type}</p><h3>{p.name}</h3><p className="desc">{p.desc}</p><div className="keywords">{p.keys.map(k=><span key={k}>{k}</span>)}</div></div>
       <div className="flow"><div className="flow-head"><span>ARCHITECTURE</span><span>{p.n}</span></div>{p.flow.map((f,i)=><div className="flow-row" key={f}><b>{String(i+1).padStart(2,"0")}</b><strong>{f}</strong>{i<p.flow.length-1&&<i/>}</div>)}<small>DATA · LOGIC · EXPERIENCE</small></div>
     </motion.article>)}
    </div>
   </section>

   <section className="system"><div><p className="kicker">04 / ENGINEERING MINDSET</p><h2>I DON'T JUST<br/>BUILD THE <span>UI.</span><br/>I BUILD WHAT'S<br/><span>BEHIND IT.</span></h2><div className="line"></div><div className="system-flow">{["MOBILE","API","DATA","RETRIEVAL","MODEL","INTELLIGENCE"].map((x,i)=><div key={x}><b>0{i+1}</b><strong>{x}</strong></div>)}</div></div></section>

   <section id="stack" className="section light stack"><aside>05 / STACK</aside><div className="content"><p className="kicker">TECHNICAL CAPABILITIES</p><h2>Keywords that describe<br/><span>the work.</span></h2><div className="stack-list">{groups.map((g,i)=><div className="stack-row" key={g[0]}><b>0{i+1}</b><h3>{g[0]}</h3><div>{g.slice(1).map(x=><span key={x}><Check size={10}/>{x}</span>)}</div></div>)}</div></div></section>

   <section className="journey"><div className="journey-inner"><p className="kicker">06 / JOURNEY</p><h2>ANDROID → FLUTTER → <span>AI.</span></h2><div className="timeline">{[["2021","ANDROID","Kotlin / mobile foundation"],["2022+","PRODUCTION","Architecture / APIs / apps"],["2025+","FLUTTER + AI","Cross-platform / GenAI"],["NOW","AI ENGINEERING","RAG / LLM / agents"]].map(x=><div key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div></div></section>

   <section id="contact" className="contact"><p className="kicker">07 / CONTACT</p><h2>LET'S BUILD<br/><span>SOMETHING USEFUL.</span></h2><a className="email" href="mailto:jaydeep.sawale97@gmail.com">jaydeep.sawale97@gmail.com <ArrowUpRight/></a><div className="links"><a href="tel:+919850031115"><Phone/>+91 98500 31115</a><a href="https://github.com/Jaydeosawale" target="_blank"><Github/>GitHub <ArrowUpRight/></a><a href="https://www.linkedin.com/" target="_blank"><Linkedin/>LinkedIn <ArrowUpRight/></a><a href="mailto:jaydeep.sawale97@gmail.com"><Mail/>Email <ArrowUpRight/></a></div></section>
  </main>
  <footer><span>© 2026 JAYDEO SAWALE</span><span>ANDROID · FLUTTER · AI ENGINEERING</span></footer>
 </div>
}