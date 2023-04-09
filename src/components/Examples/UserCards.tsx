import {
  Component,
  createResource,
  onMount,
  For,
  createSignal,
} from "solid-js";

import { userCardsHooks } from "../../hooks/userCardsHooks";
import { Results } from "../../types/UserTypes";
import { getFlagEmoji } from "../../utilities/getFlagEmoji";
import { getPixelsRGB } from "../../utilities/getPixelsRGB";

const UserCards: Component = () => {
  const { fetchUsers } = userCardsHooks();
  const [users] = createResource(fetchUsers);

  return (
    <div class="grid gap-4">
      <For each={users()}>{(user) => <UserCard user={user} />}</For>
    </div>
  );
};

export default UserCards;

const UserCard: Component<{ user: Results }> = (props) => {
  const [background, setBackground] = createSignal({
    "background-color": "#808080",
  });

  onMount(async () => {
    let image = new Image();
    // prevents cors error
    image.crossOrigin = "anonymous";
    image.src =
      "https://robohash.org/" +
      props.user.login.username +
      "?bgset=bg2&size=3x3";
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
              src={`https://robohash.org/${props.user.login.username}?bgset=bg2`}
              alt={`${props.user.login.username}'s avatar`}
              loading="lazy"
            />
            <div>
              <h3 class="text-base font-semibold text-gray-900 leading-6">
                {props.user.name.first} {props.user.name.last}
              </h3>
              <p class="text-sm text-gray-700">@{props.user.login.username}</p>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <p class="text-sm text-gray-700 whitespace-nowrap">
            Country: {props.user.location.country}{" "}
            {getFlagEmoji(props.user.nat)}
          </p>
          <p class="text-sm text-gray-700 whitespace-nowrap">
            Email: {props.user.email}
          </p>
        </div>
      </div>
    </div>
  );
};
