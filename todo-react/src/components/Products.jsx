import { useState, useEffect } from "react";

export function Products() {
    const [products, setProdutos] = useState([]);
    const [page, setPage] = useState(1)

    const url =
        `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`;

    const getData = async () => {
        try {
            let response = await fetch(url)
            let data = await response.json()

            setProdutos([...products, ...data.products])

        } catch(error) {
            console.log(error)
        }
    }

    const moreProducts = () => {
        setPage(page + 1)
    }
    useEffect(() => {
        getData()
    }, [page])

    const refresh = products.map((product) => {
        return (
            <div className="products-area">
                <div key={product.id} className="card-product">
                    <img src={product.image} alt={product.name}/>
                    <p className="product-name">{product.name}</p>
                    <p>{product.description}</p>
                    <p>De: R${product.oldPrice}</p>
                    <p className="atual-price">Por: R${product.price}</p>
                    <p>ou 2x de R${product.price / 2}</p>
                    <button>Comprar</button>
                </div>
            </div>
        )
    })


    return (
        <div className="products-content">
            <fieldset>
                <legend>Sua seleção especial</legend>
            </fieldset>
            <div className="products">
                {refresh}
            </div>
			<div className="btn">
				<button onClick={moreProducts}>Ainda mais produtos aqui!</button>
			</div>
        </div>
    );
}
