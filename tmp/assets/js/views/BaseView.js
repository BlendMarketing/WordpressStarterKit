import rivets from "rivets";
import _ from "underscore";
import $ from "jquery";

import "rivets-stdlib";
import "rivets-backbone-adapter";
import "rivets-custom";

import { View } from "backbone";

export default class BaseView extends View {

    /**
     * Render paints a view on the page, and binds it to a rivets view.
     * Optionally a view that extends BaseView may define a `template` property
     * this property allows a view to be rendered dynamically into a predefined
     * container, identified by the `viewContainer` property.
     *
     * @return {BaseView}
     */
    render() {
        if (typeof this.template !== "undefined") {
            let template = $(this.template);

            if (typeof this.viewContainer !== "undefined") {
                template.appendTo($(this.viewContainer));
                this.setElement(template);
            } else {
                template.appendTo(this.$el);
            }

        }

        this.bindingView = rivets.bind(this.$el, {
            view: this,
            model: this.model,
            collection: this.collection,
            context: this.context
        });

        return this;
    }

    /**
     * Remove unbinds the rivets instance from the view and removes the view
     * from the DOM along with all the view's children.
     */
    remove() {
        this.bindingView.unbind();
        if (typeof this.views !== "undefined") {
            this.removeViews(this.views);
        }

        return super.remove();
    }
}

