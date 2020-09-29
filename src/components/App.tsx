import React, {useEffect, useState} from 'react';
import BOOKMARKS from '../bookmarks';
import Bookmark from '../models/Bookmark';
import BookmarksGrid from './BookmarksGrid';
import './App.css';
import BookmarksList from './BookmarksList';

const App = () => {
  const [bookmarks, setBookmarks] = useState<Map<string, Bookmark[]>>(new Map());
  const [displayAsGrid, setDisplayAsGrid] = useState(false);

  useEffect(() => {
    const categorizedBookmarks = new Map();
    BOOKMARKS.sort((b1, b2) => b1.category < b2.category ? -1 : 1);

    for (const bookmark of BOOKMARKS) {
      const category = bookmark.category.toLowerCase();
      const filtered = categorizedBookmarks.get(category) || [];
      filtered.push(bookmark);
      categorizedBookmarks.set(category, filtered);
    }

    categorizedBookmarks.forEach((bookmarks: Bookmark[], _) => bookmarks.sort((b1, b2) => b1.title < b2.title ? -1 : 1));
    setBookmarks(categorizedBookmarks);
  }, []);

  return (
    <div>
      <header>
        <h1>curated.</h1>
      </header>

      {displayAsGrid ? <BookmarksGrid bookmarks={bookmarks} /> : <BookmarksList bookmarks={bookmarks} />}

      <footer>
        <small onClick={() => setDisplayAsGrid(!displayAsGrid)}>{displayAsGrid ? 'List View' : 'Grid View'}</small>
      </footer>
    </div>
  );
}

export default App;
