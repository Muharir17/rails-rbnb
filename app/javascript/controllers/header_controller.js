// hello_controller.js
import { Controller } from "@hotwired/stimulus"
import {enter, leave, toggle} from 'el-transition'

export default class extends Controller {

    static targets = ["dropdown", "openUserMenu"]
    connect() {
        console.log("enter : ", enter);

        this.openUserMenuTarget.addEventListener("click", () => {
            openDropDown(this.dropdownTarget);
        });
    }
}

function openDropDown(element) {
    toggle(element).then(() => {
        console.log("Enter transisition complete");
    })
}

function closeDropDown() {
    leave(element).then(() => {
        element.destroy();
    })
}