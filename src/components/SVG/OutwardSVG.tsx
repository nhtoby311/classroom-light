import { SVGProps } from './type';
const OutwardSVG = (props: SVGProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
		className={props.className}
		fill='none'
		viewBox='0 0 18 18'>
		<g
			stroke={props.color || '#fff'}
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={10}
			strokeWidth={1.5}
			clipPath={`url(#ow-${props.className})`}>
			<path d='M6.325 16.013H2.108v-4.217m5.905-1.688-5.846 5.846M11.796 2.108h4.216v4.217m-5.904 1.688 5.845-5.846' />
		</g>
		<defs>
			<clipPath id={`ow-${props.className}`}>
				<path fill={props.color || '#fff'} d='M0 0h18v18H0z' />
			</clipPath>
		</defs>
	</svg>
);
export default OutwardSVG;
