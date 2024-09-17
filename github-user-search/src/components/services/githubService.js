const fetchData = async () => {
  const response = await fetch(`https://api.github.com/users/{username}`, {
    headers: {
      Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`
    }
  });

  const data = await response.json();
  console.log(data);
};