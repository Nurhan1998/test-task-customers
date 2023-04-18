import { Control } from 'react-hook-form/dist/types/form';
import { ICustomer } from '../CustomersTable/types';

export enum EFieldType {
  TEXT = 'TEXT',
  RADIO = 'RADIO',
  PASSWORD = 'PASSWORD'
}


export interface IFieldConfig {
  name: keyof Omit<ICustomer, 'id'>;
  type: EFieldType;
  label: string;
  caption?: string;
  isFullWidth?: boolean;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export type FormProps = {
  id: string;
  config: IFieldConfig[];
  onSubmit: () => void;
  submitButtonText?: string;
  control: Control<ICustomer | Omit<ICustomer, 'id'>>,
  disabled?: boolean;
  className?: string;
  isFormLoading?: string;
  setValue: (name: keyof ICustomer, value: string | number) => void
}

