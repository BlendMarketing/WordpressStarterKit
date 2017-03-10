import _ from "underscore";
import BaseView from "views/BaseView";

import "blocks/welcome.scss";

export default class WelcomeView extends BaseView {

    constructor(options = {}) {
        _.defaults(options, {
            el: ".welcome",
        });

        super(options);
    }

    events() {
        return {
            "click": () => {
                this.$el.toggleClass("welcome--freakout");
            }
        };
    }

}
