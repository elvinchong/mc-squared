<script>
	import burst from '$lib/images/bbburst.svg';
	import logo from '$lib/images/placeholder-logo.svg';
	import { Fullpage, FullpageSection } from 'svelte-fullpage';
</script>

<svelte:head>
	<title>mc² - Coming Soon</title>
</svelte:head>

<Fullpage class="text-brown-5">
	<FullpageSection title="Home">
		<div class="flex flex-col justify-center min-h-screen items-center gap-y-16 bg-brown-1 w-full">
			<div class="flex flex-col items-center">
				<img src={logo} class=" w-80 md:w-96" alt="logo" />
				<div>{'{YOUR_LOGO}'}</div>
			</div>
			<div class="text-8xl font-bold text-[#fff]">mc²</div>
		</div>
	</FullpageSection>
	<FullpageSection title="Description">
		<div class="flex min-h-screen items-center bg-brown-2 md:px-24 px-10 gap-x-8 ">
			<div class="basis-1/3 hidden md:block">
				<img src={burst} alt="coffee" />
				<div class="text-center">{`{REPLACE_WITH_COFFEE_CLIPART}`}</div>
			</div>
			<div class="flex flex-col basis-2/3 gap-y-6">
				<div class="flex flex-col">
					<div class="text-6xl font-bold">E=mc²</div>
					<div class="text-xl font-semibold">Energy = Milk x Coffee²</div>
				</div>
				<div class="md:text-lg text-base ">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris nisl, finibus id
					metus at, faucibus viverra velit. Proin faucibus, dolor et consectetur rutrum, lectus odio
					cursus nisl, ut vulputate tortor erat nec mi. Quisque feugiat nisl tortor. Etiam eget
					turpis a est finibus pellentesque id quis sem. In aliquet, ex lacinia gravida porttitor,
					diam ligula feugiat tortor, id dictum ligula mauris quis enim. Vestibulum at ligula
					laoreet, hendrerit eros vel, dignissim mi. Aliquam finibus ultrices elit. Sed sagittis,
					est sit amet auctor condimentum, nibh sapien scelerisque lectus, eget elementum tellus
					eros sed augue.
				</div>
			</div>
		</div>
	</FullpageSection>
	<FullpageSection title="Description">
		<div class="flex flex-col justify-center min-h-screen items-center bg-brown-1 w-full">
			<div class="text-6xl font-bold">COMING SOON</div>
		</div>
	</FullpageSection>
</Fullpage>
