import { SVGProps } from './type';

const FastForwardSVG = (props: SVGProps) => (
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
			strokeMiterlimit={10}
			strokeWidth={1.5}
			d='M1 8.996v-1.67c0-2.07 1.372-2.921 3.047-1.883l1.348.838 1.349.838c1.675 1.039 1.675 2.734 0 3.772l-1.349.839-1.348.838C2.372 13.588 1 12.743 1 10.666v-1.67ZM10 8.996v-1.67c0-2.07 1.372-2.921 3.047-1.883l1.348.838 1.349.838c1.675 1.039 1.675 2.734 0 3.772l-1.349.839-1.348.838c-1.675 1.02-3.047.175-3.047-1.902v-1.67Z'
		/>
	</svg>
);
export default FastForwardSVG;
