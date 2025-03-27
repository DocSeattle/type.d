
async function foobar() {
  return await fetch('http://localhost:5000/api/show-db')
    .then(res => {
      return res.json();
    });
};
interface user {
  id: number,
  username: string,
  email: string,
  hashword: string,
  created_at: string,
}
export default function Database() {
  const users = []
  const getJson = foobar();
  console.log(getJson)
  return (
    <>
      <div></div>
    </>
  )
}
