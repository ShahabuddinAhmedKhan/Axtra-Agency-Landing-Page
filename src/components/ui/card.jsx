// src/components/ui/card.jsx

const Card = ({ title, content, children }) => {
  return (
    <div className="border p-5 rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{content}</p>
      {children}
    </div>
  );
};

const CardContent = ({ children }) => {
  return <div className="mt-4">{children}</div>;
};

export { Card, CardContent };