'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function AgentsPage() {
  const [agents, setAgents] = useState([])
  const [filtered, setFiltered] = useState([])
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState(null)
  const [selectedCountries, setSelectedCountries] = useState(new Set())
  const [allCountries, setAllCountries] = useState([])
  const [countrySearch, setCountrySearch] = useState('')
  const [showDD, setShowDD] = useState(false)

  useEffect(() => {
    async function load() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) { window.location.href = '/login'; return }
      const { data: p } = await supabase.from('users').select('full_name,role,universities(name)').eq('id', session.user.id).maybeSingle()
      if (p) setProfile(p)
      const { data } = await supabase.from('agents').select('*,agent_countries(country),contacts(*),branches(*)').order('name')
      if (data) {
        setAgents(data); setFiltered(data)
        const c = new Set(); data.forEach(a => a.agent_countries?.forEach(x => c.add(x.country)))
        setAllCountries([...c].sort())
      }
      setLoading(false)
    }
    load()
  }, [])

  useEffect(() => {
    const q = search.toLowerCase()
    setFiltered(agents.filter(a => {
      const mq = !q || a.name?.toLowerCase().includes(q) || a.code?.toLowerCase().includes(q) || a.hq_country?.toLowerCase().includes(q) || a.contacts?.some(c => c.full_name?.toLowerCase().includes(q))
      const mc = selectedCountries.size === 0 || [...selectedCountries].some(c => a.agent_countries?.some(ac => ac.country === c))
      return mq && mc
    }))
  }, [search, agents, selectedCountries])

  function toggleCountry(c) {
    const n = new Set(selectedCountries)
    n.has(c) ? n.delete(c) : n.add(c)
    setSelectedCountries(n)
  }

  if (loading) return <div style={{display:'flex',height:'100vh',alignItems:'center',justifyContent:'center',fontFamily:'Georgia,serif',background:'#f5ede0'}}><div style={{textAlign:'center'}}><div style={{fontSize:32,color:'#2c1810'}}>Orbis</div><div style={{fontSize:13,color:'#8a5c3c'}}>Loading agents…</div></div></div>

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="slogo"><div className="lw">Orbis</div><div className="ls">The IO Buddy</div><div className="lt">International Office CRM</div></div>
        <nav className="snav">
          <div className="ng">Workspace</div>
          <a href="/dashboard" className="nb"><span className="ni">🏠</span>Home</a>
          <a href="/agents" className="nb active"><span className="ni">🏢</span>Agent Database<span className="nbadge">{agents.length}</span></a>
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
      <main className="main">
        <div className="topbar">
          <div className="tb-bc"><span className="bc-cur">Agent Database</span></div>
          <div className="tb-right" style={{display:'flex',gap:8,alignItems:'center'}}>
            <button className="btn btn-primary btn-sm">+ Add Agent</button>
            <button onClick={()=>{supabase.auth.signOut();window.location.href='/login'}} style={{padding:'5px 14px',background:'#1c2e28',color:'#f2e4d0',border:'none',borderRadius:7,fontSize:11,fontWeight:600,cursor:'pointer'}}>Sign Out</button>
          </div>
        </div>
        <div className="content">
          <div className="view active">
            <div className="agents-shell">
              <div className="alp">
                <div className="alp-top">
                  <div className="alp-search"><span className="alp-sicon">⌕</span><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search agents…"/></div>
                  <div style={{position:'relative',marginTop:6}}>
                    <input value={countrySearch} onChange={e=>{setCountrySearch(e.target.value);setShowDD(true)}} onFocus={()=>setShowDD(true)}
                      placeholder="🌐 Filter by country…"
                      style={{width:'100%',padding:'7px 10px',border:'1.5px solid #d8c4a8',borderRadius:8,fontSize:12,background:'#f5ede0',outline:'none',boxSizing:'border-box'}}/>
                    {showDD && (
                      <div style={{position:'absolute',left:0,right:0,top:'100%',background:'white',border:'1.5px solid #2d7a6e',borderTop:'none',borderRadius:'0 0 8px 8px',zIndex:300,maxHeight:180,overflowY:'auto',boxShadow:'0 4px 16px rgba(0,0,0,.1)'}}>
                        {allCountries.filter(c=>!countrySearch||c.toLowerCase().includes(countrySearch.toLowerCase())).slice(0,12).map(c=>(
                          <div key={c} onClick={()=>{toggleCountry(c);setShowDD(false);setCountrySearch('')}}
                            style={{padding:'7px 12px',cursor:'pointer',fontSize:12,display:'flex',gap:8,borderBottom:'1px solid #f0e8d8',background:selectedCountries.has(c)?'#e6f4f1':'white'}}>
                            <span style={{color:'#2d7a6e',fontWeight:700}}>{selectedCountries.has(c)?'✓':'○'}</span>{c}
                            <span style={{marginLeft:'auto',fontSize:10,color:'#b8896a'}}>{agents.filter(a=>a.agent_countries?.some(ac=>ac.country===c)).length}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {selectedCountries.size>0 && (
                    <div style={{display:'flex',flexWrap:'wrap',gap:4,marginTop:6}}>
                      {[...selectedCountries].map(c=>(
                        <span key={c} style={{display:'inline-flex',alignItems:'center',gap:4,padding:'3px 8px',borderRadius:20,fontSize:11,fontWeight:600,background:'#e6f4f1',color:'#2d7a6e',border:'1px solid #4db89e'}}>
                          🌐 {c} <button onClick={()=>toggleCountry(c)} style={{background:'none',border:'none',cursor:'pointer',color:'#2d7a6e',fontSize:11,padding:0}}>✕</button>
                        </span>
                      ))}
                      <button onClick={()=>setSelectedCountries(new Set())} style={{padding:'3px 8px',borderRadius:20,fontSize:11,border:'1px solid #c8703a',color:'#c8703a',background:'transparent',cursor:'pointer'}}>Clear</button>
                    </div>
                  )}
                </div>
                <div className="alp-count">{filtered.length} agents</div>
                <div className="agent-list" onClick={()=>setShowDD(false)}>
                  {filtered.map(a=>(
                    <div key={a.id} onClick={()=>{setSelected(a);setActiveTab('overview')}} className={`ar${selected?.id===a.id?' active':''}`}>
                      <div className="ar-av">{a.name?.substring(0,2).toUpperCase()}</div>
                      <div style={{flex:1,minWidth:0}}>
                        <div className="ar-name">{a.name}</div>
                        <div className="ar-sub">{a.code} · {a.hq_country}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="adp">
                {!selected ? (
                  <div className="adp-empty"><div className="adp-empty-icon">🏢</div><div className="adp-empty-hint">Select an agent to view details</div></div>
                ) : (
                  <div style={{display:'flex',flexDirection:'column',flex:1,overflow:'hidden'}}>
                    <div className="adp-hd">
                      <div style={{flex:1}}>
                        <div className="adp-name">{selected.name}</div>
                        <div className="adp-legal">{selected.legal_name}</div>
                        <div className="adp-meta">
                          <span className="tag tag-teal">✓ Active</span>
                          <span className="tag tag-brown">📍 {selected.hq_country}</span>
                          {selected.code&&<span className="tag tag-brown">{selected.code}</span>}
                          {selected.officer&&<span className="tag tag-brown">👤 {selected.officer}</span>}
                        </div>
                      </div>
                    </div>
                    <div className="adp-tabs">
                      {['overview','branches','contacts'].map(tab=>(
                        <div key={tab} className={`adp-tab${activeTab===tab?' active':''}`} onClick={()=>setActiveTab(tab)} style={{textTransform:'capitalize'}}>{tab}</div>
                      ))}
                    </div>
                    <div className="adp-body">
                      {activeTab==='overview' && (
                        <div>
                          <div className="info-grid">
                            {[{label:'HQ Country',value:selected.hq_country},{label:'HQ City',value:selected.hq_city},{label:'Address',value:selected.hq_address,full:true},{label:'Agreement End',value:selected.agreement_end?new Date(selected.agreement_end).toLocaleDateString('en-GB'):null},{label:'Officer',value:selected.officer}].filter(f=>f.value).map(f=>(
                              <div key={f.label} className={`info-card${f.full?' full':''}`}><div className="ic-label">{f.label}</div><div className="ic-val">{f.value}</div></div>
                            ))}
                          </div>
                          {selected.agent_countries?.length>0&&(
                            <div style={{marginTop:16}}>
                              <div className="sec-hd">Countries of Operation <span>{selected.agent_countries.length} countries</span></div>
                              <div className="cstrip">{selected.agent_countries.map(c=><span key={c.country} className="ctag">🌐 {c.country}</span>)}</div>
                            </div>
                          )}
                        </div>
                      )}
                      {activeTab==='contacts'&&(
                        <div>
                          <div className="sec-hd">Contacts <span>{selected.contacts?.length||0}</span></div>
                          {selected.contacts?.length?selected.contacts.map(c=>(
                            <div key={c.id} className="cc-card">
                              <div className="cc-av">{c.full_name?.split(' ').map(w=>w[0]).join('').substring(0,2)}</div>
                              <div style={{flex:1}}>
                                <div style={{fontSize:13,fontWeight:600}}>{c.full_name}</div>
                                <div style={{fontSize:11,color:'#8a5c3c'}}>{c.role}</div>
                                {c.email&&<div style={{fontSize:11,color:'#2d7a6e'}}>{c.email}</div>}
                                {c.phone&&<div style={{fontSize:11,color:'#8a5c3c'}}>{c.phone}</div>}
                              </div>
                            </div>
                          )):<div style={{textAlign:'center',padding:40,color:'#b8896a',fontStyle:'italic'}}>No contacts recorded</div>}
                        </div>
                      )}
                      {activeTab==='branches'&&(
                        <div>
                          <div className="sec-hd">Branches <span>{selected.branches?.length||0}</span></div>
                          {selected.branches?.length?selected.branches.map(b=>(
                            <div key={b.id} className="bc-card"><div className="bc-name">{b.name||b.city}</div><div className="bc-loc">📍 {b.city}, {b.country}</div></div>
                          )):<div style={{textAlign:'center',padding:40,color:'#b8896a',fontStyle:'italic'}}>No branches recorded</div>}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
