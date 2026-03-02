
export default async function ProductsPage() {
  

  console.log(process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_URL);
  console.log(process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_TOKEN);
    return (
  <div>Success loading products {process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_URL}  {process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_TOKEN}</div>)
 
  
}