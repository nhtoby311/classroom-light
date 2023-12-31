import { SVGProps } from './type';

const DayNightCycleSVG = (props: SVGProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
		className={props.className}
		fill='none'
		viewBox='0 0 18 18'>
		<g clipPath={`url(#dlc-${props.className})`}>
			<path
				fill={props.color || '#fff'}
				fillRule='evenodd'
				d='M8.687.138c-.238.151-.137 2.033.117 2.193.42.264.588-.035.623-1.112.037-1.12-.18-1.435-.74-1.08Zm-6.03 2.55c-.294.293-.206.533.426 1.155.718.707 1.222.784 1.29.196.077-.679-1.302-1.765-1.717-1.351Zm11.531.425c-.71.717-.786 1.22-.196 1.287.366.042 1.53-.98 1.53-1.344 0-.699-.612-.673-1.334.057Zm-6.832.833C1.62 5.983 2.94 14.236 9 14.236c6.926 0 7.098-10.295.175-10.464-.976-.024-1.367.013-1.82.174Zm.633.969c0 .026-.082.366-.182.757-.683 2.661 1.323 5.27 4.076 5.3.517.006.94.03.94.052.005.472-1.628 1.825-2.537 2.1-4.26 1.295-7.472-4.004-4.327-7.137.613-.612 2.03-1.36 2.03-1.072ZM.064 8.79c-.185.583-.01.688 1.092.653 1.11-.035 1.41-.198 1.143-.621C2.096 8.5.165 8.473.064 8.79Zm15.705-.086c-.47.47-.042.763 1.117.763 1.056 0 1.232-.112 1.053-.673-.085-.268-1.916-.343-2.17-.09ZM3.056 14.222c-.682.69-.74 1.12-.171 1.262.432.108 1.53-.982 1.483-1.472-.06-.61-.584-.527-1.312.21Zm10.63-.527c-.39.388.847 1.935 1.431 1.789a.48.48 0 0 0 .362-.361c.146-.582-1.404-1.817-1.793-1.428Zm-5 2.079c-.254.253-.178 2.08.09 2.165.562.178.675.003.675-1.05 0-.996-.092-1.25-.45-1.25-.099 0-.24.06-.315.135Z'
				clipRule='evenodd'
			/>
		</g>
		<defs>
			<clipPath id={`dlc-${props.className}`}>
				<path fill={props.color || '#fff'} d='M0 0h18v18H0z' />
			</clipPath>
		</defs>
	</svg>
);
export default DayNightCycleSVG;
