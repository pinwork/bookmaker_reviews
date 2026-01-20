interface ComparisonTableProps {
  title: string;
  headers: string[];
  rows: string[][];
}

export function ComparisonTable({ title, headers, rows }: ComparisonTableProps) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>

      <div className="overflow-x-auto -mx-4 px-4">
        <table className="w-full min-w-[600px] border-collapse">
          <thead>
            <tr className="bg-gray-900 text-white">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-4 py-3 text-left text-sm font-semibold first:rounded-tl-lg last:rounded-tr-lg"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`
                  border-b border-gray-200
                  ${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  hover:bg-blue-50 transition-colors
                `}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-4 py-3 text-sm ${cellIndex === 0 ? 'font-medium text-gray-900' : 'text-gray-600'}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
