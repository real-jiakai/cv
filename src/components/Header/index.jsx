import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        const { sections, language, switchLanguage } = this.props;
        return (
            <div className="section">
                <h2>{sections[0].content[language]}</h2>
                <button className="lang-btn" onClick={switchLanguage}>
                    {language === "en" ? "中文" : "English"}
                </button>
            </div>
        )
    }
}
