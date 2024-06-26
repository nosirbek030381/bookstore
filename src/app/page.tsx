import { Cta } from '@/components';
import Hero from '@/components/hero/hero';
import { IBooks } from '@/interfaces/app.interface';
import Layout from '@/layout/layout';
import axios from 'axios';

const Home = async () => {
	// const user_id = cookies().get('user_id')?.value;

	// if (!user_id) {
	// 	return redirect('/auth');
	// }

	const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/getBooks`, {
		headers: {
			'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_API_KEY}`,
			'X-RapidAPI-Host': 'all-books-api.p.rapidapi.com',
		},
	});
	const data: IBooks[] = res.data;

	return (
		<>
			<Layout>
				<div className='relative'>{data.length && <Hero data={data.slice(0, 5)} />}</div>
				<div>
					{data.length && (
						<Cta title={'Lastest books'} button='More books ...' data={data.slice(10, 22)} />
					)}
				</div>
			</Layout>
		</>
	);
};

export default Home;
