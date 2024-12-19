import React from 'react';

function Footer({ text, links }) {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
      <p>{text}</p>
      <ul className="list-unstyled">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
      </div>
    </footer>
  );
}

export default Footer;
