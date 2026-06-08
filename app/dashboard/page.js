'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function Dashboard() {
  const [profile, setProfile] = useState(null)
  const [stats, setStats] = useState({ agents:0, trips:0, forms:0, countries:0 })
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
      const { data: countries } = await supabase.from('agent_countries').select('country')
      const uniqueCountries = countries ? [...new Set(countries.map(c=>c.country))].length : 0
      setStats({ agents:ac||0, trips:tc||0, forms:fc||0, countries:uniqueCountries })
      setLoading(false)
    }
    load()
  }, [])

  const name = profile?.full_name || 'there'
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'

  if (loading) return (
    <div style={{display:'flex',height:'100vh',alignItems:'center',justifyContent:'center',background:'#f5ede0'}}>
      <div style={{textAlign:'center',fontFamily:'Georgia,serif'}}>
        <div style={{fontSize:32,color:'#2c1810',marginBottom:8}}>Orbis</div>
        <div style={{fontSize:13,color:'#8a5c3c'}}>Loading your workspace…</div>
      </div>
    </div>
  )

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="slogo">
          <div className="lw">Orbis</div>
          <div className="ls">The IO Buddy</div>
          <div className="lt">International Office CRM</div>
        </div>
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
          <div className="ndiv"></div>
          <button className="nb dim"><span className="ni">⚙️</span>Settings</button>
        </nav>
        <div className="suser">
          <div className="uav">{name.substring(0,2).toUpperCase()}</div>
          <div>
            <div className="uname">{name}</div>
            <div className="urole">{profile?.role||'Officer'}</div>
          </div>
        </div>
      </aside>

      <main className="main">
        <div className="topbar">
          <div className="tb-bc"><span className="bc-cur">Home</span></div>
          <div className="tb-right" style={{display:'flex',gap:8,alignItems:'center'}}>
            <span style={{fontSize:12,color:'#8a5c3c'}}>{profile?.universities?.name||''}</span>
            <button onClick={()=>{supabase.auth.signOut();window.location.href='/login'}}
              style={{padding:'5px 14px',background:'#1c2e28',color:'#f2e4d0',border:'none',borderRadius:7,fontSize:11,fontWeight:600,cursor:'pointer'}}>
              Sign Out
            </button>
          </div>
        </div>

        <div className="content">
          <div className="view active" style={{overflowY:'auto'}}>
            <div className="home-scroll">

              {/* Greeting */}
              <div className="greeting">
                <div className="glabel">{greeting}</div>
                <div className="gname">Welcome back, <em>{name}.</em></div>
                <div className="gsub">{profile?.universities?.name||'International Office'} · Here's what's happening across your agent network.</div>
              </div>

              {/* Stats Strip */}
              <div className="stats-strip">
                <div className="stp"><div className="spico t">🏢</div><div><div className="spval">{stats.agents}</div><div className="splabel">Active Agents</div></div></div>
                <div className="stp"><div className="spico r">🌐</div><div><div className="spval">{stats.countries}</div><div className="splabel">Countries</div></div></div>
                <div className="stp"><div className="spico g">✈️</div><div><div className="spval">{stats.trips}</div><div className="splabel">Trips Planned</div></div></div>
                <div className="stp"><div className="spico t">📋</div><div><div className="spval">{stats.forms}</div><div className="splabel">Forms</div></div></div>
              </div>

              {/* Cards */}
              <div className="slabel">Quick Access</div>
              <div className="cards-grid">
                <a href="/agents" className="card" style={{textDecoration:'none'}}>
                  <div className="cband t"></div>
                  <div className="cbody">
                    <div className="cillus tbg" style={{display:'flex',alignItems:'center',justifyContent:'center',fontSize:44}}>🏢</div>
                    <div className="ctitle">Agent Database</div>
                    <div className="cdesc">All {stats.agents} contracted agents, headquarters, branches and contacts.</div>
                    <div className="csearch"><span className="csi">⌕</span><span className="cst">Search agents…</span><span className="csa">→</span></div>
                  </div>
                  <div className="cfoot"><div className="cfstat"><strong>{stats.agents}</strong> agents · <strong>{stats.countries}</strong> countries</div><button className="cfbtn t">Open →</button></div>
                </a>
                <a href="/schools" className="card" style={{textDecoration:'none'}}>
                  <div className="cband r"></div>
                  <div className="cbody">
                    <div className="cillus rbg" style={{display:'flex',alignItems:'center',justifyContent:'center',fontSize:44}}>🎓</div>
                    <div className="ctitle">Schools</div>
                    <div className="cdesc">Partner universities — courses, requirements and agent briefing materials.</div>
                    <div className="csearch"><span className="csi">⌕</span><span className="cst">Find a school…</span><span className="csa">→</span></div>
                  </div>
                  <div className="cfoot"><div className="cfstat">Partner schools</div><button className="cfbtn r">Open →</button></div>
                </a>
                <a href="/itinerary" className="card" style={{textDecoration:'none'}}>
                  <div className="cband g"></div>
                  <div className="cbody">
                    <div className="cillus gbg" style={{display:'flex',alignItems:'center',justifyContent:'center',fontSize:44}}>✈️</div>
                    <div className="ctitle">Plan a Trip</div>
                    <div className="cdesc">Build itineraries day by day — schedule agent visits, fairs and school visits.</div>
                    <div className="csearch"><span className="csi">📍</span><span className="cst">Start a new itinerary…</span><span className="csa">→</span></div>
                  </div>
                  <div className="cfoot"><div className="cfstat"><strong>{stats.trips}</strong> trips planned</div><button className="cfbtn g">Open →</button></div>
                </a>
              </div>

              {/* World Overview */}
              <div className="slabel" style={{marginTop:24}}>World Overview & Trips</div>
              <div className="bottom-grid">

                {/* Trips Panel */}
                <div className="trip-panel">
                  <div className="ph">
                    <div className="ph-title">Upcoming Trips</div>
                    <a href="/itinerary" className="ph-link">+ New Trip</a>
                  </div>
                  <div style={{padding:'24px 16px',textAlign:'center'}}>
                    <div style={{fontSize:36,marginBottom:10,opacity:0.25}}>✈️</div>
                    <div style={{fontSize:12,color:'var(--brown4)',fontStyle:'italic',marginBottom:12}}>No trips planned yet</div>
                    <a href="/itinerary" style={{display:'inline-block',padding:'8px 16px',background:'var(--forest)',color:'#f2e4d0',borderRadius:7,fontSize:12,fontWeight:600,textDecoration:'none'}}>Plan your first trip →</a>
                  </div>
                </div>

                {/* World Map Panel */}
                {/* Forms */}
              <div className="slabel" style={{marginTop:24}}>Lead Capture</div>
              <div style={{background:'var(--white)',border:'1px solid var(--border)',borderRadius:12,padding:'16px 20px',display:'flex',alignItems:'center',gap:16,marginBottom:24}}>
                <div style={{fontSize:32}}>📋</div>
                <div style={{flex:1}}>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:700,color:'var(--brown)',marginBottom:4}}>Forms</div>
                  <div style={{fontSize:12,color:'var(--brown3)'}}>
                    {stats.forms > 0 ? `${stats.forms} active form${stats.forms>1?'s':''} — capture leads at fairs, visits and events` : 'Create lead capture forms for fairs, school visits and agent meetings'}
                  </div>
                </div>
                <a href="/forms" style={{padding:'8px 16px',background:'var(--forest)',color:'#f2e4d0',borderRadius:7,fontSize:12,fontWeight:600,textDecoration:'none',flexShrink:0}}>
                  {stats.forms > 0 ? 'View Forms →' : 'Create Form →'}
                </a>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
