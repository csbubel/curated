import React from 'react';
import Bookmark from '../models/Bookmark';
import './BookmarksList.css';

interface BookmarksListProps {
    bookmarks: Map<string, Bookmark[]>;
}

const BookmarksList = ({bookmarks} : BookmarksListProps) => {
  const renderBookmarks = () => {
    const sections: JSX.Element[] = [];

    bookmarks.forEach((categorizedBookmarks, category) => {
      const section = <section>
        <h3>{category}</h3>
        <ul>
          {categorizedBookmarks.map((bookmark, idx) => <li key={idx}><a href={bookmark.url} target="_blank" rel="noreferrer noopener">{bookmark.title}</a></li>)}
        </ul>
      </section>;

      sections.push(section);
    });

    return sections;
  };

    return (
        <main id="list-view">
            {renderBookmarks()}
        </main>
    );
}

export default BookmarksList;