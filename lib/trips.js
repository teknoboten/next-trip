//should we do this here or in the page???
import { supabase } from '../utils/supabase'

//implement dynamic routing with getStaticPaths
//query tbe DB for a lst of tripIds belonging to the logged in user
export async function getAllTripIds() {
  const { data: trips } = await supabase.from('trips').select('id')

  const paths = trips.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }))

  return {
    paths,
  }
}

//used to populate trip detail page
export async function getTripData(id) {
  const { data: trip } = await supabase.from('trips').select('*').where()
}

// const { data: trips } = await supabase.from('trips').select('*')

// return {
//   props: { trips },
// }

// const photoResponse = await db.query(
//   `
//     SELECT *
//     FROM photos
//     WHERE trip_id = $1
//   `,
//   [req.params.id]
