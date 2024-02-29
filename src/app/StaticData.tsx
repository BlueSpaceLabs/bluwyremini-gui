import { useState } from "react";

interface StaticData {
  baseUrl: string;
}

const domainUrl = "http://3.108.229.60:8082";

const useStaticData = (): StaticData => {
  const [baseUrl] = useState<string>(`${domainUrl}/bluwyremini-backend/info`);

  return { baseUrl };
};

export default useStaticData;
