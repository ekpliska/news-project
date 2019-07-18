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
