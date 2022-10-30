import { publish } from 'gh-pages';

publish(
	'D:/Code/mc-squared/build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/elvinchong/mc-squared.git', // Update to point to your repository
		// user: {
		// 	name: 'Samuele de Tomasi', // update to use your name
		// 	email: 'samuele@stranianelli.com' // Update to use your email
		// },
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
