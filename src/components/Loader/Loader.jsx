import { Oval } from 'react-loader-spinner';

const Loader = ({size, color, secondaryColor, strokeSize}) => {
  return (
    <Oval
      height={size}
      width={size}
      color={color}
      wrapperStyle={{}}
      wrapperClass="loader"
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor={secondaryColor}
      strokeWidth={strokeSize}
      strokeWidthSecondary={strokeSize}
    />
  );
};

export { Loader };
