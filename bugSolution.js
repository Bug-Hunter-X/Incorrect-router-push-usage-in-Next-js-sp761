```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // Correct usage of router.push
    router.push({ pathname: '/another-page', query: { id: 1 } }); 
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}
```