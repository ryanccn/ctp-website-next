<script lang="ts">
	import ctpIconAvif from '/src/assets/icon.png?w=32;64&format=avif&as=srcset';
	import ctpIconWebp from '/src/assets/icon.png?w=32;64&format=webp&as=srcset';
	import ctpIconPng from '/src/assets/icon.png?w=32;64&format=png&as=srcset';
	import ctpIconBase from '/src/assets/icon.png?w=64&format=png';
</script>

<picture>
	<source srcset={ctpIconAvif} type="image/avif" />
	<source srcset={ctpIconWebp} type="image/webp" />
	<source srcset={ctpIconPng} type="image/png" />
	<img src={ctpIconBase} alt="Catppuccin icon" width="32" height="32" />
</picture>
