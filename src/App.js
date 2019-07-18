import React from 'react';
import './App.css';
import News from './components/News';
import Add from './components/Add';

const myNews = [
	{
		id: 1,
		author: "Саша Печкин",
		text: "В четверг, четвертого числа...",
		bigText: "в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж."
	},
	{
		id: 2,
		author: "Просто Вася",
		text: "Считаю. что $ должен стоить 35 рублей.",
		bigText: "А евро 42!"
	},
	{
		id: 3,
		author: "Max Frontend",
		text: "Прошло два года, а доллар так и не стоит 35 рублей...",
		bigText: "А евро опять выше 70."
	},
	{
		id: 4,
		author: "Гость",
		text: "Бесплатно. Без смс и регистрации",
		bigText: "Вся инфа на сайте, не реклама!"
	},
];

class App extends React.Component {

	state = {
		news: myNews
	}

	handleAddNews = (data) => {
		// Формируем массив на основе всего того что было уже в новостях,
		// и кладем это в новый массив + новую ностьсть размещаем в начале массива
		const nextNews = [data, ...this.state.news];
		this.setState({
			news: nextNews,
		})
	}

	render() {
		return (
			<div>
				<Add onAddNews={this.handleAddNews} />
				<h3>Новости</h3>
				<News data={this.state.news} />
			</div>
		)
	}  
}

export default App;
