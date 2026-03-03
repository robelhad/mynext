
export default async function ProductsPage() {
  

  console.log(process.env.NEXT_PUBLIC_API_URL);
  console.log(process.env.REACT_APP_API_URL);
    return (
  <div>{process.env.NEXT_PUBLIC_API_URL}</div>)
 
  
}
