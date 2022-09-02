import { useState, useEffect } from "react";
import axios from "axios";

const url = 'https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1'

export function Products() {
    const [products, setProdutos] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const res =  await(fetch(url))

			const data = await res.json()

			setProdutos(data.products)
		}
		fetchData()
	}, [''])
	console.log(products)
	
    return (
        <div className="products-content">
            <fieldset>
                <legend>Sua seleção especial</legend>
            </fieldset>
        </div>
    );
}

