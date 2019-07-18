import React from 'react';
import PropTypes from 'prop-types';

class Add extends React.Component {

    state = {
        valueAuthor: '',
        valueTitle: '',
        valueText: '',
        isCheckRule: false
    }

    onChangeHandler = (e) => {
        const _value = e.currentTarget.value;
        const id = e.currentTarget.id;
        this.setState({
            [id]: _value
        });
    }

    onChangeRule = (e) => {
        let status = e.currentTarget.checked;
        this.setState({
            isCheckRule: status
        });
    }

    validate = () => {
        let _author = this.state.valueAuthor;
        let _title = this.state.valueTitle;
        let _text = this.state.valueText;
        let _agree = this.state.isCheckRule;
        if (_author.trim() && _title.trim() && _text.trim() && _agree) {
            return true;
        }
        return false;
    }

    onBtnClickHandler = (e) => {
        let author = this.state.valueAuthor;
        let text = this.state.valueTitle;
        let bigText = this.state.valueText;
        let id = +Date.now();
        // Передаем объект с новостью
        this.props.onAddNews({ id, author, text, bigText });
    }

    render() {
        const { author, text } = this.state;
        return (
            <div className="form-add-comment">
                <input type="text" className="add__author" placeholder="Ваше имя" value={author} onChange={this.onChangeHandler} id="valueAuthor" />
                <input type="text" className="add__text" placeholder="Заголовок" value={text} onChange={this.onChangeHandler} id="valueTitle" />
                <textarea className="add__text" placeholder="Текст новости" value={text} onChange={this.onChangeHandler} id="valueText"></textarea>
                <label className="add__checkrule">
                    <input type="checkbox" onChange={this.onChangeRule} /> Я соласен с правилами
                </label>
                <button className="add__btn" onClick={this.onBtnClickHandler} disabled={!this.validate()}>
                    Отправить
                </button>
            </div>
        )
    }
}

Add.propTypes = {
    onAddNews: PropTypes.func.isRequired
}

export default Add;