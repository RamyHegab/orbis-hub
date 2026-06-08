'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

const SIDEBAR = ({ profile, agentCount }) => (
  <aside className="sidebar">
    <div className="slogo"><div className="lw">Orbis</div><div className="ls">The IO Buddy</div><div className="lt">International Office CRM</div></div>
    <nav className="snav">
      <div className="ng">Workspace</div>
      <a href="/dashboard" className="nb"><span className="ni">🏠</span>Home</a>
      <a href="/agents" className="nb"><span className="ni">🏢</span>Agent Database<span className="nbadge">{agentCount}</span></a>
      <a href="/schools" className="nb"><span className="ni">🎓</span>Schools</a>
      <a href="/itinerary" className="nb active"><span className="ni">✈️</span>Plan a Trip</a>
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

const ACTIVITY_TYPES = {
  travel:      { icon:'✈️', label:'Travel',         color:'#c8940a', bg:'#fdf6e0' },
  agent_visit: { icon:'🤝', label:'Agent Visit',    color:'#2d7a6e', bg:'#e6f4f1' },
  fair:        { icon:'📢', label:'Education Fair',  color:'#c8703a', bg:'#fdf0e6' },
  school_visit:{ icon:'🎓', label:'School Visit',   color:'#3a9485', bg:'#e8f0f4' },
  rest:        { icon:'🛏️', label:'Rest Day',       color:'#8a5c3c', bg:'#ece0cc' },
  other:       { icon:'⚙️', label:'Other',          color:'#8a5c3c', bg:'#ece0cc' },
}

export default function ItineraryPage() {
  const [profile, setProfile] = useState(null)
  const [agentCount, setAgentCount] = useState(0)
  const [trips, setTrips] = useState([])
  const [activeTrip, setActiveTrip] = useState(null)
  const [days, setDays] = useState([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [showNewTrip, setShowNewTrip] = useState(false)
  const [newTripName, setNewTripName] = useState('')
  const [showAddActivity, setShowAddActivity] = useState(null) // dayId
  const [actType, setActType] = useState('')
  const [actNote, setActNote] = useState('')
  const [actTime, setActTime] = useState('')
  const [actName, setActName] = useState('')
  const [userId, setUserId] = useState(null)
  const [uniId, setUniId] = useState(null)

  useEffect(() => {
    async function load() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) { window.location.href = '/login'; return }
      const { data: p } = await supabase.from('users').select('id,full_name,role,university_id,universities(name)').eq('id', session.user.id).maybeSingle()
      if (p) { setProfile(p); setUserId(p.id); setUniId(p.university_id) }
      const { count: ac } = await supabase.from('agents').select('*',{count:'exact',head:true})
      setAgentCount(ac||0)
      // Load trips
      const { data: tripsData } = await supabase.from('trips')
        .select('*')
        .order('created_at', { ascending: false })
      if (tripsData) {
        setTrips(tripsData)
        if (tripsData.length > 0) loadTrip(tripsData[0])
      }
      setLoading(false)
    }
    load()
  }, [])

  async function loadTrip(trip) {
    setActiveTrip(trip)
    const { data: daysData } = await supabase.from('trip_days')
      .select('*, activities(*)')
      .eq('trip_id', trip.id)
      .order('day_number')
    setDays(daysData || [])
  }

  async function createTrip() {
    if (!newTripName.trim()) return
    setSaving(true)
    const { data, error } = await supabase.from('trips').insert({
      title: newTripName.trim(),
      university_id: uniId,
      officer_id: userId,
      status: 'draft'
    }).select().single()
    if (data) {
      setTrips([data, ...trips])
      setActiveTrip(data)
      setDays([])
      setNewTripName('')
      setShowNewTrip(false)
    }
    setSaving(false)
  }

  async function addDay() {
    if (!activeTrip) return
    const dayNum = days.length + 1
    // Calculate next date
    let nextDate = null
    if (days.length > 0 && days[days.length-1].date) {
      const last = new Date(days[days.length-1].date)
      last.setDate(last.getDate()+1)
      nextDate = last.toISOString().split('T')[0]
    }
    const dayName = nextDate ? new Date(nextDate+'T00:00:00').toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'short',year:'numeric'}) : ''
    const { data, error } = await supabase.from('trip_days').insert({
      trip_id: activeTrip.id,
      day_number: dayNum,
      date: nextDate,
      label: `Day ${dayNum}${dayName ? ' — '+dayName : ''}`
    }).select().single()
    if (data) setDays([...days, { ...data, activities: [] }])
  }

  async function addActivity(dayId) {
    if (!actType) return
    setSaving(true)
    const cfg = ACTIVITY_TYPES[actType]
    const name = actName.trim() || cfg.label
    const { data, error } = await supabase.from('activities').insert({
      trip_day_id: dayId,
      trip_id: activeTrip.id,
      university_id: uniId,
      type: actType,
      name,
      time_from: actTime||null,
      notes: actNote.trim()||null,
      status: 'planned'
    }).select().single()
    if (data) {
      setDays(days.map(d => d.id === dayId
        ? { ...d, activities: [...(d.activities||[]), data] }
        : d
      ))
      setActType(''); setActNote(''); setActTime(''); setActName('')
      setShowAddActivity(null)
    }
    setSaving(false)
  }

  async function removeActivity(dayId, actId) {
    await supabase.from('activities').delete().eq('id', actId)
    setDays(days.map(d => d.id === dayId
      ? { ...d, activities: d.activities.filter(a => a.id !== actId) }
      : d
    ))
  }

  async function removeDay(dayId) {
    if (!confirm('Remove this day and all its activities?')) return
    await supabase.from('activities').delete().eq('trip_day_id', dayId)
    await supabase.from('trip_days').delete().eq('id', dayId)
    const remaining = days.filter(d => d.id !== dayId)
    setDays(remaining)
  }

  async function deleteTrip(tripId) {
    if (!confirm('Delete this trip and all its days?')) return
    const tripDays = await supabase.from('trip_days').select('id').eq('trip_id', tripId)
    if (tripDays.data) {
      for (const d of tripDays.data) {
        await supabase.from('activities').delete().eq('trip_day_id', d.id)
      }
    }
    await supabase.from('trip_days').delete().eq('trip_id', tripId)
    await supabase.from('trips').delete().eq('id', tripId)
    const remaining = trips.filter(t => t.id !== tripId)
    setTrips(remaining)
    if (remaining.length > 0) loadTrip(remaining[0])
    else { setActiveTrip(null); setDays([]) }
  }

  if (loading) return (
    <div style={{display:'flex',height:'100vh',alignItems:'center',justifyContent:'center',background:'#f5ede0',fontFamily:'Georgia,serif'}}>
      <div style={{textAlign:'center'}}><div style={{fontSize:32,color:'#2c1810'}}>Orbis</div><div style={{fontSize:13,color:'#8a5c3c'}}>Loading…</div></div>
    </div>
  )

  return (
    <div className="shell">
      <SIDEBAR profile={profile} agentCount={agentCount}/>
      <main className="main">
        <div className="topbar">
          <div className="tb-bc">
            <span className="bc-link" style={{cursor:'pointer',color:'var(--brown3)'}} onClick={()=>window.location.href='/dashboard'}>Home</span>
            <span style={{color:'var(--brown4)',margin:'0 6px'}}>›</span>
            <span className="bc-cur">Plan a Trip</span>
            {activeTrip && <><span style={{color:'var(--brown4)',margin:'0 6px'}}>›</span><span className="bc-cur">{activeTrip.title}</span></>}
          </div>
          <div className="tb-right" style={{display:'flex',gap:8,alignItems:'center'}}>
            <button onClick={()=>setShowNewTrip(true)} className="btn btn-primary btn-sm">+ New Trip</button>
            <button onClick={()=>{supabase.auth.signOut();window.location.href='/login'}} style={{padding:'5px 14px',background:'#1c2e28',color:'#f2e4d0',border:'none',borderRadius:7,fontSize:11,fontWeight:600,cursor:'pointer'}}>Sign Out</button>
          </div>
        </div>

        <div className="content">
          <div className="view active" style={{display:'flex',overflow:'hidden'}}>

            {/* Left: Trip list */}
            <div style={{width:240,borderRight:'1px solid var(--border)',background:'var(--white)',display:'flex',flexDirection:'column',flexShrink:0}}>
              <div style={{padding:'12px 14px',borderBottom:'1px solid var(--border)',fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:1,color:'var(--brown3)'}}>
                Trips ({trips.length})
              </div>
              <div style={{flex:1,overflowY:'auto'}}>
                {trips.length === 0 ? (
                  <div style={{padding:'24px 14px',textAlign:'center',color:'var(--brown4)',fontSize:12,fontStyle:'italic'}}>
                    No trips yet.<br/>Click + New Trip to start.
                  </div>
                ) : trips.map(t => (
                  <div key={t.id}
                    onClick={()=>loadTrip(t)}
                    style={{padding:'10px 14px',borderBottom:'1px solid var(--border)',cursor:'pointer',
                      background:activeTrip?.id===t.id?'var(--teal-bg)':'',
                      borderLeft:activeTrip?.id===t.id?'3px solid var(--teal)':''}}>
                    <div style={{fontSize:12.5,fontWeight:600,color:'var(--brown)',marginBottom:2}}>{t.title}</div>
                    <div style={{fontSize:10.5,color:'var(--brown4)'}}>{new Date(t.created_at).toLocaleDateString('en-GB')}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Trip detail */}
            <div style={{flex:1,overflowY:'auto',padding:'20px 24px'}}>
              {!activeTrip ? (
                <div style={{textAlign:'center',padding:'60px 20px',color:'var(--brown4)'}}>
                  <div style={{fontSize:48,marginBottom:12,opacity:0.2}}>✈️</div>
                  <div style={{fontFamily:'Georgia,serif',fontSize:20,color:'var(--brown)',marginBottom:8}}>No trip selected</div>
                  <div style={{fontSize:13,marginBottom:20,fontStyle:'italic'}}>Create a new trip to start planning</div>
                  <button onClick={()=>setShowNewTrip(true)} style={{padding:'10px 20px',background:'var(--forest)',color:'#f2e4d0',border:'none',borderRadius:8,fontSize:13,fontWeight:600,cursor:'pointer'}}>+ New Trip</button>
                </div>
              ) : (
                <>
                  {/* Trip header */}
                  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:20,paddingBottom:16,borderBottom:'1px solid var(--border)'}}>
                    <div>
                      <div style={{fontFamily:'Georgia,serif',fontSize:24,fontWeight:700,color:'var(--brown)'}}>{activeTrip.title}</div>
                      <div style={{fontSize:12,color:'var(--brown3)',marginTop:3}}>
                        {days.length} day{days.length!==1?'s':''} · {days.reduce((s,d)=>s+(d.activities?.length||0),0)} activities
                      </div>
                    </div>
                    <div style={{display:'flex',gap:8}}>
                      <button onClick={addDay} style={{padding:'7px 14px',background:'var(--teal)',color:'white',border:'none',borderRadius:7,fontSize:12,fontWeight:600,cursor:'pointer'}}>+ Add Day</button>
                      <button onClick={()=>deleteTrip(activeTrip.id)} style={{padding:'7px 14px',background:'transparent',color:'#c0392b',border:'1px solid #e0a0a0',borderRadius:7,fontSize:12,cursor:'pointer'}}>Delete Trip</button>
                    </div>
                  </div>

                  {/* Days */}
                  {days.length === 0 ? (
                    <div style={{textAlign:'center',padding:'40px',border:'2px dashed var(--border)',borderRadius:12,color:'var(--brown4)'}}>
                      <div style={{fontSize:13,fontStyle:'italic',marginBottom:12}}>No days added yet</div>
                      <button onClick={addDay} style={{padding:'8px 16px',background:'var(--forest)',color:'#f2e4d0',border:'none',borderRadius:7,fontSize:12,fontWeight:600,cursor:'pointer'}}>+ Add First Day</button>
                    </div>
                  ) : days.map((day, idx) => (
                    <div key={day.id} style={{marginBottom:16,background:'var(--white)',border:'1px solid var(--border)',borderRadius:12,overflow:'hidden'}}>
                      {/* Day header */}
                      <div style={{display:'flex',alignItems:'center',gap:12,padding:'12px 16px',background:'var(--cream2)',borderBottom:'1px solid var(--border)'}}>
                        <div style={{width:32,height:32,borderRadius:8,background:'var(--forest)',color:'#f2e4d0',display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,fontWeight:700,flexShrink:0}}>
                          D{idx+1}
                        </div>
                        <div style={{flex:1,fontWeight:600,color:'var(--brown)',fontSize:13}}>{day.label}</div>
                        <button onClick={()=>setShowAddActivity(day.id)} style={{padding:'5px 12px',background:'var(--teal)',color:'white',border:'none',borderRadius:6,fontSize:11,fontWeight:600,cursor:'pointer'}}>+ Activity</button>
                        <button onClick={()=>removeDay(day.id)} style={{background:'none',border:'none',cursor:'pointer',color:'var(--brown4)',fontSize:13,padding:'0 4px'}}>✕</button>
                      </div>

                      {/* Activities */}
                      <div style={{padding:'8px 12px'}}>
                        {(!day.activities || day.activities.length === 0) ? (
                          <div style={{padding:'12px',color:'var(--brown4)',fontSize:12,fontStyle:'italic',textAlign:'center'}}>No activities — click + Activity to add</div>
                        ) : day.activities.map(act => {
                          const cfg = ACTIVITY_TYPES[act.type]||ACTIVITY_TYPES.other
                          return (
                            <div key={act.id} style={{display:'flex',alignItems:'flex-start',gap:10,padding:'10px',marginBottom:6,background:cfg.bg,borderRadius:8,border:`1px solid ${cfg.color}30`}}>
                              <span style={{fontSize:16,flexShrink:0}}>{cfg.icon}</span>
                              <div style={{flex:1,minWidth:0}}>
                                <div style={{fontSize:12.5,fontWeight:600,color:'var(--brown)'}}>{act.name}</div>
                                {act.time_from && <div style={{fontSize:11,color:cfg.color,marginTop:1}}>{act.time_from}</div>}
                                {act.notes && <div style={{fontSize:11,color:'var(--brown3)',marginTop:2}}>{act.notes}</div>}
                              </div>
                              <span style={{fontSize:10,fontWeight:600,padding:'2px 7px',borderRadius:20,background:'white',color:cfg.color,border:`1px solid ${cfg.color}60`,flexShrink:0}}>{cfg.label}</span>
                              <button onClick={()=>removeActivity(day.id,act.id)} style={{background:'none',border:'none',cursor:'pointer',color:'var(--brown4)',fontSize:12,padding:'0 2px',flexShrink:0}}>✕</button>
                            </div>
                          )
                        })}
                      </div>

                      {/* Add activity form */}
                      {showAddActivity === day.id && (
                        <div style={{padding:'12px 16px',borderTop:'1px solid var(--border)',background:'var(--cream)'}}>
                          <div style={{fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:1,color:'var(--brown3)',marginBottom:8}}>Add Activity</div>
                          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginBottom:8}}>
                            <select value={actType} onChange={e=>setActType(e.target.value)}
                              style={{padding:'7px 10px',border:'1.5px solid var(--border)',borderRadius:7,fontSize:12,background:'var(--white)',color:'var(--brown)',outline:'none'}}>
                              <option value="">Select type…</option>
                              {Object.entries(ACTIVITY_TYPES).map(([k,v])=><option key={k} value={k}>{v.icon} {v.label}</option>)}
                            </select>
                            <input value={actTime} onChange={e=>setActTime(e.target.value)} type="time"
                              style={{padding:'7px 10px',border:'1.5px solid var(--border)',borderRadius:7,fontSize:12,background:'var(--white)',color:'var(--brown)',outline:'none'}}/>
                          </div>
                          <input value={actName} onChange={e=>setActName(e.target.value)} placeholder="Activity name (optional)"
                            style={{width:'100%',padding:'7px 10px',border:'1.5px solid var(--border)',borderRadius:7,fontSize:12,background:'var(--white)',color:'var(--brown)',outline:'none',marginBottom:8,boxSizing:'border-box'}}/>
                          <textarea value={actNote} onChange={e=>setActNote(e.target.value)} placeholder="Notes (optional)"
                            style={{width:'100%',padding:'7px 10px',border:'1.5px solid var(--border)',borderRadius:7,fontSize:12,background:'var(--white)',color:'var(--brown)',outline:'none',resize:'none',height:60,marginBottom:8,boxSizing:'border-box'}}/>
                          <div style={{display:'flex',gap:8}}>
                            <button onClick={()=>addActivity(day.id)} disabled={!actType||saving}
                              style={{padding:'7px 16px',background:'var(--forest)',color:'#f2e4d0',border:'none',borderRadius:7,fontSize:12,fontWeight:600,cursor:'pointer'}}>
                              {saving?'Saving…':'Add Activity'}
                            </button>
                            <button onClick={()=>{setShowAddActivity(null);setActType('');setActNote('');setActTime('');setActName('')}}
                              style={{padding:'7px 14px',background:'transparent',border:'1px solid var(--border)',borderRadius:7,fontSize:12,cursor:'pointer',color:'var(--brown3)'}}>
                              Cancel
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>

        {/* New Trip Modal */}
        {showNewTrip && (
          <div style={{position:'fixed',inset:0,background:'rgba(28,46,40,0.5)',zIndex:500,display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div style={{background:'var(--white)',borderRadius:14,padding:0,width:440,boxShadow:'0 8px 40px rgba(0,0,0,0.2)',overflow:'hidden'}}>
              <div style={{padding:'18px 22px',borderBottom:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <div style={{fontFamily:'Georgia,serif',fontSize:20,fontWeight:700,color:'var(--brown)'}}>New Trip</div>
                <button onClick={()=>setShowNewTrip(false)} style={{background:'none',border:'none',cursor:'pointer',fontSize:18,color:'var(--brown3)'}}>✕</button>
              </div>
              <div style={{padding:'18px 22px'}}>
                <label style={{display:'block',fontSize:11,fontWeight:600,textTransform:'uppercase',letterSpacing:1,color:'var(--brown3)',marginBottom:6}}>Trip Name</label>
                <input value={newTripName} onChange={e=>setNewTripName(e.target.value)}
                  onKeyDown={e=>e.key==='Enter'&&createTrip()}
                  placeholder="e.g. Pakistan — Lahore · Oct 2026"
                  autoFocus
                  style={{width:'100%',padding:'10px 12px',border:'1.5px solid var(--border)',borderRadius:8,fontSize:13,color:'var(--brown)',background:'var(--cream)',outline:'none',boxSizing:'border-box'}}/>
              </div>
              <div style={{padding:'14px 22px',borderTop:'1px solid var(--border)',display:'flex',gap:8,justifyContent:'flex-end'}}>
                <button onClick={()=>setShowNewTrip(false)} style={{padding:'8px 16px',background:'transparent',border:'1px solid var(--border)',borderRadius:7,fontSize:13,cursor:'pointer',color:'var(--brown3)'}}>Cancel</button>
                <button onClick={createTrip} disabled={!newTripName.trim()||saving}
                  style={{padding:'8px 18px',background:'var(--forest)',color:'#f2e4d0',border:'none',borderRadius:7,fontSize:13,fontWeight:600,cursor:'pointer'}}>
                  {saving?'Creating…':'Create Trip →'}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
