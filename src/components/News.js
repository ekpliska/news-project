import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

class News extends React.Component {

    state = {
        counter: 0,
    }

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