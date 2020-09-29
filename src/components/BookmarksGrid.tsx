import React from 'react';
import Bookmark from '../models/Bookmark';
import './BookmarksGrid.css';

interface BookmarksGridProps {
    bookmarks: Map<string, Bookmark[]>;
}

const BookmarksGrid = ({bookmarks} : BookmarksGridProps) => {
  const renderBookmarks = () => {
    const tags: JSX.Element[] = [];

    bookmarks.forEach((categorizedBookmarks, _) => {
      const aTags = categorizedBookmarks.map((bookmark, idx) => {
        return (
            <a key={idx} href={bookmark.url} target="_blank" rel="noreferrer noopener">
                <div>{bookmark.title}</div>
            </a>
        );
      });
      tags.push(...aTags);
    });

    return tags;
  };

    return (
        <main id="grid-view">
            {renderBookmarks()}
        </main>
    );
}

export default BookmarksGrid;