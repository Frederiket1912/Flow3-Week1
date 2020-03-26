import React, { useEffect, useState } from "react";
function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

const ApiFacade = () => {
  // makeOptions creates the headers and optional body for post or put
  const makeOptions = (method, body) => {
    const opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      }
    };
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };

  const getData = async url => {
    const options = makeOptions("GET"); //True add's the token to the request
    const response = await fetch(url, options).then(handleHttpErrors);
    return response;
  };

  const postData = async (url, data) => {
    const options = makeOptions("POST", data); //True add's the token to the request
    const response = await fetch(url, options).then(handleHttpErrors);
    return response;
  };
  return { getData, postData };
};

export default props => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const { getData, postData } = ApiFacade();

  const dataToList = data => {
    const list = data.map(book => <li key={book.id}>{book.title}</li>);
    return list;
  };

  const handlePromise = promise => {
    promise
      .then(promiseResult => {
        if (promiseResult instanceof Array) {
          setData(promiseResult);
        } else if (!promiseResult instanceof Array) {
          setData(...data, promiseResult);
        }
        console.log("DATA", promiseResult);
      })
      .catch(error => {
        console.log("ERROR:", error);
        //Is it a servererror (code 4xx or 5xx)
        if (error.fullError) {
          error.fullError.then(e => {
            if (e.msg) {
              setError(error.status + ":" + e.msg);
            } else {
              setError(error.status + ": Something bad happend");
            }
          });
        } else {
          // or is it a networerror (wrong host or sceme)
          setError("There was a network error");
        }
      });
  };

  useEffect(() => {
    if (props.method === "POST") {
      handlePromise(postData(props.url, props.data));
    } else {
      handlePromise(getData(props.url));
    }
    return () => {
      console.log("Now we clean up before unmounting");
    };
  }, []);

  return (
    <div>
      <ul>{dataToList(data)}</ul>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};
