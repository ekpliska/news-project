import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

class News extends React.Component {

    // Создаем state на основе props
    state = {
        counter: 0,
    }

    /**
     * В этом методе жизненного цикла, получаем новое состояние,
     * и проверяем если в bigText содержится "pubg", то этому полю присваиваем значение "SPAM",
     * и затем отправляем в хранилище
     */
    // componentWillReceiveProps(nextProps) {
    //     let nextFilteredNews = [...nextProps.data];

    //     nextFilteredNews.forEach((item, index) => {
    //         if (item.bigText.toLowerCase().indexOf('pubg') !== -1) {
    //             item.bigText = 'SPAM'
    //         }
    //     })

    //     this.setState({
    //         filteredNews: nextFilteredNews
    //     });

    //     console.log({ nextProps });
    //     console.log({ oldProps: this.props });
    // }

    // static getDerivedStateFromProps(props, state) {
    //     let nextFilteredNews = [...props.data];

    //     nextFilteredNews.forEach((item, index) => {
    //         if (item.bigText.toLowerCase().indexOf('pubg') !== -1) {
    //             item.bigText = 'SPAM'
    //         }
    //     })
        
    //     return {
    //         filteredNews: props.data
    //     }
    // }

    renderNews = () => {
        const { data } = this.props;
        let newsTemplate = null;

        if (data.length) {
            newsTemplate = data.map((item, index) => {
                return (
                    <Article key={item.id} data={item} />
                )
            });
        } else {
            newsTemplate = <p>К сожалению новостей нет.</p>
        }
        
        return newsTemplate;
    }

    handleCounterClick = () => {
        const _counter = this.state.counter;
        this.setState({
            counter: _counter + 1,
        });
    }

    render() {
        const { data } = this.props;
        const { counter } = this.state;
        return (
            <React.Fragment>
                <div className="news">
                    {this.renderNews()}
                    {
                        (data.length) ?
                            <strong onClick={this.handleCounterClick}>Всего новостей: {data.length}</strong>:
                            null
                    }
                </div>
                <p>Количество кликов: {counter}</p>
            </React.Fragment>
        )
    }
}

// propTypes (с маленькой буквы) = свойство News
News.propTypes = {
    data: PropTypes.array.isRequired    // PropTypes (с большой буквы) = библиотека prop-types
}

export default News;