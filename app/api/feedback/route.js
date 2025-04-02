export async function POST(request) {
    try {
      const body = await request.json();
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbz-4Q7rl6DPhiyn6tFm057QFqFmiyeqEwpJYRtkh9Ewy6Zbo-Xjm7_mOFDkSeFGp1DRJQ/exec',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Proxy error:', error.message);
      return new Response(JSON.stringify({ status: 'error', message: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }