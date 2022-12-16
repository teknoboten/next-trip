import { supabase } from '../utils/supabase'
import Link from 'next/link'
import Layout from '../components/layout'
// export async function getStaticProps(context){
//   // const quote = await getQuote()
//   // return {
//   //   props: { quote }
//   //   }

// }

export default function Home({ trips }) {
  console.log({ trips })
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
