import { EStatus, ICustomer } from '../../components/CustomersTable/types';
import { EFieldType, IFieldConfig } from '../../components/Form/types';

export const defaultValues: Omit<ICustomer, 'id'> = {
  firstName: '',
  lastName: '',
  status: EStatus.USER,
  password: '',
  company: '',
  email: '',
};

export const customerCreateFields: IFieldConfig[] = [
  {
    name: 'firstName',
    disabled: false,
    label: 'First Name',
    type: EFieldType.TEXT,
    isFullWidth: false,
  }, {
    name: 'lastName',
    disabled: false,
    label: 'Last Name',
    type: EFieldType.TEXT,
    isFullWidth: false,
  }, {
    name: 'company',
    disabled: false,
    label: 'Company',
    type: EFieldType.TEXT,
    isFullWidth: true,
  }, {
    name: 'status',
    disabled: false,
    label: 'Status',
    type: EFieldType.RADIO,
    isFullWidth: true,
  }, {
    name: 'email',
    disabled: false,
    label: 'Email',
    type: EFieldType.TEXT,
    isFullWidth: true,
  }, {
    name: 'password',
    disabled: false,
    label: 'Password',
    type: EFieldType.PASSWORD,
    isFullWidth: true,
    caption: '8+ characters',
  },
];