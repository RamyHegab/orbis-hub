'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function Page() {
  const [profile, setProfile] = useState(null)
  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!session) { window.location.href = '/login'; return }
      const { data: p } = await supabase.from('users').select('full_name,role,universities(name)').eq('id', session.user.id).maybeSingle()
      if (p) setProfile(p)
    })
  }, [])
  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="slogo"><div className="lw">Orbis</div><div className="ls">The IO Buddy</div><div className="lt">International Office CRM</div></div>
        <nav className="snav">
          <div className="ng">Workspace</div>
          <a href="/dashboard" className="nb"><span className="ni">🏠</span>Home</a>
          <a href="/agents" className="nb"><span className="ni">🏢</span>Agent Database</a>
          <a href="/schools" className="nb"><span className="ni">🎓</span>Schools</a>
          <a href="/itinerary" className="nb"><span className="ni">✈️</span>Plan a Trip</a>
          <a href="/forms" className="nb"><span className="ni">📋</span>Forms</a>
          <div className="ndiv"></div>
          <div className="ng">Comms</div>
          <a href="/mail" className="nb"><span className="ni">✉️</span>Mailing</a>
          <a href="/notes" className="nb"><span className="ni">📝</span>Visit Notes</a>
        </nav>
        <div className="suser">
          <div className="uav">{profile?.full_name?.substring(0,2)||'RH'}</div>
          <div><div className="uname">{profile?.full_name||'User'}</div><div className="urole">{profile?.role||'Officer'}</div></div>
        </div>
      </aside>
      <main className="main">
        <div className="topbar">
          <div className="tb-bc"><span className="bc-cur">Forms</span></div>
          <div className="tb-right"><button onClick={()=>{supabase.auth.signOut();window.location.href='/login'}} style={{padding:'5px 14px',background:'#1c2e28',color:'#f2e4d0',border:'none',borderRadius:7,fontSize:11,fontWeight:600,cursor:'pointer'}}>Sign Out</button></div>
        </div>
        <div className="content">
          <div className="view active" style={{padding:'32px 36px'}}>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:28,fontWeight:700,color:'#2c1810',marginBottom:8}}>Forms</div>
            <div style={{fontSize:13,color:'#8a5c3c',marginBottom:24}}>Full Forms interface coming soon.</div>
            <div style={{padding:'16px 20px',background:'#e6f4f1',border:'1px solid #4db89e',borderRadius:10,fontSize:12,color:'#2d7a6e',maxWidth:500}}>
              ✦ Use the <strong>prototype HTML file</strong> for the full Forms experience.
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
