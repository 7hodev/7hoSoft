import styles from "./styles.module.css"

const products = [
  { id: 1, name: "Producto 1", price: 19.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "Producto 2", price: 29.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Producto 3", price: 39.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "Producto 4", price: 49.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 5, name: "Producto 5", price: 59.99, image: "/placeholder.svg?height=200&width=200" },
  { id: 6, name: "Producto 6", price: 69.99, image: "/placeholder.svg?height=200&width=200" },
]

export default function Market() {
  return (
    <div className={styles.market}>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image || "/placeholder.svg"} alt={product.name} className={styles.productImage} />
            <h3 className={styles.productName}>{product.name}</h3>
            <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
            <button className={styles.addToCartButton}>Añadir al carrito</button>
          </div>
        ))}
      </div>
    </div>
  )
}

