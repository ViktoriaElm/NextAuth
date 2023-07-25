
import { Fragment } from 'react';


export default function TBody({ rows, columns }) {
  console.log('columns=',columns);
  return <tbody>
    {rows?.map(row =>
      <Fragment key={row.id}>
        <tr className='admin-table' key={row.id} data-id={row.id}> 
          {columns?.map(({ name, getVal }) => <td className='admin-th' key={name}>
            {getVal(row)}
          </td>)}
        </tr>
      </Fragment>)}
  </tbody>;

};