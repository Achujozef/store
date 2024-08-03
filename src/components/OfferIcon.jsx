 export  const OfferIcon = ({ offer }) => {
    if (offer <= 0) return null;
  
    return (
      <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
        {offer}% Off
      </div>
    );
  };
  
  export const TrendingOfferIcon = ({ offer }) => {
    if (offer <= 0) return null;
  
    return (
      <div className="absolute top-2 left-2 bg-orange-600 text-white text-xs px-1 py-0.5 rounded-lg flex flex-col items-center justify-center w-12 h-12">
        <span className="text-xs font-bold">{offer}%</span>
        <span className="text-xxs">Off</span>
      </div>
    );
  };
  
  export const ClasicOfferIcon = ({ offer }) => {
    if (offer <= 0) return null;
  
    return (
      <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-1 py-0.5 rounded-lg flex flex-col items-center justify-center w-12 h-12">
        <span className="text-xs font-bold">{offer}%</span>
        <span className="text-xxs">Off</span>
      </div>
    );
  };
  