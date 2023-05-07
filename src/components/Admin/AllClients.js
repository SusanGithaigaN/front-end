
import Dashboard from "./Dashboard";
export default function AllClients() {
    const [allClients, setAllClients] = useState([]);

    useEffect(() =>{
    fetch("http://localhost:9292/")
      .then((res) => res.json())
      .then((data) => setAllClients(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Dashboard />
      <div>
      <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Model</th>
              <th scope="col">Speed</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          {allClients.map((client) => (
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{client.}</td>
              <td>{client.}</td>
              <td>{client.}</td>
            </tr>
          </tbody>
          ))}
        </table>
      </div>
    </>
  )
}
