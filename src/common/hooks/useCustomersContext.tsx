import React, { useReducer } from 'react';
import { ICustomer } from '../../components/CustomersTable/types';
import { getStorageData, removeStorageData, setStorageData } from '../utils/storageHelpers';


const INIT_STATE = {
  customers: [],
  currentCustomer: null,
};

export const customersContext = React.createContext<State>(INIT_STATE);

export type State = {
  customers: ICustomer[]
  currentCustomer: ICustomer | null
  setCurrentCustomer?: (customer: ICustomer | null) => void
  deleteCurrentCustomer?: (id: number) => void
  addOrUpdate?: (data: Omit<ICustomer, 'id'> | ICustomer) => void
  initListData?: () => void
}


function reducer(state: State, action) {
  switch (action.type) {
    case 'setCurrentCustomer':
      return {
        ...state,
        currentCustomer: action.payload,
      };

    case 'setCustomersList':
      return {
        ...state,
        customers: action.payload,
      };
    default:
      return state;
  }
};

const CustomersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const setCurrentCustomer = (customer: ICustomer | null) => {
    if (customer) {
      setStorageData('currentCustomer', JSON.stringify(customer))
        .then(() => {
          dispatch({ type: 'setCurrentCustomer', payload: customer });
        });
    } else {
      removeStorageData('currentCustomer').then(() => {
        dispatch({ type: 'setCurrentCustomer', payload: null });
      });
    }
  };

  const deleteCurrentCustomer = (id: number) => {
    const newList = state.customers.filter(customer => customer.id !== id);

    setStorageData('customers', JSON.stringify(newList)).then(() => {
      dispatch({ type: 'setCustomersList', payload: newList });
    });
  };

  const addOrUpdate = (data: Omit<ICustomer, 'id'> | ICustomer) => {
    let customers = [...state.customers];

    if ('id' in data) {
      customers = customers.reduce((customers, customer) => {
        if (customer.id === data.id) {
          return [...customers, data];
        }
        return [...customers, customer];
      }, []);
    } else {
      const uniqId = new Date().getTime();
      customers.push({
        ...data,
        id: uniqId,
      });
    }

    setStorageData(
      'customers',
      JSON.stringify(customers),
    ).then(() => {
      dispatch({ type: 'setCustomersList', payload: customers });
    });
  };

  const initListData = () => {
    const storedCustomers = getStorageData('customers');
    dispatch({ type: 'setCustomersList', payload: JSON.parse(storedCustomers ?? '{}') ?? [] });
  };

  return (
    <customersContext.Provider
      value={{
        customers: state.customers,
        currentCustomer: state.currentCustomer,
        setCurrentCustomer,
        deleteCurrentCustomer,
        addOrUpdate,
        initListData,
      }}
    >
      {children}
    </customersContext.Provider>
  );
};

export default CustomersContextProvider;