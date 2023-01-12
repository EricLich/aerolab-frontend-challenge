import { useEffect, useRef, useState } from "react";
import { getUser } from "../api/user.api";
import { useUserStore } from "../store/userStore";
import { User } from "../utils/types";

interface useFetchUser {
  user: User | undefined;
  loading: boolean;
  error: any;
}

export const useFetchUser = (): useFetchUser => {
  const { user } = useUserStore((store) => store);
  const [fetchReturn, setFetchReturn] = useState<useFetchUser>({
    user: undefined,
    error: undefined,
    loading: true,
  });

  useEffect(() => {
    const controller = new AbortController();
    if (user.name === "") {
      getUser()
        .then((res) => {
          setFetchReturn((prev) => (prev = { ...fetchReturn, loading: false, user: res as User }));
        })
        .catch((err) => setFetchReturn({ ...fetchReturn, error: err }));
      return;
    }
    return () => {
      controller.abort();
    };
  }, []);

  return fetchReturn;
};
