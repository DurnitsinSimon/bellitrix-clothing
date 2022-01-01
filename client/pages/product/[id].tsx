import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';
import { items } from '..';
import SizeInput from '../../components/SizeInput';
import styles from '../../styles/Product.module.scss';

const Product: FC = () => {
	const router = useRouter();
	const { id } = router.query;
    const [size, setSize] = useState<string>('S');

    if(!id) {
        return <h1>Error</h1>;
    }

    const {price, name, soldOut = false, description, src, oneSize} = items[+id - 1];

	return (
		<div className={styles.product}>
			<div className={styles.product__body}>
                <h1 className={styles.product__cross} onClick={() => router.push('/')}>╳</h1>
				<img src={src} alt='' />
				<div className={styles.product__info}>
					<h1>{name}</h1>
                    <p>{`${Math.floor(price / 1000)} ${price % 1000}`} р.</p>
                    {soldOut ? <p className={styles.soldOut}>Нет в наличии</p> : <p>В наличии</p>}
                    <SizeInput value={size} onChange={e => setSize(e.target.value)} oneSize={oneSize}/>
                    <button className={soldOut ? styles.soldOut__btn : undefined}>{soldOut ? 'Нет в наличии' : 'Заказать'}</button>
                    <ul>
                        {description.split(',').map(item => <li>- {item}</li>)}
                    </ul>
                    <p>*Доставка в течении 4-7 дней</p>
				</div>
			</div>
		</div>
	);
};

export default Product;
