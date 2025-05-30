import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <>
      <h1 className=' text-xl font-extralight'>Landing Page</h1>
      <div className='flex flex-col items-center justify-center'>
        <Card />
        <Button style="bg-white text-black px-4 py-2 sm:rounded cursor-pointer" title="Book Now" />
        <Card />
        <Button style="bg-white text-black px-4 py-2 md:rounded cursor-pointer" title="Book Now" />
        <Card />
        <Button style="bg-white text-black px-4 py-2 rounded-full cursor-pointer" title="Book Now" />
      </div>
      <p>This is the landing page</p>
     </>
  );
};
export default Landing;
