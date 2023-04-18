interface ICustomer {
  id: number;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  status: EStatus;
  password: string;
}

export enum EStatus {
  USER = 'USER',
  ADMINISTRATOR = 'ADMINISTRATOR'
}

type TableHeader = {
  title: string;
  id: string;
};

type CustomerInList = Omit<ICustomer, 'firstName' | 'lastName' | 'password' | 'status'> & {
  isAdmin: boolean;
  name: string;
}

type TableProps<T> = {
  columnHeadersData: TableHeader[],
  title: string,
  rowsData: T[],
  onEditItem: (id: number) => void,
  onDeleteItem: (id: number) => void,
}

type TableRowProps = {
  customer: CustomerInList
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

export type {
  ICustomer,
  TableRowProps,
  TableProps,
  TableHeader,
  CustomerInList,
};