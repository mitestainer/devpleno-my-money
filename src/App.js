import useGet from './useGet'

const url = 'https://mymoney-e7e7b-default-rtdb.firebaseio.com/movimentacoes/2021-06.json'

function App() {
  const data = useGet(url)

  return (
    <div className="App">
      <h1>My money</h1>
      {data.loading && <p>Loading...</p>}
      {JSON.stringify(data.data)}
    </div>
  );
}

export default App;
