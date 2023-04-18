import { omit } from '../../common/utils/omit';
import { EStatus, ICustomer } from '../../components/CustomersTable/types';

export default function getTableData(customers: ICustomer[]) {
  return customers.map((elem) => ({
    ...omit(elem, 'firstName', 'lastName', 'password', 'status'),
    isAdmin: elem.status === EStatus.ADMINISTRATOR,
    name: `${elem.firstName} ${elem.lastName}`,
  }));
}
