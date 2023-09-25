import React, { useState } from 'react';

function UrlForm() { //pass add (post) function to params as prop
  const [title, setTitle] = useState('');
  const [urlToShorten, setUrlToShorten] = useState('');

  // on change => set state with value

  const handleSubmit = e => {
    e.preventDefault();
    const shortenedUrl = {
      id: Date.now,
      urlToShorten,
      short_url: '',
      title: title
    }
    // add (post) function pass in shortenedUrl
    clearInputs();
  }

  const clearInputs = () => {
    setTitle('');
    setUrlToShorten('');
  }

  return (
    <form>
      <input
        type='text'
        placeholder='Title...'
        name='title'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <input
        type='text'
        placeholder='URL to Shorten...'
        name='urlToShorten'
        value={urlToShorten}
        onChange={e => setUrlToShorten(e.target.value)}
      />

      <button onClick={e => handleSubmit(e)}>
        Shorten Please!
      </button>
    </form>
  )
}

export default UrlForm;
