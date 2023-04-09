import { Results } from "../types/UserTypes";

interface userCardsHooks {
  fetchUsers: () => Promise<Results[]>;
}

export function userCardsHooks(): userCardsHooks {
  async function fetchUsers(): Promise<Results[]> {
    const response = await fetch("https://randomuser.me/api/?results=10");

    if (!response.ok) {
      throw new Error("Error" + response.status);
    }

    const body = await response.json();

    if (body.results != null) {
      return body.results;
    }
  }

  return {
    fetchUsers,
  };
}
