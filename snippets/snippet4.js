let freeSpots = 5;

const manyTasks = Array.from({ length: 30 }, () => () => {
  if (freeSpots < 0) throw new Error("This is unacceptable!")
  // every tasks takes a free spot at the beginning 
  --freeSpots;
  // amd returns it once it's finished 
  sleep(Math.random() * 5000).then(() => ++freeSpots);
});

