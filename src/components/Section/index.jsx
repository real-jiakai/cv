import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
    render() {
        const { sections, language } = this.props;
        return (
            sections.slice(1).map((section, index) => (
                <div key={index} className="section">
                    {section.type === "title" ? (
                        <h2>{section.content[language]}</h2>
                    ) : section.type === "avatar" ? (
                        <div className="avatar">
                            <img src={section.src} alt={section.alt} />
                        </div>
                    ) : section.type === "text" ? (
                        <>
                            <h2>{section.heading}</h2>
                            <p>{section.content[language]}</p>
                        </>
                    ) : (
                        <>
                            <h2>{section.heading}</h2>
                            <ul>
                                {section.content.map((item, index) => (
                                    <li key={index}>
                                        {item.href ? (
                                            <a href={item.href} target="_blank" rel="noreferrer">
                                                {item[language]}
                                            </a>
                                        ) : (
                                            item[language]
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            ))
        )
    }
}
