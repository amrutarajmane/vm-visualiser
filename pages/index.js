import VmTable from "../components/vmTable";
import data from "../data/vmdata.json"
export default function Home() {
  const [vms, setVms] = useState(data);

  useEffect(() => {
    fetch("http://localhost:4000/vms")
      .then(res => res.json())
      .then(data => setVms(data));
  }, []);

  const updatedStatus = (id, newStatus) => {
    const updatedVms = vms.map(vm =>
      vm.id === id ? { ...vm, status: newStatus } : vm
    );
    setVms(updatedVms);

  fetch(`http://localhost:4000/vms/${id}`, {
  method: "PATCH",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ status: newStatus })
})
.then(response => {
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
})
.catch(error => {
  console.error("Error updating status:", error);
});
  };

  
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">VM Visualiser</h1>
      <VmTable  vms={vms} onUpdateStatus={updatedStatus}/>
      </div>
  );
}
