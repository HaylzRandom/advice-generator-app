import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceFive } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const QuoteBox = () => {
	const [quote, setQuote] = useState('');
	const [quoteID, setQuoteID] = useState('');

	useEffect(() => {
		fetchQuote();
	}, []);

	const fetchQuote = async () => {
		await fetch('https://api.adviceslip.com/advice')
			.then((res) => res.json())
			.then((data) => {
				setQuote(data.slip.advice);
				setQuoteID(data.slip.id);
			});
	};

	// Handlers
	const handleClick = () => {
		fetchQuote();
	};
	return (
		<article className='quoteBox'>
			<h2 className='quoteBox__title'>ADVICE #{quoteID}</h2>
			<q className='quoteBox__quote'>{quote}</q>
			<div className='quoteBox__lineContainer'>
				<hr className='horizontal-line' />
				<div className='verticalLines'>
					<div className='vertical-line'></div>
					<div className='vertical-line'></div>
				</div>
				<hr className='horizontal-line' />
			</div>
			<button className='quoteBox__quoteBtn' onClick={handleClick}>
				<FontAwesomeIcon className='dice-icon' icon={faDiceFive} />
			</button>
		</article>
	);
};
export default QuoteBox;
