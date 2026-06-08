'use client'
import { useEffect } from 'react'
import { supabase } from '../../lib/supabase'

export default function Dashboard() {
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) window.location.href = '/login'
      else window.location.href = '/orbis_app.html'
    })
  }, [])

  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh',background:'#f5ede0',fontFamily:'Georgia,serif'}}>
      <div style={{textAlign:'center'}}>
        <div style={{fontSize:32,color:'#2c1810',marginBottom:8}}>Orbis</div>
        <div style={{fontSize:13,color:'#8a5c3c',fontFamily:'sans-serif'}}>Loading your workspace…</div>
      </div>
    </div>
  )
}
