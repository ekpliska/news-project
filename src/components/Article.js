import React from 'react';
import PropTypes from 'prop-types';

class Article extends React.Component {
    state = {
        visible: false,
        countClick: 0,
    }
    handleReadMoreClick = (e) => {
        const count = this.state.countClick;
        e.preventDefault();
        // this.setState({ visible: true }, () => {
        //     alert('Состояние изменилось');
        // });
        this.setState({ 
            visible: true,
            countClick: count + 1,
        });
    }

    handleHideTextNews = (e) => {
        e.preventDefault();
        this.setState({ visible: false })
    }

    render() {
        const { author, text, bigText } = this.props.data;
        const { visible, countClick } = this.state;
        return (
            <div className="article">
                <p className="news__author">{author}</p>
                <p className="news__count">Прочитано ({countClick})</p>
                <p className="news__text">{text}</p>
                {
                    (!visible) ? 
                        <a href="#readmore" className="news__readmore" onClick={this.handleReadMoreClick}>Подробнее</a> :
                        null
                }
                {
                    (visible) ? 
                        <p className="news__big-text">
                            {bigText}
                            &nbsp;&nbsp;&nbsp;
                            <a href="#hide" className="news__readmore" onClick={this.handleHideTextNews}>Скрыть</a>
                        </p> :
                        null
                }
            </div>
        )
    }
}

Article.propTypes = {
    data: PropTypes.shape ({
        id: PropTypes.number,
        author: PropTypes.string,
        text: PropTypes.string,
        bigText: PropTypes.string
    })
}

export default Article;