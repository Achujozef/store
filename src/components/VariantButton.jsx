const VariantButton = ({ product, handleAddClick }) => {
    const [showPopup, setShowPopup] = useState(false);
  
    const handleSelectClick = () => {
      setShowPopup(true);
    };
  
    return (
      <>
        {product.variants && product.variants.length > 0 ? (
          <>
            <button
              onClick={handleSelectClick}
              className="bg-white-500 text-lime-700 py-0.5 px-2 rounded-lg text-xs hover:bg-blue-600 font-bold border border-lime-700"
            >
              Select
            </button>
            {showPopup && (
              <VariantPopup
                variants={product.variants}
                onClose={() => setShowPopup(false)}
                onAddClick={(variant) => handleAddClick(product.id)} // Ensure this is the correct handler
              />
            )}
          </>
        ) : (
          <button
            onClick={() => handleAddClick(product.id)}
            className="bg-white-500 text-lime-700 py-0.5 px-2 rounded-lg text-xs hover:bg-blue-600 font-bold border border-lime-700"
          >
            Add
          </button>
        )}
      </>
    );
  };
  