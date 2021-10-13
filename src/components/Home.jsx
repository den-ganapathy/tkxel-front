import React, { useRef, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import "./../styles/home.scss";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState("");
  const serachContainer = useRef(null);
  const [error, setError] = useState(false);

  const BASE_URL = "https://tkxel-backend.herokuapp.com/api/";

  const handleFind = (e) => {
    e.preventDefault();

    setError(false);
    const search = serachContainer.current.value;
    if (search) {
      axios
        .get(BASE_URL + "/searchWord", {
          params: {
            search: search,
          },
        })
        .then((res) => {
          setData(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setError(true);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const search = serachContainer.current.value;
    if (search) {
      setError(false);
      axios
        .get(BASE_URL + "addWord", {
          params: {
            search: search,
          },
        })
        .then((res) => {
          setData(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setError(true);
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const search = serachContainer.current.value;
    if (search) {
      setError(false);
      axios
        .get(BASE_URL + "removeWord", {
          params: {
            search: search,
          },
        })
        .then((res) => {
          setData(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    serachContainer.current.value = "";
    setData("");
  };

  return (
    <>
      <div className="home">
        <div className="search">
          <form method="get">
            <input
              type="text"
              id="word-search"
              placeholder="Search Word"
              ref={serachContainer}
              required
            />
            <button onClick={handleSubmit}>
              <RiCloseFill />
            </button>
          </form>
          {error && <div className="error">Search Field Cannot be empty</div>}
        </div>
        <div className="button">
          <button className="button-find" onClick={handleFind}>
            {" "}
            Find{" "}
          </button>
          <button className="button-add" onClick={handleAdd}>
            {" "}
            Add Word
          </button>
          <button className="button-delete" onClick={handleDelete}>
            Delete Word
          </button>
        </div>
      </div>
      <div className="toastContainer">
        {data && !error && (
          <div className="toast">
            <div>{data}</div>
            <span onClick={() => setData("")}>
              <RiCloseFill />
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
