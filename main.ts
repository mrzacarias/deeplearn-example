import {Array1D, NDArrayMathCPU, Scalar} from 'deeplearn';

async function runExample() {
  const math = new NDArrayMathCPU();
  const a = Array1D.new([4, 3, 2]);
  const b = Scalar.new(2);

  const result = math.add(a, b);

  console.log('Option 1: With async/await.', await result.data());

  result.data().then(data => console.log('Option 2: With a Promise.', data));

  // This is simpler, but blocks the UI until the GPU is done.
  console.log('Option 3: Synchronous download of data.', result.dataSync());
}

runExample();
