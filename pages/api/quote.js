export default function handler (req, res){
  res.status(200).json({ quote: 'And I knew exactly what to do. But in a much more real sense, I had no idea what to do.'})
  console.log('sending res')
}