import { IFieldProps } from '../Form/Field';
import { EStatus } from '../CustomersTable/types';

type RadioInputProps = Partial<IFieldProps>

const RadioInput = ({ onChange, value }: RadioInputProps) => {
  const inputClassNames = 'rounded-lg w-[1px] h-[1px] overflow-hidden border-0 peer contents';
  const labelClassNames = 'rounded block w-[210px] py-0.5 text-center peer-checked:bg-[#FFF] cursor-pointer';

  return (
    <div className='w-full h-5.5 bg-[#F5F5F5] flex justify-around items-center rounded-lg mt-1.5'>
      <div className='flex items-center px-0.5'>
        <input
          className={inputClassNames}
          type='radio'
          id='radio-one'
          onChange={onChange}
          name='switch-one'
          value={EStatus.USER}
          checked={value === EStatus.USER}
        />
        <label htmlFor='radio-one' className={labelClassNames}>User</label>
      </div>

      <div className='flex items-center px-0.5'>
        <input
          className={inputClassNames}
          type='radio'
          id='radio-two'
          onChange={onChange}
          name='switch-one'
          value={EStatus.ADMINISTRATOR}
          checked={value === EStatus.ADMINISTRATOR}
        />
        <label htmlFor='radio-two' className={labelClassNames}>Administrator</label>
      </div>
    </div>
  );
};

export default RadioInput;