import { useCallback, useContext, useEffect, useMemo } from 'react';

import { CustomersTable } from '../../components/CustomersTable';
import { CustomerInList } from '../../components/CustomersTable/types';
import { CUSTOMERS } from '../../common/constants/constants';
import { TableColumns } from '../../components/CustomersTable/constants';
import { customersContext, State } from '../../common/hooks/useCustomersContext';
import getTableData from './utils';

const CustomersList = () => {
  const { customers, setCurrentCustomer, deleteCurrentCustomer, initListData } = useContext<State>(customersContext);

  useEffect(() => {
    if (initListData)
      initListData();
    
    // need call this only on first render
    // eslint-disable-next-line
  }, []);

  const customersList: CustomerInList[] = useMemo(() =>
      getTableData(customers),
    [customers]);

  const handleDeleteCustomer = useCallback((id: number) => {
    if (deleteCurrentCustomer) deleteCurrentCustomer(id);
  }, [deleteCurrentCustomer]);

  const handleEditCustomer = useCallback((id: number) => {
    const selectedUser = customers.find(elem => elem.id === id);

    if (selectedUser && setCurrentCustomer) {
      setCurrentCustomer(selectedUser);
    }
  }, [setCurrentCustomer, customers]);

  return (
    <div className='p-5.5 w-full h-full'>
      <CustomersTable<CustomerInList>
        rowsData={customersList}
        columnHeadersData={TableColumns}
        title={CUSTOMERS}
        onDeleteItem={handleDeleteCustomer}
        onEditItem={handleEditCustomer}
      />
    </div>
  );
};

export default CustomersList;