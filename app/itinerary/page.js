'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function ItineraryPage() {
  const [profile, setProfile] = useState(null)
  const [agentCount, setAgentCount] = useState(0)

  useEffect(() => {
    async function load() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) { window.location.href = '/login'; return }
      const { data: p } = await supabase.from('users').select('full_name,role,universities(name)').eq('id', session.user.id).maybeSingle()
      if (p) setProfile(p)
      const { count } = await supabase.from('agents').select('*', {count:'exact',head:true})
      setAgentCount(count || 0)
    }
    load()
  }, [])

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="slogo"><div className="lw">Orbis</div><div className="ls">The IO Buddy</div><div className="lt">International Office CRM</div></div>
        <nav className="snav">
          <div className="ng">Workspace</div>
          <a href="/dashboard" className="nb"><span className="ni">🏠</span>Home</a>
          <a href="/agents" className="nb"><span className="ni">🏢</span>Agent Database<span className="nbadge">{agentCount}</span></a>
          <a href="/schools" className="nb "><span className="ni">🎓</span>Schools</a>
          <a href="/itinerary" className="nb active"><span className="ni">✈️</span>Plan a Trip</a>
          <a href="/forms" className="nb "><span className="ni">📋</span>Forms</a>
          <div className="ndiv"></div>
          <div className="ng">Comms</div>
          <a href="/mail" className="nb "><span className="ni">✉️</span>Mailing</a>
          <a href="/notes" className="nb "><span className="ni">📝</span>Visit Notes</a>
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
          <div className="tb-bc"><span className="bc-cur">Plan a Trip</span></div>
          <div className="tb-right" style={{display:'flex',gap:8,alignItems:'center'}}>
            <button onClick={()=>{supabase.auth.signOut();window.location.href='/login'}} style={{padding:'5px 14px',background:'#1c2e28',color:'#f2e4d0',border:'none',borderRadius:7,fontSize:11,fontWeight:600,cursor:'pointer'}}>Sign Out</button>
          </div>
        </div>
        <div className="content">
          <div className="view active" style={{padding:'40px 36px'}}>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:32,fontWeight:700,color:'#2c1810',marginBottom:8}}>✈️ Plan a Trip</div>
            <div style={{fontSize:13,color:'#8a5c3c',marginBottom:28,lineHeight:1.6}}>
              Full Plan a Trip functionality is being connected. Use the prototype for now.
            </div>
            <a href="/dashboard" style={{display:'inline-block',padding:'10px 20px',background:'#1c2e28',color:'#f2e4d0',borderRadius:8,fontSize:13,fontWeight:600,textDecoration:'none'}}>← Back to Home</a>
          </div>
        </div>
      </main>
    </div>
  )
}
