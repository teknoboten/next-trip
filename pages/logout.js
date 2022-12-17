import { useEffect } from 'react'
import { supabase } from '../utils/supabase'
import Link from 'next/link'
import Layout from '../components/layout'

const Logout = () => {
  useEffect(() => {
    supabase.auth.signOut()
  }, [])
  return (
    <Layout>
      <h2>Byeeeee</h2>
      <Link href={`/login`}>Oops, log back in</Link>
    </Layout>
  )
}

export default Logout
