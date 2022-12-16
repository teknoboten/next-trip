import Layout from '../../components/layout'
import { supabase } from '../../utils/supabase'

export default function Trip() {
  return (
    <Layout>
      <h1>this is a trip page</h1>
    </Layout>
  )
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  //get a list of all the users trip ids
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
  // Fetch necessary data for the blog post using params.id
  const { data: trip } = await supabase.from('trips').select('*').eq('id', id)

  return {
    props: { trip },
  }
}
