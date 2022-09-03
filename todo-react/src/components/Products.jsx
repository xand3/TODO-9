import { useState, useEffect } from "react";

export function Products() {
    const [products, setProdutos] = useState([]);

    const url =
        "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1";

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProdutos(data.products));
    }, []);

    return (
        <div className="products-content">
            <fieldset>
                <legend>Sua seleção especial</legend>
            </fieldset>
            <div className="products">
                {products.map((product) => {
                    return (
                        <div className="products-area">
                            <div key={product.id} className="card-product">
                                <img src={product.image} alt="" />
                                <p className="product-name">{product.name}</p>
                                <p>{product.description}</p>
                                <p>De: R${product.oldPrice}</p>
                                <p className="atual-price">Por: R${product.price}</p>
                                <p>ou 2x de R${product.price / 2}</p>
                                <button>Comprar</button>
                            </div>
                        </div>
                    );
                })}
            </div>
			<div className="btn">
				<button>Ainda mais produtos aqui!</button>
			</div>
        </div>
    );
}
