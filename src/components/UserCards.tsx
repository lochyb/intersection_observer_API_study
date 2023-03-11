import {
  Component,
  createResource,
  onMount,
  For,
  Show,
  createSignal,
} from "solid-js";
import { getPixelsRGB } from "../utilities/getPixelsRGB";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

async function fetchUsers(): Promise<User[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Error" + response.status);
  }

  const body = await response.json();
  return body;
}

const UserCards: Component = () => {
  const [users] = createResource(fetchUsers);

  return (
    <div class="justify-center grid gap-4">
      <Show when={true}>
        <For each={users()}>{(user) => <UserCard user={user} />}</For>
      </Show>
    </div>
  );
};

export default UserCards;

const UserCard: Component<{ user: User }> = (props) => {
  const [background, setBackground] = createSignal({
    "background-color": "#808080",
  });

  onMount(async () => {
    let image = new Image();
    // prevents cors error
    image.crossOrigin = "anonymous";
    image.src =
      "https://robohash.org/" + props.user.username + "?bgset=bg2&size=3x3";
    await image.decode();

    setBackground({ "background-color": getPixelsRGB(image) });
  });

  return (
    <div
      class="px-4 py-5 bg-slate-50 shadow-sm sm:px-6 rounded-md transition-colors ease-in duration-1000"
      style={background()}
    >
      <div class="flex flex-col gap-4 sm:flex-row">
        <div class="flex-1">
          <div class="flex items-center gap-4">
            <img
              class="w-12 h-12 rounded-full"
              src={`https://robohash.org/${props.user.username}?bgset=bg2`}
              alt={`${props.user.username}'s avatar`}
            />
            <div>
              <h3 class="text-base font-semibold text-gray-900 leading-6">
                {props.user.name}
              </h3>
              <p class="text-sm text-gray-700">{props.user.username}</p>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <p class="text-sm text-gray-700">Website: {props.user.website}</p>
          <p class="text-sm text-gray-700">Email: {props.user.email}</p>
        </div>
      </div>
    </div>
  );
};
