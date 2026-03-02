
export default async function ProductsPage() {
  

  console.log(process.env.UPSTASH_REDIS_REST_URL);
  console.log(process.env.UPSTASH_REDIS_REST_TOKEN);
    return (
  <div>Success loading products {process.env.UPSTASH_REDIS_REST_URL}</div>)
 
  
}