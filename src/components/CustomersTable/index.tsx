import { TableRow } from './TableRow';
import { CustomerInList, TableProps } from './types';

export function CustomersTable<T extends CustomerInList>({
                                                           rowsData,
                                                           title, columnHeadersData, onEditItem, onDeleteItem,
                                                         }: TableProps<T>) {
  return (
    <div>
      <h1 className='font-bold font-size-3.5'>
        {title}
      </h1>
      <div className='w-full mt-5.5 table border-spacing-2 border-spacing-y-1'>
        <div className='grid grid-cols-table gap-x-4 gap-y-2'>
          {columnHeadersData.map(({ id, title }) => (
            <div key={id} className='text-grey1 text-3 font-normal text-left'>
              {title}
            </div>
          ))}
        </div>

        <div>
          {rowsData.map(customer => {
            return (
              <TableRow
                customer={customer}
                onDelete={onDeleteItem}
                onEdit={onEditItem}
                key={customer.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

