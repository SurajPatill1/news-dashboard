import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';

const NewsItem = ({ news }) => (
  <div className="news-item">
    <h2>{news.title}</h2>
    <p>{news.description}</p>
    <a href={news.url} target="_blank" rel="noopener noreferrer" className="button">
      Read more
    </a>
  </div>
);

const NewsList = ({ news }) => (
  <div className="news-list">
    {news.map((item) => (
      <NewsItem key={item.url} news={item} />
    ))}
  </div>
);

const Dashboard = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=in&apiKey=46b22b9b98e74591b6687691cf76bd46'
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="nav">
      
      <div className="navbar">
        <div className="navbar-title">News Dashboard</div>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#aboutus">About Us</a>
          <a href="#careers">Careers</a>
          <a href="#contact">Contact</a>
          <a href="#help">Help</a>
        </div>
      </div>

      <div className="dashboard">
        <h1>Latest News</h1>
          <NewsList news={news} />
      </div>
    </div>
  );
};

export default Dashboard;
