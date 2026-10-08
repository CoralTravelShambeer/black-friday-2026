import { waitKvButton } from "./metricLogic/widgets/waitKvButton.js";
import { waitBackButton } from "./metricLogic/widgets/waitBackButton.js";
import { waitCountriesButtons } from "./metricLogic/widgets/waitCountriesButtons.js";

export default function init() {
  waitKvButton();
  waitBackButton();
  waitCountriesButtons();
}
