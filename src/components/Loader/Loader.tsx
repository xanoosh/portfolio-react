import { Oval } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Oval
      visible={true}
      height="80"
      width="80"
      strokeWidth={3}
      color="#646cff"
      secondaryColor="#646cff"
      ariaLabel="oval-loading"
      wrapperClass="h-[calc(100vh-64px)] w-full flex justify-center items-center"
    />
  );
}
