const Section = ({ title, children }) => {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#f5f5f5',
        // padding: '2rem',
        // margin: '2rem',
        borderRadius: '1rem',
      }}
    >
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
