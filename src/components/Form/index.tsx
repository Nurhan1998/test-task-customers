import { Controller } from 'react-hook-form';
import { FormProps } from './types';
import Field from './Field';


const Form = ({ config, submitButtonText = 'Save', onSubmit, control, setValue }: FormProps) => {
  const submitHandler = (e: any) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className='w-full flex flex-wrap justify-between mt-3' onSubmit={submitHandler}>
      {config.map(field => {
        return <Controller
          key={field.name}
          name={field.name}
          control={control}
          render={({ field: { onChange, value } }) => {
            const onFieldChange = (e) => {
              if (field.name === 'status') {
                setValue(field.name, e.target?.value);
              }
              onChange(e);
            };
            
            return (
              <Field onChange={onFieldChange} value={value} {...field} />
            );
          }}
        />;
      })}
      <button className='w-full h-5.5 mt-4 bg-[#0EA5E9] text-[#fff] rounded-lg'>{submitButtonText}</button>
    </form>
  );
};

export default Form;
