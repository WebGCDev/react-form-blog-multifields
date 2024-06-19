import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';

import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import image6 from './assets/image6.jpg';
import image7 from './assets/image7.jpg';
import image8 from './assets/image8.jpg';

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

const App = () => {
  const [articles, setArticles] = useState([]);

  const addArticle = (formData) => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setArticles([
      ...articles,
      { ...formData, id: Date.now(), image: formData.image || randomImage },
    ]);
  };

  const deleteArticle = (id) => {
    setArticles(articles.filter((article) => article.id !== id));
  };

  return (
    <div>
      <Header />
      <div className="container">
        <Form onAddArticle={addArticle} />
        <ul className="list-group mt-3">
          {articles.map((article) => (
            <li
              key={article.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div className="d-flex align-items-center">
                <img
                  src={article.image}
                  alt="Article"
                  className="img-thumbnail me-3"
                  style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                  }}
                />
                <div>
                  <h5>{article.title}</h5>
                  <p>{article.content}</p>
                  <p>
                    <strong>Categoria:</strong> {article.category}
                  </p>
                  <p>
                    <strong>Tags:</strong>{' '}
                    {Object.keys(article.tags)
                      .filter((tag) => article.tags[tag])
                      .join(', ')}
                  </p>
                  <p>
                    <strong>Pubblicato:</strong>{' '}
                    {article.isPublished ? 'Sì' : 'No'}
                  </p>
                </div>
              </div>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteArticle(article.id)}
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default App;
