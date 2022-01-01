import React, { FC } from 'react';
import styles from '../styles/Basket.module.scss';
interface Props {
	number?: number;
}

const Basket: FC<Props> = ({ number = 0 }) => {
	return (
		<div className={styles.basket}>
			<div className={styles.basket__body}>
				<img src='/basket.png' alt='' width={50} className={styles.basket__img} />
				<h1 className={styles.basket__number}>{number}</h1>
			</div>
		</div>
	);
};

export default Basket;
