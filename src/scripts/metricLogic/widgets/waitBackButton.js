import {button_back_metric} from "../metric/button_back_metric.ts";
import {BUTTON_BACK_SELECTOR} from "../keys.ts";

export function waitBackButton() {
    const container = document.querySelector(BUTTON_BACK_SELECTOR);
    if (container && !container.dataset.BACKBTNINJECTED) {
        container.addEventListener('click', () => {
            button_back_metric();
        })
        container.dataset.BACKBTNINJECTED = "true";
    }
}