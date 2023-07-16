import { SVGProps } from './type';

const RefreshArrowSVG = (props: SVGProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
		className={props.className}
		fill='none'
		viewBox='0 0 18 18'>
		<path
			stroke={props.color || '#fff'}
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6.833 3.81A7.514 7.514 0 0 1 9 3.487a6.5 6.5 0 0 1 6.503 6.503A6.5 6.5 0 0 1 9 16.492 6.5 6.5 0 0 1 2.498 9.99c0-1.335.405-2.58 1.095-3.615M8.07 1.5 5.903 3.99 8.43 5.835'
		/>
	</svg>
);
export default RefreshArrowSVG;
