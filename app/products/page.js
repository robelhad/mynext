
export default async function ProductsPage() {
  

  console.log(process.env.REACT_APP_UPSTASH_REDIS_REST_URL);
  console.log(process.env.REACT_APP_API_URL);
    return (
  <div>{process.env.REACT_APP_API_URL}</div>)
 
  
}