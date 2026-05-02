import { Pencil, Trash } from "lucide-react";
function ExpensesTable() {
  return (
    <table className="w-full relative">
      <thead className="bg-[#F3F4F5] sticky top-0 text-left">
        <tr>
          <th className="text-gray-400 text-xs uppercase pl-5 py-2">Date</th>
          <th className="text-gray-400 text-xs uppercase pl-5 py-2">Description</th>
          <th className="text-gray-400 text-xs uppercase pl-5 py-2">Category</th>
          <th className="text-gray-400 text-xs uppercase pl-5 py-2">Amount</th>
          <th className="text-gray-400 text-xs uppercase pl-5 py-2">Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr className="border-b border-gray-300/50">
          <td className="pl-5 py-3 font-semibold text-black/50">May 2,2026 </td>
          <td className="pl-5 py-3 font-semibold text-black/70">Mouse pad</td>
          <td className="pl-5 py-3 font-semibold text-black/70">technique</td>
          <td className="pl-5 py-3 font-semibold text-black/70">20 DH</td>
          <td className="pl-5 flex items-center gap-3 py-3 font-semibold">
            <span className="cursor-pointer text-gray-500 hover:text-black transition-colors">
              <Pencil size={17}/>
            </span>
            <span className="cursor-pointer text-gray-500 hover:text-black transition-colors">
              <Trash size={17}/>
            </span>
          </td>
        </tr>
        <tr className="border-b border-gray-300/50">
          <td className="pl-5 py-3 font-semibold text-black/50">May 2,2026 </td>
          <td className="pl-5 py-3 font-semibold text-black/70">Mouse pad</td>
          <td className="pl-5 py-3 font-semibold text-black/70">technique</td>
          <td className="pl-5 py-3 font-semibold text-black/70">20 DH</td>
          <td className="pl-5 flex items-center gap-3 py-3 font-semibold">
            <span className="cursor-pointer text-gray-500 hover:text-black transition-colors">
              <Pencil size={17}/>
            </span>
            <span className="cursor-pointer text-gray-500 hover:text-black transition-colors">
              <Trash size={17}/>
            </span>
          </td>
        </tr>
        <tr className="border-b border-gray-300/50">
          <td className="pl-5 py-3 font-semibold text-black/50">May 2,2026 </td>
          <td className="pl-5 py-3 font-semibold text-black/70">Mouse pad</td>
          <td className="pl-5 py-3 font-semibold text-black/70">technique</td>
          <td className="pl-5 py-3 font-semibold text-black/70">20 DH</td>
          <td className="pl-5 flex items-center gap-3 py-3 font-semibold">
            <span className="cursor-pointer text-gray-500 hover:text-black transition-colors">
              <Pencil size={17}/>
            </span>
            <span className="cursor-pointer text-gray-500 hover:text-black transition-colors">
              <Trash size={17}/>
            </span>
          </td>
        </tr>
        <tr className="border-b border-gray-300/50">
          <td className="pl-5 py-3 font-semibold text-black/50">May 2,2026 </td>
          <td className="pl-5 py-3 font-semibold text-black/70">Mouse pad</td>
          <td className="pl-5 py-3 font-semibold text-black/70">technique</td>
          <td className="pl-5 py-3 font-semibold text-black/70">20 DH</td>
          <td className="pl-5 flex items-center gap-3 py-3 font-semibold">
            <span className="cursor-pointer text-gray-500 hover:text-black transition-colors">
              <Pencil size={17}/>
            </span>
            <span className="cursor-pointer text-gray-500 hover:text-black transition-colors">
              <Trash size={17}/>
            </span>
          </td>
        </tr>
        <tr className="border-b border-gray-300/50">
          <td className="pl-5 py-3 font-semibold text-black/50">May 2,2026 </td>
          <td className="pl-5 py-3 font-semibold text-black/70">Mouse pad</td>
          <td className="pl-5 py-3 font-semibold text-black/70">technique</td>
          <td className="pl-5 py-3 font-semibold text-black/70">20 DH</td>
          <td className="pl-5 flex items-center gap-3 py-3 font-semibold">
            <span className="cursor-pointer text-gray-500 hover:text-black transition-colors">
              <Pencil size={17}/>
            </span>
            <span className="cursor-pointer text-gray-500 hover:text-black transition-colors">
              <Trash size={17}/>
            </span>
          </td>
        </tr>
        <tr className="border-b border-gray-300/50">
          <td className="pl-5 py-3 font-semibold text-black/50">May 2,2026 </td>
          <td className="pl-5 py-3 font-semibold text-black/70">Mouse pad</td>
          <td className="pl-5 py-3 font-semibold text-black/70">technique</td>
          <td className="pl-5 py-3 font-semibold text-black/70">20 DH</td>
          <td className="pl-5 flex items-center gap-3 py-3 font-semibold">
            <span className="cursor-pointer text-gray-500 hover:text-black transition-colors">
              <Pencil size={17}/>
            </span>
            <span className="cursor-pointer text-gray-500 hover:text-black transition-colors">
              <Trash size={17}/>
            </span>
          </td>
        </tr>
        <tr className="border-b border-gray-300/50">
          <td className="pl-5 py-3 font-semibold text-black/50">May 2,2026 </td>
          <td className="pl-5 py-3 font-semibold text-black/70">Mouse pad</td>
          <td className="pl-5 py-3 font-semibold text-black/70">technique</td>
          <td className="pl-5 py-3 font-semibold text-black/70">20 DH</td>
          <td className="pl-5 flex items-center gap-3 py-3 font-semibold">
            <span className="cursor-pointer text-gray-500 hover:text-black transition-colors">
              <Pencil size={17}/>
            </span>
            <span className="cursor-pointer text-gray-500 hover:text-black transition-colors">
              <Trash size={17}/>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ExpensesTable;
