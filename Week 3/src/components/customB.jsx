export function CustomButton() {
    const handleClick = () => {
      console.log('Button clicked!');
    };
  
    return (
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Click Me
      </button>
    );
  }
  