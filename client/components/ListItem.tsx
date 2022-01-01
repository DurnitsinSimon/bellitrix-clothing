import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';
import styles from '../styles/ListItem.module.scss';

interface IProps {
	src: string;
	secondSrc: string;
	name: string;
	price: number;
	soldOut?: boolean;
	index: number;
}

const ListItem: FC<IProps> = ({ src, secondSrc, name, price, soldOut = false, index }) => {
	const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
	const [isAnimated, setIsAnimated] = useState<boolean>(false);
	const changeImageWithDelay = (bool: boolean) => {
		setIsAnimated(bool);
		setTimeout(() => {
			setIsMouseOver(bool);
		}, 70);
	};
	const router = useRouter();
	return (
		<div className={styles.listItem} onClick={() => router.push(`/product/${index + 1}`)}>
			{!isMouseOver ? (
				<img
					src={src}
					alt=''
					onMouseOver={() => changeImageWithDelay(true)}
					width={360}
					height={400}
					className={`${isAnimated ? styles.getDown : null} ${!isAnimated ? styles.getUp : null}`}
				/>
			) : (
				<img
					src={secondSrc}
					alt=''
					onMouseOut={() => changeImageWithDelay(false)}
					width={360}
					height={400}
					className={`${isAnimated ? styles.getUp : null} ${!isAnimated ? styles.getDown : null}`}
				/>
			)}
			<h1>{name}</h1>
			<p>{`${Math.floor(price / 1000)} ${price % 1000}`} р.</p>
			{soldOut ? <p className={styles.soldOut}>Нет в наличии</p> : <p>В наличии</p>}
		</div>
	);
};

export default ListItem;
