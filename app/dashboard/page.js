'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function Dashboard() {
  const [profile, setProfile] = useState(null)
  const [stats, setStats] = useState({agents:0,trips:0,forms:0})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) { window.location.href = '/login'; return }
      const { data: p } = await supabase.from('users').select('full_name,role,universities(name)').eq('id', session.user.id).maybeSingle()
      if (p) setProfile(p)
      const [{ count: ac }, { count: tc }, { count: fc }] = await Promise.all([
        supabase.from('agents').select('*',{count:'exact',head:true}),
        supabase.from('trips').select('*',{count:'exact',head:true}),
        supabase.from('forms').select('*',{count:'exact',head:true}),
      ])
      setStats({agents:ac||0,trips:tc||0,forms:fc||0})
      setLoading(false)
    }
    load()
  }, [])

  const name = profile?.full_name || 'there'

  if (loading) return <div style={{display:'flex',height:'100vh',alignItems:'center',justifyContent:'center',background:'#f5ede0',fontFamily:'Georgia,serif'}}><div style={{textAlign:'center'}}><div style={{fontSize:32,color:'#2c1810'}}>Orbis</div><div style={{fontSize:13,color:'#8a5c3c'}}>Loading…</div></div></div>

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="slogo"><div className="lw">Orbis</div><div className="ls">The IO Buddy</div><div className="lt">International Office CRM</div></div>
        <nav className="snav">
          <div className="ng">Workspace</div>
          <a href="/dashboard" className="nb active"><span className="ni">🏠</span>Home</a>
          <a href="/agents" className="nb"><span className="ni">🏢</span>Agent Database<span className="nbadge">{stats.agents}</span></a>
          <a href="/schools" className="nb"><span className="ni">🎓</span>Schools</a>
          <a href="/itinerary" className="nb"><span className="ni">✈️</span>Plan a Trip</a>
          <a href="/forms" className="nb"><span className="ni">📋</span>Forms</a>
          <div className="ndiv"></div>
          <div className="ng">Comms</div>
          <a href="/mail" className="nb"><span className="ni">✉️</span>Mailing</a>
          <a href="/notes" className="nb"><span className="ni">📝</span>Visit Notes</a>
          <div className="ndiv"></div>
          <button className="nb dim"><span className="ni">✨</span>AI Reports</button>
          <button className="nb dim"><span className="ni">📊</span>Performance</button>
        </nav>
        <div className="suser">
          <div className="uav">{name.substring(0,2).toUpperCase()}</div>
          <div><div className="uname">{name}</div><div className="urole">{profile?.role||'Officer'}</div></div>
        </div>
      </aside>
      <main className="main">
        <div className="topbar">
          <div className="tb-bc"><span className="bc-cur">Home</span></div>
          <div className="tb-right" style={{display:'flex',gap:8,alignItems:'center'}}>
            <span style={{fontSize:12,color:'#8a5c3c'}}>{profile?.universities?.name||''}</span>
            <button onClick={()=>{supabase.auth.signOut();window.location.href='/login'}} style={{padding:'5px 14px',background:'#1c2e28',color:'#f2e4d0',border:'none',borderRadius:7,fontSize:11,fontWeight:600,cursor:'pointer'}}>Sign Out</button>
          </div>
        </div>
        <div className="content">
          <div className="view active" style={{overflowY:'auto'}}>
            <div className="home-scroll">
              <div className="greeting">
                <div className="glabel">Good morning</div>
                <div className="gname">Welcome back, <em>{name}.</em></div>
                <div className="gsub">{profile?.universities?.name||'International Office'} · Here's what's happening across your agent network.</div>
              </div>
              <div className="stats-strip">
                {[{val:stats.agents,label:'Active Agents',icon:'🏢',cls:'t'},{val:stats.trips,label:'Trips Planned',icon:'✈️',cls:'r'},{val:stats.forms,label:'Forms',icon:'📋',cls:'g'}].map(s=>(
                  <div key={s.label} className="stp">
                    <div className={`spico ${s.cls}`}>{s.icon}</div>
                    <div><div className="spval">{s.val}</div><div className="splabel">{s.label}</div></div>
                  </div>
                ))}
              </div>
              <div className="slabel">Quick Access</div>
              <div className="cards-grid">
                {[{title:'Agent Database',desc:`All ${stats.agents} contracted agents, contacts and branches.`,icon:'🏢',cls:'t',href:'/agents'},{title:'Plan a Trip',desc:'Build itineraries and schedule visits.',icon:'✈️',cls:'r',href:'/itinerary'},{title:'Forms',desc:'Lead capture forms for fairs and visits.',icon:'📋',cls:'g',href:'/forms'}].map(card=>(
                  <a key={card.title} href={card.href} className="card" style={{textDecoration:'none'}}>
                    <div className={`cband ${card.cls}`}></div>
                    <div className="cbody">
                      <div style={{fontSize:36,marginBottom:10}}>{card.icon}</div>
                      <div className="ctitle">{card.title}</div>
                      <div className="cdesc">{card.desc}</div>
                    </div>
                    <div className="cfoot"><button className={`cfbtn ${card.cls}`}>Open →</button></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
