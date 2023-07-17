import { SVGProps } from './type';
const SlowBackSVG = (props: SVGProps) => (
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
			d='M17 9.004v1.67c0 2.07-1.372 2.921-3.047 1.883l-1.348-.838-1.349-.838c-1.675-1.039-1.675-2.734 0-3.772l1.349-.839 1.348-.838C15.628 4.412 17 5.257 17 7.334v1.67ZM8 9.004v1.67c0 2.07-1.372 2.921-3.047 1.883l-1.348-.838-1.349-.838c-1.675-1.039-1.675-2.734 0-3.772l1.349-.839 1.348-.838C6.628 4.412 8 5.257 8 7.334v1.67Z'
		/>
	</svg>
);
export default SlowBackSVG;
