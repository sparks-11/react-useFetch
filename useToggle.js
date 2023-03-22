import { useState } from "react";

export default function useToggle(initialValue = false) {
  const [isToogled, setIsToogled] = useState(initialValue);

  const setToogle = () => setIsToogled(!isToogled);

  return [isToogled, setToogle];
}
