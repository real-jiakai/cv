import React, { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("en");

  const switchLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en");
  };

  const headings = [
    {
      en: "Introduction",
      zh: "自我介绍",
    },
    {
      en: "Skills",
      zh: "技能",
    },
    {
      en: "Experience",
      zh: "生平履历",
    },
    {
      en: "Contact",
      zh: "联系方式",
    },
  ];

  const sections = [
    {
      type: "title",
      content: {
        en: "Gu Jiakai's Resume",
        zh: "顾佳凯的简历",
      },
    },
    {
      type: "avatar",
      src: "/images/profile.webp",
      alt: "Avatar",
    },
    {
      type: "text",
      heading: headings[0][language],
      content: {
        en:
          "Hello, my name is Gu Jiakai. I am a student from China, currently studying at Nanjing Xiaozhuang University. My major is Computer Science and Technology. I aspire to become a proficient front-end developer in the future.",
        zh:
          "你好，我叫顾佳凯，是一名中国的大学生，目前就读于南京晓庄学院。大学专业是计算机科学与技术。未来想成为一名精通前端的程序员。",
      },
    },
    {
      type: "list",
      heading: headings[1][language],
      content: [
        {
          en: "Proficient in HTML, CSS, JavaScript, React, and other front-end technologies",
          zh: "熟悉掌握 HTML、CSS、JavaScript、React 等前端技术",
        },
        {
          en: "Familiar with back-end technologies such as Node.js, Django, etc.",
          zh: "熟悉后端技术，如 Node.js、Django 等",
        },
        {
          en: "Experienced in writing",
          zh: "具备写作经验",
        },
      ],
    },
    {
      type: "list",
      heading: headings[2][language],
      content: [
        {
          en: "2019-2023: Nanjing Xiaozhuang University, Bachelor's degree in Computer Science and Technology",
          zh: "2019年-2023年：南京晓庄学院，本科，计算机科学与技术专业",
        },
      ],
    },
    {
      type: "list",
      heading: headings[3][language],
      content: [
        {
          en: "Weekly",
          zh: "周见",
          href: "https://gujiakai.top",
        },
        {
          en: "Blog",
          zh: "顾佳凯的网络日志",
          href: "https://blog.gujiakai.top",
        },
        {
          en: "GitHub",
          zh: "GitHub",
          href: "https://github.com/real-jiakai",
        },
        {
          en: "Email",
          zh: "邮箱",
          href: "mailto:jiakai@duck.com",
        },
      ],
    },
  ];

  return (
    <div className="container">
      {/* 标题和语言切换栏 */}
      <Header switchLanguage={switchLanguage} sections={sections} language={language} />
      <Section sections={sections} language={language} />
      {/* 页尾 */}
      <Footer />
    </div>
  );
}

export default App;