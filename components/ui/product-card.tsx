import type React from "react"

interface ProductCardProps {
  product: {
    id: string
    name: string
    imageUrl?: string
    description?: string
    price?: number
  }
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {product.imageUrl && (
        <div className="aspect-w-4 aspect-h-3 relative">
          <img src={product.imageUrl || "/placeholder.svg"} alt={product.name} className="object-cover w-full h-full" />
        </div>
      )}
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-gray-700 font-medium">${product.price?.toFixed(2)}</span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

