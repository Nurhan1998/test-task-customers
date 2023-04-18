import React, { useRef, useEffect } from 'react';
import { update } from 'jdenticon';

type GenerateIconArgs = {
  name: string;
  size?: string
}

const Jdenticon = ({ value = 'test', size = '100%' }) => {
  const icon = useRef<SVGSVGElement>(null);
  useEffect(() => {
    if (icon.current)
      update(icon.current, value);
  }, [value]);

  return (
    <div>
      <svg data-jdenticon-value={value} height={size} ref={icon} width={size} />
    </div>
  );
};

export default function generateIcon({ name, size = '24px' }: GenerateIconArgs) {
  return <Jdenticon value={name} size={size} />;
}