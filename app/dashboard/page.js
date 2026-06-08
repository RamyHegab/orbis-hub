'use client'
import { useEffect, useState, useRef } from 'react'
import { supabase } from '../../lib/supabase'

const SIDEBAR = ({ profile, agentCount }) => (
  <aside className="sidebar">
    <div className="slogo"><div className="lw">Orbis</div><div className="ls">The IO Buddy</div><div className="lt">International Office CRM</div></div>
    <nav className="snav">
      <div className="ng">Workspace</div>
      <a href="/dashboard" className="nb active"><span className="ni">🏠</span>Home</a>
      <a href="/agents" className="nb"><span className="ni">🏢</span>Agent Database<span className="nbadge">{agentCount}</span></a>
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
      <div className="uav">{profile?.full_name?.substring(0,2)||'RH'}</div>
      <div><div className="uname">{profile?.full_name||'User'}</div><div className="urole">{profile?.role||'Officer'}</div></div>
    </div>
  </aside>
)

export default function Dashboard() {
  const [profile, setProfile] = useState(null)
  const [stats, setStats] = useState({agents:0,trips:0,forms:0})
  const [recentAgents, setRecentAgents] = useState([])
  const [loading, setLoading] = useState(true)
  const mapRef = useRef(null)

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
      const { data: recent } = await supabase.from('agents').select('id,name,hq_country,code').limit(6).order('name')
      if (recent) setRecentAgents(recent)
      setLoading(false)
    }
    load()
  }, [])

  useEffect(() => {
    if (!mapRef.current) return
    const paths = mapRef.current.querySelectorAll('path.has-agents')
    paths.forEach(path => {
      path.addEventListener('mouseenter', (e) => {
        const name = path.getAttribute('data-name')
        const agents = path.getAttribute('data-agents')
        // tooltip logic handled by CSS title
      })
    })
  }, [loading])

  const name = profile?.full_name || 'there'

  if (loading) return (
    <div style={{display:'flex',height:'100vh',alignItems:'center',justifyContent:'center',background:'#f5ede0',fontFamily:'Georgia,serif'}}>
      <div style={{textAlign:'center'}}><div style={{fontSize:32,color:'#2c1810'}}>Orbis</div><div style={{fontSize:13,color:'#8a5c3c'}}>Loading…</div></div>
    </div>
  )

  return (
    <div className="shell">
      <SIDEBAR profile={profile} agentCount={stats.agents}/>
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
                <div className="stp"><div className="spico t">🏢</div><div><div className="spval">{stats.agents}</div><div className="splabel">Active Agents</div></div></div>
                <div className="stp"><div className="spico r">✈️</div><div><div className="spval">{stats.trips}</div><div className="splabel">Trips Planned</div></div></div>
                <div className="stp"><div className="spico g">📋</div><div><div className="spval">{stats.forms}</div><div className="splabel">Forms</div></div></div>
                <div className="stp"><div className="spico t">🌐</div><div><div className="spval">75</div><div className="splabel">Countries</div></div></div>
              </div>
              <div className="slabel">Quick Access</div>
              <div className="cards-grid">
                <a href="/agents" className="card" style={{textDecoration:'none'}}>
                  <div className="cband t"></div>
                  <div className="cbody">
                    <div className="ctitle">Agent Database</div>
                    <div className="cdesc">All {stats.agents} contracted agents, contacts and branches across every region.</div>
                  </div>
                  <div className="cfoot"><button className="cfbtn t">Open →</button></div>
                </a>
                <a href="/itinerary" className="card" style={{textDecoration:'none'}}>
                  <div className="cband r"></div>
                  <div className="cbody">
                    <div className="ctitle">Plan a Trip</div>
                    <div className="cdesc">Build itineraries day by day and schedule agent visits.</div>
                  </div>
                  <div className="cfoot"><button className="cfbtn r">Open →</button></div>
                </a>
                <a href="/forms" className="card" style={{textDecoration:'none'}}>
                  <div className="cband g"></div>
                  <div className="cbody">
                    <div className="ctitle">Forms</div>
                    <div className="cdesc">Lead capture forms for fairs, school visits and agent meetings.</div>
                  </div>
                  <div className="cfoot"><button className="cfbtn g">Open →</button></div>
                </a>
              </div>
              <div className="slabel" style={{marginTop:24}}>World Overview</div>
              <div className="bottom-grid">
                <div className="panel">
                  <div className="ph"><div className="ph-title">Recent Agents</div><a href="/agents" className="ph-link">View all</a></div>
                  <div className="pb">
                    {recentAgents.map(a=>(
                      <div key={a.id} className="action-item" style={{cursor:'pointer'}} onClick={()=>window.location.href='/agents'}>
                        <div className="adot t"></div>
                        <div className="atext"><strong>{a.name}</strong><span>{a.hq_country}</span></div>
                        <div className="atime">{a.code}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="panel" ref={mapRef} style={{overflow:'hidden'}}>
                  <div className="ph"><div className="ph-title">Agent Network — World Map</div></div>
                  <div style={{width:"100%",height:220,display:"flex",alignItems:"center",justifyContent:"center",background:"#d6ecec",borderRadius:8,color:"#2d7a6e",fontSize:13}}>🌐 World Map — Coming Soon</div>
                </div>
                <div className="trip-panel">
                  <div className="ph"><div className="ph-title">Upcoming Trips</div><a href="/itinerary" className="ph-link">+ New</a></div>
                  <div style={{padding:'20px',textAlign:'center',color:'#b8896a'}}>
                    <div style={{fontSize:32,marginBottom:10,opacity:0.3}}>✈️</div>
                    <div style={{fontSize:12,fontStyle:'italic'}}>No trips yet</div>
                    <a href="/itinerary" style={{display:'inline-block',marginTop:12,fontSize:12,fontWeight:600,color:'#2d7a6e',textDecoration:'none'}}>Create itinerary →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
