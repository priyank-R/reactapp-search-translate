import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("Javascript");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://www.mediawiki.org/w/api.php", {
        params: {
          action: "query",
          format: "json",
          list: "search",
          origin: "*",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    if (term && !results.length) {
      search();
    } else {
      const timeOutId = setTimeout(() => {
        if (term) search();
      }, 500);

      return () => {
        clearTimeout(timeOutId);
      };
    }
  }, [term,results.length]);

  const renderedResults = results.map((info) => {
    return (
      <div key={info.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${info.pageid}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{info.title}</div>
          {/* For filtering html <> tags */}
          {info.snippet.replace(/<[^>]*>/gi, "")}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
