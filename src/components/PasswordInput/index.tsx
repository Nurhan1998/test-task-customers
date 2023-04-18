import { InputHTMLAttributes, useMemo, useState } from 'react';
import cn from '../../common/utils/classNames';

type PasswordInputProps = {
  inputProps: InputHTMLAttributes<HTMLInputElement>
}

const PasswordInput = (props: PasswordInputProps): JSX.Element => {
  const {
    inputProps,
  } = props;
  const { value, placeholder, onChange, onFocus, onBlur, disabled, className } = inputProps;
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const passwordToggleType = () => {
    setIsPasswordVisible(!isPasswordVisible);

  };

  const inputType = useMemo(() => isPasswordVisible ? 'text' : 'password', [isPasswordVisible]);

  return (
    <div className='relative'>
      <input
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        disabled={disabled}
        className={className}
      />
      <span
        className={cn(
          'absolute',
          'bg-contain', 'w-3.5',
          'h-3.5',
          'right-2',
          'top-[22px]',
          'bg-center',
          'bg-no-repeat',
          'cursor-pointer',
          {
            ['bg-[url(../assets/svgs/Eye.svg)]']: isPasswordVisible,
            ['bg-[url(../assets/svgs/Eye-Off.svg)]']: !isPasswordVisible,
          })}
        onClick={passwordToggleType}
      />
    </div>
  );
};

export default PasswordInput;
