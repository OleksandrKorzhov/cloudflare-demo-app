export function onRequest(context) {
  return new Response(JSON.stringify({
    message: 'Hello world'
  }));
}
