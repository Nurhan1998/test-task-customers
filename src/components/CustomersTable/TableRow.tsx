import { TableRowProps } from './types';
import cn from '../../common/utils/classNames';
import generateIcon from '../../common/utils/generateIcon';

export const TableRow = (props: TableRowProps) => {
  const { onDelete, customer, onEdit } = props;
  const { name, email, isAdmin, company, id } = customer;

  return (
    <div className='pt-2 grid grid-cols-table gap-x-4 gap-y-2'>
      <div className='flex items-center'>
        <span className='rounded-lg w-5 h-5 p-0.5 bg-iconBackground'>{generateIcon({ name })}</span>
        <span className='text-center ml-1'>{name}</span>
      </div>
      <p>{company}</p>
      <p>{email}</p>
      <div className={cn('w-[49px]', 'h-4', 'rounded', {
        ['bg-[#0EA5E9]']: isAdmin,
        ['bg-[#E2E8F0]']: !isAdmin,
      })} />
      <div className='flex justify-start'>
        <span onClick={() => onEdit(id)} className='cursor-pointer bg-[url(../assets/svgs/Edit.svg)] w-4 h-4' />
        <span onClick={() => onDelete(id)} className='cursor-pointer bg-[url(../assets/svgs/Trash.svg)] w-4 h-4 ml-3' />
      </div>
    </div>
  );
};