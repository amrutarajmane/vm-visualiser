const VmTable = ({ vms, onUpdateStatus }) => {
  return (
    <table className="min-w-full border border-gray-300 rounded">
      <thead className="bg-gray-100">
        <tr className="text-center font-semibold text-black">
          <th className="px-4 py-2 border-b">Region</th>
          <th className="px-4 py-2 border-b">Usage</th>
          <th className="px-4 py-2 border-b">Status</th>
          <th className="px-4 py-2 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        {vms.map((vm) => {
          const status = vm.status.toLowerCase();

          return (
            <tr key={vm.id} className="text-center border-t border-gray-300">
              <td className="py-2 border-b">{vm.region}</td>
              <td className="py-2 border-b">{vm.usage}</td>
              <td className="capitalize py-2 border-b">{vm.status}</td>
              <td className="space-x-2 py-2 border-b">
                {status !== "running" && (
                  <button
                    type="button"
                    onClick={() => onUpdateStatus(vm.id, "Running")}
                    className="px-4 py-1.5 text-sm text-green-700 font-medium border border-green-600 rounded hover:bg-green-50"
                    aria-label={`Start ${vm.region} VM`}
                  >
                    Start
                  </button>
                )}
                {status !== "idling" && (
                  <button
                    type="button"
                    onClick={() => onUpdateStatus(vm.id, "Idling")}
                    className="px-4 py-1.5 text-sm text-yellow-700 font-medium border border-yellow-500 rounded hover:bg-yellow-50"
                    aria-label={`Idle ${vm.region} VM`}
                  >
                    Idle
                  </button>
                )}
                {status !== "terminated" && (
                  <button
                    type="button"
                    onClick={() => onUpdateStatus(vm.id, "Terminated")}
                    className="px-4 py-1.5 text-sm text-red-600 font-medium border border-red-500 rounded hover:bg-red-50"
                    aria-label={`Terminate ${vm.region} VM`}
                  >
                    Terminate
                  </button>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default VmTable;
