import React, { useState } from 'react';
import styles from '../css/modules/Form.module.css';
import Button from './Button';

const Form = ({ onAddArticle }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddArticle(title);
      setTitle('');
    }
  };

  return (
    <form
      className={`${styles.form} card card-body shadow-sm`}
      onSubmit={handleSubmit}
    >
      <div className="mb-3">
        <label className="form-label">Titolo Articolo</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Inserisci il titolo dell'articolo"
        />
      </div>
      <Button type="submit">Aggiungi Articolo</Button>
    </form>
  );
};

export default Form;
