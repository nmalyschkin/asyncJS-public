const fetchData = () => fetch("https://my.data.api/may/never/responde");

// new function will reject if fetchData is not resolved after 30 seconds
const fetchWithRetries = addTimeout(fetchData, 30_000);
