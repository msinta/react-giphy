import React, { useState } from 'react';

import SearchBar from './SearchBar';
import GifList from './GifList';
import Gif from './Gif';

const giphy = require('giphy-api')({
  apiKey: 'KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR',
  https: true
});

const App = () => {
  const [gifIdSelected, setGifIdSelected] = useState("WuGSL4LFUMQU");
  const [giIdList, setGifIdList] = useState(["13UZisxBxkjPwI", "WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq", "PnpkimJ5mrZRe", "LmNwrBhejkK9EFP504", "5ntdy5Ban1dIY", "ZG719ozZxGuThHBckn", "TilmLMmWrRYYHjLfub", "kHrKpJiCbOmkWD4xT9"]);
  const fetchGiphy = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      setGifIdList(res.data.map((gif) => gif.id));
    });
  };
  const changeSelectGif = (newSelectedGifId) => {
    setGifIdSelected(newSelectedGifId);
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar fetchGiphy={fetchGiphy} />
        <div className="selected-gif">
          <Gif gifId={gifIdSelected} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIdList={giIdList} changeSelectGif={changeSelectGif} />
      </div>
    </div>
  );
};

export default App;
