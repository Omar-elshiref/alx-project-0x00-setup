import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <>
      <h1 className=' text-xl font-extralight'>Landing Page</h1>
      <div className='flex    flex-wrap gap-4 justify-center items-center mt-10'>
        <Card />
        <Card />
        <Card />
      </div>
      <p>This is the landing page</p>
    </>
  );
};
export default Landing;
