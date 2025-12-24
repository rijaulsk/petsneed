'use client';

import { useEffect, useState } from 'react';

export default function DynamicSchemaMarkup() {
  const [showSchema, setShowSchema] = useState(false);

  useEffect(() => {
    // Use a timeout to ensure the main thread is not blocked during initial render
    const timer = setTimeout(() => {
      setShowSchema(true);
    }, 1000); // Delay of 1 second

    return () => clearTimeout(timer);
  }, []);

  if (!showSchema) {
    return null;
  }

  // Dynamically import the SchemaMarkup component
  const SchemaMarkup = require('@/components/schema-markup').default;
  return <SchemaMarkup />;
}
