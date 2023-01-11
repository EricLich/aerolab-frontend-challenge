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
  const mounted = useRef<boolean>(false);
  const { user, setFetchedUser } = useUserStore((store) => store);
  console.log(user);
  const [fetchReturn, setFetchReturn] = useState<useFetchUser>({
    user: undefined,
    error: undefined,
    loading: true,
  });

  useEffect(() => {
    const controller = new AbortController();
    if (mounted.current && user.name === "") {
      /* setFetchReturn({ ...fetchReturn, loading: true }); */
      getUser()
        .then((res) => {
          setFetchReturn((prev) => (prev = { ...fetchReturn, loading: false, user: res as User }));
        })
        .catch((err) => setFetchReturn({ ...fetchReturn, error: err }));
      return;
    }
    return () => {
      controller.abort();
      mounted.current = true;
    };
  }, []);

  return fetchReturn;
};
