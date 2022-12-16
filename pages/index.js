import { supabase } from '../utils/supabase'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Home({ trips }) {
  return (
    <Layout>
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
