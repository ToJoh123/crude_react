import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import EditRow from '../components/EditRow';
import { Loading } from '../components/Loading';
export default function SingleProduct() {
	const { id } = useParams();
	const [ product, setProduct ] = useState(null);

	useEffect(
		() => {
			async function fetchProduct() {
				const response = await fetch(`http://localhost:3001/products/${id}`);
				const data = await response.json();
				setProduct(data);
			}
			fetchProduct();
		},
		[ id ]
	);

	return (
		<div>
			<h1>SingleProduct page </h1>
			{product ? (
				<EditRow key={product.id} product={product} />
			) : (
				<Loading
					url={
						'https://cdn.discordapp.com/attachments/1020970322746421338/1059191589097979965/Tom_Johansson_dog_chewing_electronings_953ff760-1825-454a-85a8-a2c81638ed1f.png'
					}>
					<h1>wait for it..</h1>
				</Loading>
			)}
		</div>
	);
}
