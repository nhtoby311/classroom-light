import { SVGProps } from './type';

const PauseSVG = (props: SVGProps) => (
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
			d='M7.987 14.332V3.668c0-1.012-.427-1.417-1.507-1.417H3.757c-1.08 0-1.507.405-1.507 1.417v10.665c0 1.013.428 1.418 1.507 1.418H6.48c1.08 0 1.507-.405 1.507-1.418Zm7.763 0V3.668c0-1.012-.428-1.417-1.508-1.417H11.52c-1.072 0-1.508.405-1.508 1.417v10.665c0 1.013.428 1.418 1.508 1.418h2.723c1.08 0 1.507-.405 1.507-1.418Z'
		/>
	</svg>
);
export default PauseSVG;
