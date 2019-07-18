import React from 'react';
import './App.css';
import News from './components/News';
import Add from './components/Add';

class App extends React.Component {

	state = {
		news: null,
		isLoading: false
	}

	componentDidMount() {
		this.setState({
			isLoading: true
		});

		fetch('http://localhost:3000/data/newsData.json')
		.then(response => {
			return response.json()
		})
		.then(data => {
			this.setState({
				news: data,
				isLoading: false
			})
		});
	}

	/**
     * В этом методе жизненного цикла, получаем новое состояние,
     * и проверяем если в bigText содержится "pubg", то этому полю присваиваем значение "SPAM",
     * и затем отправляем в хранилище
     */
	static getDerivedStateFromProps(props, state) {
		let nextFilteredNews;

		// смотрим в state.news (ранее смотрели в props)
		// и проверяем, чтобы не клоинировать null
		// например, в момент первой отрисовки
		if (Array.isArray(state.news)) {
			nextFilteredNews = [...state.news];
			nextFilteredNews.forEach((item, index) => {
				if (item.bigText.toLowerCase().indexOf('pubg') !== -1) {
					item.bigText = 'SPAM';
				}
			})
			return {
				news: nextFilteredNews
			}
		}
		return null
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
		const { news, isLoading } = this.state;
		return (
			<div>
				<Add onAddNews={this.handleAddNews} />
				<h3>Новости</h3>
				{isLoading && <p>Загружаю...</p>}
				{Array.isArray(news) && <News data={news} />}
			</div>
		)
	}  
}

export default App;
