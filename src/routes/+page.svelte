<section>
	<h1>Vercel serverless functions go example</h1>
	<h3>Api endpoint not working to build when deploying to production</h3>
	<ul>
		<li>Try: <a href="/api/test">api-link</a></li>
		<li>Should return:</li>
		<li>{'{ "value": "Hi from the api" }'}</li>
		<li>works fine locally with 'vercel dev --listen 3000'</li>
		<li>fails during deployment, since go doesn't recognize package 'models'</li>
	</ul>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
