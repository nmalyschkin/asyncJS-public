const fetchData1 = () => fetch("https://alice.data.api/");
const fetchData2 = () => fetch("https://bob.data.api/");
const fetchData3 = () => fetch("https://charlie.data.api/");

// data will be set to the first response by any of the endpoints
const data = await race(fetchData1(), fetchData2(), fetchData3())
