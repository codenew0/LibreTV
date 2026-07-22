export function onRequest() {
  return new Response(
    'google-site-verification: google470e0827507c5257.html',
    {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    },
  );
}
