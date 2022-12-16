import Layout from '../../components/layout'
import { supabase } from '../../utils/supabase'
import Link from 'next/link'

export default function Trip({ trip }) {
  const t = trip[0]
  return (
    <Layout>
      <h1>{t.trip_name}</h1>
      <h3>{t.trip_description}</h3>

      <Link href="/">back to all trips</Link>
    </Layout>
  )
}

export async function getStaticPaths() {
  const { data: trips } = await supabase.from('trips').select('id')

  const paths = trips.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { id } }) {
  const { data: trip } = await supabase.from('trips').select('*').eq('id', id)
  return {
    props: { trip },
  }
}
