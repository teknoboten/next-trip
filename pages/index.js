import { supabase } from '../utils/supabase'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Home({ trips }) {
  console.log('supabase auth:', supabase.auth.user())
  // supabase.auth.onAuthStateChange((event, session) => {
  // if (event == 'SIGNED_IN') console.log('SIGNED_IN', session)
  // console.log(event)
  // console.log(session)
  // })
  // console.log({ trips })

  return (
    <Layout>
      {/* <p>hi</p> */}
      {trips.map((trip) => (
        <span key={trip.id}>
          <Link href={`/trips/${trip.id}`}>
            <h1>{trip.trip_name}</h1>
          </Link>
        </span>
      ))}
    </Layout>
  )
}

export const getStaticProps = async () => {
  const { data: trips } = await supabase.from('trips').select('*')

  return {
    props: { trips },
  }
}
