import axios from "axios"


async function getdata() {
  const res=await axios.get(`http://localhost:3000//api/try`) //in serverside we have to write the full url
  
  return res.data
}
async function getgithubdata(params:string){
  const res=await axios.get(`https://api.github.com/users/${params}`)
  return res.data
}
type githubtype={
  bio:string,
  login:string
}
const Page =async() => {
  const data=await getdata()
  const github:githubtype=await getgithubdata('tenzdelek') //giving type so that it will
  //give suggestion in the p section
  return (
    <div>{data.name}
    <p>{github.bio}</p> 
    </div>

  )
}

export default Page