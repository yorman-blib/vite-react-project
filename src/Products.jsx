import NavBar from "./components/NavBar"
import plants from "./context/plants.json"
import Card from "./components/Card"
export default function Products(){
    console.log(plants)
    const fruitPlants= plants.filter((product)=> product.type === "fruit")
    const vegetablePlants= plants.filter((product)=> product.type === "vegetable")
    return (
        <div>
            <NavBar />
            <h1>Products</h1>
            <h2>fruit plants</h2>
            {fruitPlants.map((product, index)=>(
               <Card key={product.id} product={product} />
            ))}
            <h2>vegetable plants</h2>
            {vegetablePlants.map((product, index)=>(
               <Card key={product.id} product={product} />
            ))}
        </div>
    )
}