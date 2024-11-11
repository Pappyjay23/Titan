import Logo from "./assets/titanium_logo.png";
const App = () => {
	return (
		<main className='bg-black text-white min-h-screen h-full'>
			<div className='flex justify-center items-center py-5 gap-3'>
				<img src={Logo} alt='Logo' className='h-[40px] w-auto border border-white rounded-full' />
				<h1 className='text-3xl'>Titan</h1>
			</div>
		</main>
	);
};

export default App;
