export function loadPortfolio() {
  return (dispatch => {

  const request = {
    method: 'get',
    data: JSON.stringify()
  };

  fetch('/api/portfolio/index.json' + request)
    .then(data => data.json())
    .then(data => dispatch({ type: 'LOAD_PORTFOLIO', data: data }))
  }
)}
