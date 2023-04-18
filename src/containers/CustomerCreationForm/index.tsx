import { useCallback, useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { ADD_CUSTOMER, EDIT_CUSTOMER } from '../../common/constants/constants';
import { customersContext } from '../../common/hooks/useCustomersContext';
import Form from '../../components/Form';
import { ICustomer } from '../../components/CustomersTable/types';

import { customerCreateFields, defaultValues } from './constants';

const FORM_ID = 'CUSTOMER_CREATION_FORM';


const CustomerCreationForm = () => {
  const { addOrUpdate, currentCustomer, setCurrentCustomer } = useContext(customersContext);

  const { control, handleSubmit, setValue, reset } = useForm<Omit<ICustomer, 'id'> | ICustomer>({
    defaultValues,
  });

  useEffect(() => {
      if (currentCustomer) Object.entries(currentCustomer).forEach(([key, value]) => {
        setValue(key as keyof ICustomer, value);
      });
    },
    [currentCustomer, setValue]);

  const handleCreateOrUpdateCustomer = useCallback((customer: Omit<ICustomer, 'id'>) => {
    if (!addOrUpdate || !setCurrentCustomer) return;
    const newCustomer = !!currentCustomer ? { ...customer, id: currentCustomer.id } : customer;

    addOrUpdate(newCustomer);
    setCurrentCustomer(null);
    reset();
  }, [addOrUpdate, setCurrentCustomer, currentCustomer, reset]);

  const handleResetCurrentCustomer = useCallback(() => {
    if (!setCurrentCustomer) return;

    setCurrentCustomer(null);
    reset();
  }, [setCurrentCustomer, reset]);


  return (
    <div className='w-[512px] p-5.5'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold font-size-3.5'>
          {!!currentCustomer ? EDIT_CUSTOMER : ADD_CUSTOMER}
        </h1>
        {currentCustomer && <h1
          className='font-bold font-size-3.5 border-solid border-2 rounded-lg border-sky-500 p-0.5 cursor-pointer'
          onClick={handleResetCurrentCustomer}
        >
          {ADD_CUSTOMER}
        </h1>}
      </div>
      <Form
        control={control}
        onSubmit={handleSubmit(handleCreateOrUpdateCustomer)}
        id={FORM_ID}
        config={customerCreateFields}
        setValue={setValue}
      />
    </div>
  );
};

export default CustomerCreationForm;