const VmTable = ({ vms, onUpdateStatus }) => {
  return (
    <table className="min-w-full border">
      <thead className="bg-gray-100">
        <tr className="text-center font-semibold text-black">
          <th className="px-4 py-2">Region</th>
          <th className="px-4 py-2">Usage</th>
          <th className="px-4 py-2">Status</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {vms.map((vm) => (
          <tr key={vm.id} className="text-center border-t">
            <td className="py-2">{vm.region}</td>
            <td>{vm.usage}</td>
            <td className="capitalize">{vm.status}</td>
            <td className="space-x-2 py-2">
              {vm.status !== "Running" && (
                <button
                  type="button"
                  onClick={() => onUpdateStatus(vm.id, "Running")}
                  className="px-3 py-1 text-green-700 border border-green-600 rounded "
                >
                  Start
                </button>
              )}
              {vm.status !== "Idling" && (
                <button
                  type="button"
                  onClick={() => onUpdateStatus(vm.id, "Idling")}
                  className="px-3 py-1 text-yellow-700 border border-yellow-500 rounded "
                >
                  Idle
                </button>
              )}
              {vm.status !== "Terminated" && (
                <button
                  type="button"
                  onClick={() => onUpdateStatus(vm.id,"Terminate")}
                  className="px-3 py-1 text-red-600 border border-red-500 rounded"
                >
                  Terminate
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VmTable;
