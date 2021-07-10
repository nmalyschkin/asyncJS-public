const fetchData = () => fetch("https://my.data.api/but/it/fails/sometimes");

// creating a new function that will retry automatically
const fetchWithRetries = addRetries(fetchData, 4);
