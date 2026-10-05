import type { ComparisonRow } from '../../data/types'

export default function ComparisonTable({ rows }: { rows: ComparisonRow[] }) {
  return (
    <div className="overflow-x-auto rounded-[14px] border border-line bg-panel">
      <table className="w-full min-w-[560px] border-collapse text-left">
        <caption className="sr-only">Porównanie słownictwa: Hiszpania i Meksyk</caption>
        <thead>
          <tr className="border-b border-line">
            <th scope="col" className="p-4 text-xs font-bold uppercase tracking-widest text-spain">
              Hiszpania
            </th>
            <th scope="col" className="border-l border-line p-4 text-xs font-bold uppercase tracking-widest text-mexico">
              Meksyk
            </th>
            <th scope="col" className="border-l border-line p-4 text-xs font-bold uppercase tracking-widest">
              Po polsku
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.es} className="border-b border-line last:border-b-0">
              <td className="p-4">
                <span className="font-semibold italic">{r.es}</span>{' '}
                <span className="text-sm text-muted">{r.esPron}</span>
              </td>
              <td className="border-l border-line p-4">
                <span className="font-semibold italic">{r.mx}</span>{' '}
                <span className="text-sm text-muted">{r.mxPron}</span>
              </td>
              <td className="border-l border-line p-4">{r.pl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
