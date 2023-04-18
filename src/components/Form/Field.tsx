import { ChangeEventHandler, Fragment, memo, useCallback } from 'react';
import cn from '../../common/utils/classNames';

import RadioInput from '../RadioInput';
import PasswordInput from '../PasswordInput';

import { EFieldType, IFieldConfig } from './types';


export interface IFieldProps extends IFieldConfig {
  value?: string | ReadonlyArray<string> | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
}

const Field = (props: IFieldProps): JSX.Element => {
  const { name, type, label, caption, isFullWidth, className, ...rest } = props;

  const defaultInputClasses = cn(
    className,
    'mt-1.5',
    'rounded-lg',
    'h-5.5',
    'px-2',
    'py-1',
    'border',
    'border-inputBorderDefaultColor',
    'focus:outline-inputBorderActiveColor',
    { ['w-full']: !!isFullWidth },
  );

  const renderField = useCallback(() => {
    switch (type) {
      case EFieldType.TEXT:
        return (
          <input
            className={defaultInputClasses}
            {...rest}
          />
        );

      case EFieldType.RADIO:
        return <RadioInput {...rest} />;

      case EFieldType.PASSWORD:
        return <PasswordInput inputProps={{ ...rest, className: defaultInputClasses }} />;

      default:
        return <Fragment />;
    }
  }, [type, rest, defaultInputClasses]);


  return (
    <div className={cn('min-w-fit', 'mt-4', { ['w-full']: !!isFullWidth })}>
      <p className='leading-6 min-w-[204px]'>{label}</p>
      {renderField()}
      <p className='w-full text-sm mt-1.5 text-grey1'>{caption}</p>
    </div>
  );
};


export default memo(Field);

