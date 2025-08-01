const Card = ({ children }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '20px',
        margin: '10px',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      {children ? (
        children
      ) : (
        <>
          <h2>Default Card Title</h2>
          <p>This is some default content inside the card.</p>
        </>
      )}
    </div>
  );
};

export default Card;
